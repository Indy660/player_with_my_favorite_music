<script setup lang="ts">
import { computed, onBeforeMount, ref, watchEffect, watch, onMounted } from 'vue'
import { tracksApi } from '@/composable/tracks'
import TrackList from '@/components/TrackList.vue'
import PageTabs from '@/components/PageTabs.vue'
import MainInfoBand from '@/components/MainInfoBand.vue'
import VolumeControl from '@/components/VolumeControl.vue'
import ProgressControl from '@/components/ProgressControl.vue'
import MainControl from '@/components/MainControl.vue'
import OtherControl from '@/components/OtherControl.vue'
import SongText from '@/components/SongText.vue'
import Settings from '@/components/Settings.vue'
import Equalizer from '@/components/Equalizer.vue'
import SONGS_TEXT from '@/static_data/songs_text.json'
import SONGS_TEXT_WITH_TIMECODES from '@/static_data/songs_text_with_timecodes.json'
import SONGS_TEXT_WITH_TIMECODES_ASSEMBLY_AI from '@/static_data/songs_text_with_timecodes_assembly_ai.json'

interface CustomAudioElement extends HTMLAudioElement {
  currentRange: number
  duration: number
  volume: number
  currentTime: number
}

const {
  bestParties,
  nextTrack,
  previousTrack,
  pathToCurrentFile,
  currentTrackIndex,
  changeTab,
  selectTrack,
  tabSelected,
  currentSong,
  currentTracksList,
  favoriteSongs,
  handleAddFavoriteSongBtn
} = tracksApi()
onBeforeMount(async () => {
  initChangeColorScheme()
  type Action = () => void
  type ActionHandler = [MediaSessionAction, Action]

  const actionHandlers: ActionHandler[] = [
    [
      'play',
      () => {
        togglePlayPause()
        navigator.mediaSession.playbackState = 'playing'
      }
    ],
    [
      'pause',
      () => {
        togglePlayPause()
        navigator.mediaSession.playbackState = 'paused'
      }
    ],
    [
      'nexttrack',
      () => {
        nextTrack()
      }
    ],
    [
      'previoustrack',
      () => {
        previousTrackHandler()
      }
    ],
    // :TODO поправить seekTime, оно здесь работает но не перематывает
    [
      'seekto',
      (e: Event) => {
        console.log(e)
        audioPlayer.value!.currentTime = e.seekTime
      }
    ]
  ]

  for (const [action, handler] of actionHandlers) {
    try {
      navigator.mediaSession.setActionHandler(action, handler)
    } catch (error) {
      console.log(`The media session action "${action}" is not supported yet.`)
    }
  }
})

const isDarkTheme = ref(false)

function initChangeColorScheme(): void {
  const theme =
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
    (localStorage.getItem('dark-color-scheme') &&
      JSON.parse(localStorage.getItem('dark-color-scheme') as string))
      ? 'dark'
      : 'light'
  isDarkTheme.value = theme === 'dark'
  updateColorScheme()
}

watch(isDarkTheme, () => {
  updateColorScheme()
})

function updateColorScheme(): void {
  document.documentElement.style.setProperty('color-scheme', isDarkTheme.value ? 'dark' : 'light')
  localStorage.setItem('dark-color-scheme', JSON.stringify(isDarkTheme.value))
}

const audioPlayer = ref<CustomAudioElement | null>(null)

const currentTime = ref(0)
const volume = ref(0.8)

// Web Audio API для эквалайзера
const audioContext = ref<AudioContext | null>(null)
const sourceNode = ref<MediaElementAudioSourceNode | null>(null)
const equalizerFilters = ref<BiquadFilterNode[]>([])
const isAudioContextInitialized = ref(false)
const isEqualizerInitializing = ref(true)

// Настройки эквалайзера
const equalizerBands = ref<EqualizerBand[]>([
  { frequency: 60, label: '60 Hz', gain: 0 },
  { frequency: 170, label: '170 Hz', gain: 0 },
  { frequency: 310, label: '310 Hz', gain: 0 },
  { frequency: 600, label: '600 Hz', gain: 0 },
  { frequency: 1000, label: '1 kHz', gain: 0 },
  { frequency: 3000, label: '3 kHz', gain: 0 },
  { frequency: 6000, label: '6 kHz', gain: 0 },
  { frequency: 12000, label: '12 kHz', gain: 0 },
  { frequency: 14000, label: '14 kHz', gain: 0 },
  { frequency: 16000, label: '16 kHz', gain: 0 }
])
const equalizerPreset = ref<string>('default')

function handlerCanPlay(event: Event): void {
  setTotalTime(event)
  if (isPlaying.value) {
    playTrack()
  }
}

function handlerEnded(): void {
  if (!isRepeatMode.value) {
    nextTrack()
  } else {
    audioPlayer.value!.currentTime = 0
  }
}

function handlerTimeChange(seconds: number): void {
  audioPlayer.value!.currentTime = seconds
  isPlaying.value = true
  playTrack()
}

// TODO: проблема при перемотке, Failed to execute 'setPositionState' on 'MediaSession': The provided position cannot be greater than the duration.
function onTimeUpdate(event: Event): void {
  // console.log(event)
  currentTime.value = (event.target as HTMLAudioElement).currentTime
  // console.log(currentTime.value, totalTime.value)
  // TODO: не работает иногда перемотка в MediaSession
  // сразу ставится ползунок в конец, на паузе правильная позиция указывается
  navigator.mediaSession.setPositionState({
    duration: totalTime.value,
    playbackRate: 1,
    position: currentTime.value
  })
}

function onVolumeUpdate(event: Event): void {
  volume.value = (event.target as HTMLAudioElement).volume
}

function setVolume(value: number): void {
  audioPlayer.value!.volume = value
}

const totalTime = ref(0)

function setTotalTime(event: Event): void {
  const target = event.target as HTMLAudioElement
  totalTime.value = target.duration
  navigator.mediaSession.setPositionState({
    duration: totalTime.value,
    playbackRate: 1,
    position: 0
  })
}

function playTrack(): void {
  try {
    audioPlayer.value!.play().then((r) => r)
  } catch (error) {
    console.log('error', error)
  }
}

const isPlaying = ref(false)

function togglePlayPause(): void {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    playTrack()
  } else {
    // TODO: Cannot read properties of null (reading 'pause') на пробел
    audioPlayer.value!.pause()
  }
}

// for 1 loop
const isVolumeChanging = ref(false)

async function changeVolumeSlowly(isDecrease: boolean = true): Promise<void> {
  isVolumeChanging.value = true
  let steps: number = 20
  const stepValue: number = 0.01

  async function changeVolume(isDecrease: boolean): Promise<string> {
    return await new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (steps >= 0) {
          const newVolume: string = isDecrease
            ? (volume.value - stepValue).toFixed(2)
            : (volume.value + stepValue).toFixed(2)
          console.log(`${isDecrease ? '-' : '+'}`, newVolume)
          steps--
          audioPlayer.value!.volume = Number(newVolume)
        } else {
          clearInterval(intervalId)
          isVolumeChanging.value = false
          return resolve('done')
        }
      }, 100)
    })
  }

  await changeVolume(isDecrease)
}

function updateBestPartInHash(index: number) {
  const currentHash = window.location.hash.slice(1)
  const hashParams = new URLSearchParams(currentHash)

  if (hashParams.has('bestPart') && hashParams.get('bestPart') === String(index)) {
    return
  }

  hashParams.set('bestPart', String(index))

  const newHash = hashParams.toString()

  window.history.pushState({}, '', `${window.location.pathname}#${newHash}`)
}

async function shortTracksObserver(time: number): Promise<void> {
  // console.log('shortTracksObserver')
  // audioPlayer.value!.volume = 0.6

  for (let i = 0; i < bestParties.value.length; i++) {
    const currentBestParty = bestParties.value[i]
    console.log('currentBestParty', currentBestParty)
    // TODO: проблема при переключении, звук уходит со временем на 100%
    // if (time <= currentBestParty.start && !isVolumeChanging.value) {
    if (time <= currentBestParty.start) {
      updateBestPartInHash(i)
      console.log('start')
      // audioPlayer.value!.volume = 0.6
      audioPlayer.value!.currentTime = currentBestParty.start
      // TODO: отвратительно работает переключение песен
      // await changeVolumeSlowly(false)
      return
    } else if (time >= currentBestParty.start && time <= currentBestParty.end) {
      updateBestPartInHash(i)
      console.log('continue')
      // TODO: второе условие как хак
      if (
        time >= currentBestParty.end - 3 &&
        time <= currentBestParty.end - 2
        // && !isVolumeChanging.value
      ) {
        console.log('end')
        // audioPlayer.value!.volume = 0.8
        // await changeVolumeSlowly(true)
      }
      return
    }
  }
  // TODO: вызывается при переключении дважды
  console.log('nextTrack shortTracksObserver')
  handlerEnded()
}

watchEffect(async () => {
  if (tabSelected.value === 4 && isPlaying.value) {
    await shortTracksObserver(currentTime.value)
  }
})
const distanceBetweenComponents = ref('500px')

function readBestPartInHash() {
  const hash = window.location.hash.substring(1)
  const params = new URLSearchParams(hash)
  const bestPart = params.get('bestPart')


  if (bestPart !== null) {
    const index = parseInt(bestPart)
    if (!isNaN(index)) {
      const moment = bestParties.value[index]
      audioPlayer.value!.currentTime = moment.start
    }
  }
}

onMounted(() => {
  const progressControlDiv = document.querySelector('.progress_control_ref') as HTMLElement
  const containerDiv = document.querySelector('.container') as HTMLElement
  const rect1: DOMRect = progressControlDiv.getBoundingClientRect()
  const rect2: DOMRect = containerDiv?.getBoundingClientRect()
  distanceBetweenComponents.value = `${Math.abs(rect1.top - rect2.top - 10)}px`
  audioPlayer.value!.volume = 0.8
  document.addEventListener('keydown', handleKeyDown)

  readBestPartInHash()
  
  // Загружаем настройки эквалайзера ДО инициализации Audio Context
  loadEqualizerSettings()
  initAudioContext()
  
  // Завершаем инициализацию после небольшой задержки
  setTimeout(() => {
    isEqualizerInitializing.value = false
    console.log('Инициализация эквалайзера завершена')
  }, 100)
})

// TODO: возникает баг при перемотке назад на песню, не перематывается:
//  Clayman (#tab=shorts&track=16)
// Are You Dead Yet (#tab=shorts&track=10)
// Nothing Left (#tab=shorts&track=3)
// In The Constellation Of The Bl... (#tab=shorts&track=31)
function previousTrackHandler(): void {
  if (audioPlayer.value!.currentTime <= 20 || tabSelected.value === 4) previousTrack()
  else {
    audioPlayer.value!.currentTime = 0
  }
}

const isShowTrackList = ref(false)
const isShowSongText = ref(false)
const isShowSettings = ref(false)
const isShowEqualizer = ref(false)

function handlerShowSongTextBtn(): void {
  if (!isShowSongText.value) {
    isShowTrackList.value = false
    isShowSettings.value = false
  }
  isShowSongText.value = !isShowSongText.value
}

function closeAllBars(): void {
  isShowTrackList.value = false
  isShowSongText.value = false
  isShowSettings.value = false
  isShowEqualizer.value = false
}

// Watchers для взаимного закрытия всплывашек
watch(isShowTrackList, (newVal) => {
  if (newVal) {
    isShowSongText.value = false
    isShowSettings.value = false
    isShowEqualizer.value = false
  }
})

watch(isShowSettings, (newVal) => {
  if (newVal) {
    isShowTrackList.value = false
    isShowSongText.value = false
    isShowEqualizer.value = false
  }
})

watch(isShowEqualizer, (newVal) => {
  if (newVal) {
    isShowTrackList.value = false
    isShowSongText.value = false
    isShowSettings.value = false
  }
})

function handlerSelectTrack(trackIndex: number): void {
  selectTrack(trackIndex)
  isPlaying.value = true
  playTrack()
}

const isRepeatMode = ref(false)

type SongsTextWithTimeCodes = {
  [key: string]: SongTextWithTimeCode[]
}
type SongTextWithTimeCodesAssemblyAi = {
  [key: string]: SongTextWithTimeCodeAssemblyAi[]
}

const currentSongText = computed(() => (SONGS_TEXT as SongsText)[currentSong.value] || '')
const currentSongTextWithTimecodes = computed<SongTextWithTimeCode[]>(
  () => (SONGS_TEXT_WITH_TIMECODES as SongsTextWithTimeCodes)[currentSong.value] || []
)
const currentSongTextWithTimecodesAssemblyAi = computed<SongTextWithTimeCodeAssemblyAi[]>(() => {
  const song = (SONGS_TEXT_WITH_TIMECODES_ASSEMBLY_AI as SongTextWithTimeCodesAssemblyAi)[
    currentSong.value
  ]
  if (song) {
    return song.map((item) => {
      return {
        ...item,
        start: Number((item.start / 1000).toFixed(2)),
        end: Number((item.end / 1000).toFixed(2))
      }
    })
  }
  return []
})

interface KeyboardEvent {
  key: string
}

const handleKeyDown = (event: KeyboardEvent): void => {
  switch (event.key) {
    case ' ':
      togglePlayPause()
      break
    case 'ArrowRight':
      nextTrack()
      break
    case 'ArrowLeft':
      previousTrackHandler()
      break
    case 'ArrowUp':
      audioPlayer.value!.volume <= 0.9 && setVolume(audioPlayer.value!.volume + 0.1)
      break
    case 'ArrowDown':
      audioPlayer.value!.volume >= 0.1 && setVolume(audioPlayer.value!.volume - 0.1)
      break
  }
}

// Инициализация Web Audio API для эквалайзера
function initAudioContext(): void {
  if (!audioPlayer.value || isAudioContextInitialized.value) return

  try {
    // Создаём AudioContext
    audioContext.value = new (window.AudioContext || (window as any).webkitAudioContext)()

    // Создаём source node из audio элемента
    sourceNode.value = audioContext.value.createMediaElementSource(audioPlayer.value)

    // Частоты для фильтров
    const frequencies = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000]

    // Создаём фильтры для каждой частоты
    frequencies.forEach((freq, index) => {
      const filter = audioContext.value!.createBiquadFilter()
      filter.type = 'peaking'
      filter.frequency.value = freq
      filter.Q.value = 1
      // Применяем загруженные настройки вместо дефолтных
      filter.gain.value = equalizerBands.value[index]?.gain || 0

      equalizerFilters.value.push(filter)

      // Подключаем фильтры последовательно
      if (index === 0) {
        sourceNode.value!.connect(filter)
      } else {
        equalizerFilters.value[index - 1].connect(filter)
      }
    })

    // Подключаем последний фильтр к destination (динамикам)
    equalizerFilters.value[equalizerFilters.value.length - 1].connect(
      audioContext.value.destination
    )

    isAudioContextInitialized.value = true
    console.log('Эквалайзер инициализирован с настройками:', equalizerBands.value)
  } catch (error) {
    console.error('Ошибка инициализации эквалайзера:', error)
  }
}

// Обработчик изменения настроек эквалайзера
function handleEqualizerUpdate(bands: EqualizerBand[]): void {
  // Применяем к фильтрам если они инициализированы
  if (equalizerFilters.value.length) {
    bands.forEach((band, index) => {
      if (equalizerFilters.value[index]) {
        equalizerFilters.value[index].gain.value = band.gain
      }
    })
  }

  // Обновляем локальный state
  equalizerBands.value = bands.map((band) => ({ ...band }))
  
  // Сохраняем настройки в localStorage только после завершения инициализации
  if (!isEqualizerInitializing.value) {
    saveEqualizerSettings()
  }
}

// Обработчик изменения предустановки эквалайзера
function handleEqualizerPresetUpdate(preset: string): void {
  equalizerPreset.value = preset
  
  // Сохраняем только после инициализации
  if (!isEqualizerInitializing.value) {
    saveEqualizerSettings()
  }
}

// Сохранение настроек эквалайзера в localStorage
function saveEqualizerSettings(): void {
  try {
    const settings = {
      bands: equalizerBands.value,
      preset: equalizerPreset.value,
      timestamp: Date.now() // Добавляем временную метку для отладки
    }
    localStorage.setItem('equalizer-settings', JSON.stringify(settings))
    console.log('Настройки эквалайзера сохранены:', {
      preset: settings.preset,
      timestamp: new Date(settings.timestamp).toLocaleTimeString()
    })
  } catch (error) {
    console.error('Ошибка при сохранении настроек эквалайзера:', error)
  }
}

// Загрузка настроек эквалайзера из localStorage
function loadEqualizerSettings(): void {
  try {
    const savedSettings = localStorage.getItem('equalizer-settings')
    if (!savedSettings) {
      console.log('Настройки эквалайзера не найдены, используются по умолчанию')
      return
    }

    const settings = JSON.parse(savedSettings)
    
    // Валидация и загрузка bands
    if (settings.bands && Array.isArray(settings.bands) && settings.bands.length === 10) {
      // Проверяем, что каждый элемент имеет нужные поля
      const isValid = settings.bands.every(
        (band: any) =>
          typeof band === 'object' &&
          typeof band.frequency === 'number' &&
          typeof band.label === 'string' &&
          typeof band.gain === 'number' &&
          band.gain >= -12 &&
          band.gain <= 12
      )

      if (isValid) {
        equalizerBands.value = settings.bands.map((band: EqualizerBand) => ({ ...band }))
      } else {
        console.warn('Некорректный формат bands в сохраненных настройках')
      }
    }

    // Валидация и загрузка preset
    if (settings.preset && typeof settings.preset === 'string') {
      equalizerPreset.value = settings.preset
    }

    console.log('Настройки эквалайзера загружены:', {
      preset: equalizerPreset.value,
      bandsCount: equalizerBands.value.length
    })
  } catch (error) {
    console.error('Ошибка при загрузке настроек эквалайзера:', error)
    // В случае ошибки оставляем дефолтные значения
  }
}

// Открытие эквалайзера
function handleOpenEqualizer(): void {
  if (!isAudioContextInitialized.value) {
    initAudioContext()
  }
  isShowEqualizer.value = !isShowEqualizer.value
}
</script>

<template>
  <main :class="[isDarkTheme ? 'dark' : 'light']" @click="closeAllBars">
    <div class="container">
      <transition name="slide-song-text">
        <SongText
          v-show="
            isShowSongText &&
            (currentSongText.length ||
              currentSongTextWithTimecodes.length ||
              currentSongTextWithTimecodesAssemblyAi.length)
          "
          :current-time="currentTime"
          :song-text="currentSongText"
          :song-text-with-timecodes="currentSongTextWithTimecodes"
          :song-text-with-timecodes-assembly-ai="currentSongTextWithTimecodesAssemblyAi"
          class="top_bar"
          @time-change="handlerTimeChange"
        />
      </transition>
      <transition name="slide-track-list">
        <TrackList
          v-show="isShowTrackList"
          :current-track-index="currentTrackIndex"
          :current-tracks="currentTracksList"
          class="top_bar"
          @select-track-from-list="handlerSelectTrack"
        />
      </transition>
      <transition name="slide-settings">
        <Settings
          v-show="isShowSettings"
          v-model:is-repeat-mode="isRepeatMode"
          v-model:is-dark-theme="isDarkTheme"
          class="top_bar"
          @open-equalizer="handleOpenEqualizer"
        />
      </transition>
      <transition name="slide-equalizer">
        <Equalizer
          v-if="isShowEqualizer"
          :initial-bands="equalizerBands"
          :initial-preset="equalizerPreset"
          class="top_bar"
          @update:bands="handleEqualizerUpdate"
          @update:preset="handleEqualizerPresetUpdate"
        />
      </transition>
      <PageTabs :tab-selected="tabSelected" @change-tab="changeTab" />
      <MainInfoBand
        :song-name="currentSong"
        :has-text="
          !!currentSongText.length ||
          !!currentSongTextWithTimecodes.length ||
          !!currentSongTextWithTimecodesAssemblyAi.length
        "
        :is-favorite-song="favoriteSongs.includes(currentSong)"
        :is-dark-theme="isDarkTheme"
        @show-text-song="handlerShowSongTextBtn"
      >

        <VolumeControl :volume="volume" @click.stop @volume-change="setVolume" />
      </MainInfoBand>

      <ProgressControl
        class="progress_control_ref"
        :best-parties="bestParties"
        :current-time="currentTime"
        :total-time="totalTime"
        @click.stop
        @time-change="handlerTimeChange"
      />
      <MainControl
        :is-favorite-song="favoriteSongs.includes(currentSong)"
        :has-text="
          !!currentSongText.length ||
          !!currentSongTextWithTimecodes.length ||
          !!currentSongTextWithTimecodesAssemblyAi.length
        "
        :is-playing="isPlaying"
        @show-text-song="handlerShowSongTextBtn"
        @previous="previousTrackHandler"
        @next="nextTrack"
        @play-pause="togglePlayPause"
        @add-favorite="handleAddFavoriteSongBtn"
      />
      <OtherControl
        v-model:is-show-track-list="isShowTrackList"
        v-model:is-show-settings="isShowSettings"
        :current-numb-song="currentTrackIndex + 1"
      />

      <audio
        ref="audioPlayer"
        :src="pathToCurrentFile"
        preload="metadata"
        @volumechange="onVolumeUpdate"
        @timeupdate="onTimeUpdate"
        @canplay="handlerCanPlay"
        @ended="handlerEnded"
      />
    </div>
  </main>
</template>

<style lang="css">
/* способ добавления тёмной темы */
/*:root {*/
/*  filter: invert(1) hue-rotate(180deg);*/
/*  img {*/
/*    filter: invert(1) hue-rotate(180deg);*/
/*  }*/
/*}*/
* {
  --main-font-size: 18px;
  --max-container-width: 1000px;
  --active-color-btn: 240, 100%;
  /* --hover-color-btn: 60, 100%; */
  transition: all 0.1s linear;
  font-size: var(--main-font-size);
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  font-weight: 500;
  @media screen {
    @media (max-width: 743px) {
      --main-font-size: 16px;
    }
  }
}

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color-secondary);
  overflow: hidden;
  color: var(--main-color);
}

main.light {
  --main-color: #000000ff;
  --main-bg-color: #ffffffff;
  --main-bg-color-secondary: rgba(210, 211, 223, 0.39);
  --color-lightness: 60%;
  --player-button-color: #606060;
  --player-button-hover: #000000;
}

main.dark {
  --main-color: #ffffffff;
  --main-bg-color: #000000ff;
  --main-bg-color-secondary: rgb(48, 49, 53);
  --color-lightness: 40%;
  --player-button-color: #bdbdbd;
  --player-button-hover: #ffffff; /* Цвет при наведении в темной теме */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 0 60px;
  background-color: var(--main-bg-color);
  width: 100%;
  max-width: 600px;
  overflow-x: hidden;
  max-height: 100%;
  position: absolute;
}



@media screen and (max-width: 1200px) {


  .sidebar {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 600px) {
  * {
    --main-font-size: 20px;
  }

  .container {
    width: 100vw;
    padding: 0 10px;
  }

  .main-control {
    margin: 10px 0;
  }
}

@media screen and (max-width: 400px) {
  * {
    --main-font-size: 15px;
  }
}

.container > * {
  margin-bottom: 10px;
  width: 100%;
}

.main-control {
  margin: 10px 0;
}

.tabs button {
  font-size: 16px;
}

.top_bar {
  position: absolute;
  height: v-bind('distanceBetweenComponents');
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: 1px solid;
  border-bottom-color: var(--main-color);
}

input[type='range'] {
  width: 100%;
  height: 5px;
  border-radius: 2px;
  cursor: pointer;
  margin: 0;
}

button {
  font-size: var(--main-font-size);
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 50%;
  padding: 4px;
  width: calc(var(--main-font-size) + 10px);
  height: calc(var(--main-font-size) + 10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

button.active {
  color: hsl(var(--active-color-btn), var(--color-lightness));
}

button.disabled {
  cursor: default;
  opacity: 0.3;
  transform: none;
  border: none;
  background-color: unset;
}

.tabs {
  display: flex;
  justify-content: center;
}

.tabs button {
  color: var(--main-color);
  background-color: var(--main-bg-color-secondary);
  border: none;
  padding: 10px 20px;
  border-radius: initial;
  width: unset;
  height: unset;
  transition: background-color 0.3s ease;
}

.tabs button.active {
  background-color: var(--main-bg-color);
  /* background-color: #282828; */
  border: 1px solid var(--main-color);
}

.slide-track-list-enter-active,
.slide-track-list-leave-active {
  transition: all 0.5s ease;
}

.slide-track-list-enter-from,
.slide-track-list-leave-to {
  transform: translateY(-100%);
}

.slide-track-list-enter-to,
.slide-track-list-leave-from {
  transform: translateY(0);
}

.slide-song-text-enter-active,
.slide-song-text-leave-active {
  transition: all 0.5s ease;
}

.slide-song-text-enter-from,
.slide-song-text-leave-to {
  transform: translateY(-100%);
}

.slide-song-text-enter-to,
.slide-song-text-leave-from {
  transform: translateY(0);
}

.slide-settings-enter-active,
.slide-settings-leave-active {
  transition: all 0.5s ease;
}

.slide-settings-enter-from,
.slide-settings-leave-to {
  transform: translateY(-100%);
}

.slide-settings-enter-to,
.slide-settings-leave-from {
  transform: translateY(0);
}

.slide-equalizer-enter-active,
.slide-equalizer-leave-active {
  transition: all 0.5s ease;
}

.slide-equalizer-enter-from,
.slide-equalizer-leave-to {
  transform: translateY(-100%);
}

.slide-equalizer-enter-to,
.slide-equalizer-leave-from {
  transform: translateY(0);
}
</style>
