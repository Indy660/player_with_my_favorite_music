<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watchEffect, watch, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { tracksApi } from './composable/tracks'
import TrackList from './components/TrackList.vue'
import PageTabs from './components/PageTabs.vue'
import MainInfoBand from './components/MainInfoBand.vue'
import VolumeControl from './components/VolumeControl.vue'
import ProgressControl from './components/ProgressControl.vue'
import MainControl from './components/MainControl.vue'
import OtherControl from './components/OtherControl.vue'
import SongText from './components/SongText.vue'
import SONGS_TEXT from './static_data/songs_text.json'
import SONGS_TEXT_WITH_TIMECODES from './static_data/songs_text_with_timecodes.json'

interface CustomAudioElement extends HTMLAudioElement {
  currentRange: number
  duration: number
  volume: number
  currentTime: number
}

export default defineComponent({
  name: 'MainComponent',
  components: {
    TrackList,
    PageTabs,
    MainInfoBand,
    VolumeControl,
    ProgressControl,
    MainControl,
    OtherControl,
    SongText
  },
  setup() {
    const {
      bestParties,
      nextTrack,
      previousTrack,
      pathToCurrentFile,
      currentTrackIndex,
      changeTab,
      selectTrack,
      tabSelected,
      currentTracks,
      currentSong,
      currentTracksList,
      favoriteSongs,
      handleAddFavoriteSongBtn
    } = tracksApi()
    onBeforeMount(async () => {
      // старый способ импорта музыки прямо из папки
      // const music = import.meta.glob('@assets/music/*.mp3')
      // for (const path in music) {
      //   const songPath = (await music[path]()).default
      //   defaultTrackList.value.push(songPath)
      //   TOP_MUSIC.forEach((item) => {
      //     if (songPath.includes(item.songName)) topTrackList.value.push({ ...item, path: songPath })
      //   })
      //   // TOP_MUSIC.forEach((item) => {
      //   //   if (songPath.includes(item)) topTrackList.value.push(songPath)
      //   // })
      //   NOT_AGGRESSIVE_MUSIC.forEach((item) => {
      //     if (songPath.includes(item)) notAggressiveTrackList.value.push(songPath)
      //   })
      // }

      initChangeColorScheme()
      type Action = () => void
      type ActionName = 'play' | 'pause' | 'nexttrack' | 'previoustrack' | 'seekto'
      type ActionHandler = [ActionName, Action]

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
            previousTrack()
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

    const isDarkTheme: Ref<boolean> = ref(false)
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
      document.documentElement.style.setProperty(
        'color-scheme',
        isDarkTheme.value ? 'dark' : 'light'
      )
      localStorage.setItem('dark-color-scheme', JSON.stringify(isDarkTheme.value))
    }

    function handlerChangeThemeBtn(): void {
      isDarkTheme.value = !isDarkTheme.value
    }

    const audioPlayer: Ref<CustomAudioElement | null> = ref(null)

    const currentTime: Ref<number> = ref(0)
    const volume: Ref<number> = ref(0.8)

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

    const totalTime: Ref<number> = ref(0)
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

    const isPlaying: Ref<boolean> = ref(false)
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
    const isVolumeChanging: Ref<boolean> = ref(false)
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

    async function shortTracksObserver(time: number): Promise<void> {
      // console.log('shortTracksObserver')
      // audioPlayer.value!.volume = 0.6
      for (let i = 0; i < bestParties.value.length; i++) {
        const currentBestParty = bestParties.value[i]
        // TODO: проблема при переключении, звук уходит со временем на 100%
        if (time <= currentBestParty.start && !isVolumeChanging.value) {
          console.log('start')
          audioPlayer.value!.volume = 0.6
          audioPlayer.value!.currentTime = currentBestParty.start
          // TODO: отвратительно работает переключение песен
          // await changeVolumeSlowly(false)
          return
        } else if (time >= currentBestParty.start && time <= currentBestParty.end) {
          console.log('continue')
          // TODO: второе условие как хак
          if (
            time >= currentBestParty.end - 3 &&
            time <= currentBestParty.end - 2 &&
            !isVolumeChanging.value
          ) {
            console.log('end')
            audioPlayer.value!.volume = 0.8
            // await changeVolumeSlowly(true)
          }
          return
        }
      }
      console.log('nextTrack')
      handlerEnded()
    }

    watchEffect(async () => {
      if (tabSelected.value === 4 && isPlaying.value && currentTrackIndex) {
        await shortTracksObserver(currentTime.value)
      }
    })
    const distanceBetweenComponents: Ref<string> = ref('500px')
    onMounted(() => {
      const main_control_ref = document.querySelector('.main_control_ref') as HTMLElement
      const containerDiv = document.querySelector('.container') as HTMLElement
      // todo: через реф main_control_ref не видит, подобрал по классу
      // const main_control_ref = ref(null)
      // const rect1 = main_control_ref?.value?.$el?.getBoundingClientRect()
      const rect1: DOMRect = main_control_ref.getBoundingClientRect()
      const rect2: DOMRect = containerDiv?.getBoundingClientRect()
      distanceBetweenComponents.value = `${Math.abs(rect1.top - rect2.top) + 25}px`
      audioPlayer.value!.volume = 0.8
      document.addEventListener('keydown', handleKeyDown)
    })
    function previousTrackHandler(): void {
      if (audioPlayer.value!.currentTime <= 20 || tabSelected.value === 4) previousTrack()
      else {
        audioPlayer.value!.currentTime = 0
      }
    }

    const isShowTrackList: Ref<boolean> = ref(false)
    function handlerShowListBtn(): void {
      isShowTrackList.value = !isShowTrackList.value
    }

    const isShowSongText: Ref<boolean> = ref(false)
    function handlerShowSongTextBtn(): void {
      isShowSongText.value = !isShowSongText.value
    }

    function closeAllBars(): void {
      isShowTrackList.value = false
      isShowSongText.value = false
    }

    function handlerSelectTrack(trackIndex: number): void {
      selectTrack(trackIndex)
      isPlaying.value = true
      playTrack()
    }

    const isRepeatMode: Ref<boolean> = ref(false)
    function repeatModeChange(): void {
      isRepeatMode.value = !isRepeatMode.value
    }

    type SongsText = {
      [key: string]: string
    }
    type SongsTextWithTimeCode = {
      [key: string]: Array<SongTextWithTimeCode>
    }
    const currentSongText: ComputedRef<string> = computed(
      () => (SONGS_TEXT as SongsText)[currentSong.value.songName] || ''
    )
    const currentSongTextWithTimecodes: ComputedRef<Array<SongTextWithTimeCode>> = computed(
      () => (SONGS_TEXT_WITH_TIMECODES as SongsTextWithTimeCode)[currentSong.value.songName] || []
    )

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

    return {
      audioPlayer,
      isPlaying,
      currentTime,
      volume,
      onVolumeUpdate,
      totalTime,
      pathToCurrentFile,

      currentTracks,
      currentTrackIndex,
      currentTracksList,
      currentSong,

      handlerCanPlay,
      handlerEnded,
      handlerTimeChange,
      onTimeUpdate,
      setVolume,
      togglePlayPause,
      nextTrack,
      previousTrackHandler,
      handlerShowListBtn,
      handlerSelectTrack,
      tabSelected,
      changeTab,
      isShowTrackList,
      repeatModeChange,
      isRepeatMode,
      bestParties,
      isDarkTheme,
      handlerChangeThemeBtn,
      handlerShowSongTextBtn,
      handleAddFavoriteSongBtn,
      isShowSongText,
      closeAllBars,
      currentSongText,
      currentSongTextWithTimecodes,
      distanceBetweenComponents,
      favoriteSongs
    }
  }
})
</script>

<template>
  <main :class="[isDarkTheme ? 'dark' : 'light']" @click.stop="closeAllBars">
    <div class="container">
      <transition name="slide-track-list">
        <TrackList
          v-show="isShowTrackList"
          :current-track-index="currentTrackIndex"
          :current-tracks="currentTracksList"
          class="top_bar"
          @select-track-from-list="handlerSelectTrack"
        />
      </transition>
      <transition name="slide-song-text">
        <SongText
          v-show="isShowSongText && (currentSongText.length || currentSongTextWithTimecodes.length)"
          :current-time="currentTime"
          :song-text="currentSongText"
          :song-text-with-timecodes="currentSongTextWithTimecodes"
          class="top_bar"
          @time-change="handlerTimeChange"
        />
      </transition>
      <PageTabs :tab-selected="tabSelected" @change-tab="changeTab" />
      <MainInfoBand
        :song-name="currentSong.songName"
        :has-text="!!currentSongText.length || !!currentSongTextWithTimecodes.length"
        :is-favorite-song="favoriteSongs.includes(currentSong.songName)"
        @show-text-song="handlerShowSongTextBtn"
        @add-favorite="handleAddFavoriteSongBtn"
      />
      <VolumeControl
        ref="main_control_ref"
        class="main_control_ref"
        :volume="volume"
        @volume-change="setVolume"
      />
      <ProgressControl
        :best-parties="bestParties"
        :current-time="currentTime"
        :total-time="totalTime"
        @click.stop
        @time-change="handlerTimeChange"
      />
      <MainControl
        :is-playing="isPlaying"
        @previous="previousTrackHandler"
        @next="nextTrack"
        @play-pause="togglePlayPause"
      />
      <OtherControl
        :current-numb-song="currentTrackIndex + 1"
        :is-show-track-list="isShowTrackList"
        :is-repeat-mode="isRepeatMode"
        :is-dark-theme="isDarkTheme"
        @repeat-mode-click="repeatModeChange"
        @show-list-click="handlerShowListBtn"
        @change-theme="handlerChangeThemeBtn"
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
  transition: all 0.3s linear;
  font-size: var(--main-font-size);
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  font-weight: 500;
  --main-font-size: 24px;
  --max-container-width: 1000px;
  --active-color-btn: 240, 100%;
  --hover-color-btn: 60, 100%;
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
}

main.dark {
  --main-color: #ffffffff;
  --main-bg-color: #000000ff;
  --main-bg-color-secondary: rgb(48, 49, 53);
  --color-lightness: 40%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 20px;
  background-color: var(--main-bg-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}
@media screen and (min-width: 1200px) {
  .container {
    width: 75vw;
    max-width: var(--max-container-width);
  }
}

@media screen and (max-width: 600px) {
  * {
    --main-font-size: 20px;
  }
  .container {
    width: 100vw;
    padding: 3vw;
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

button:hover {
  opacity: 1;
  border: 1px solid currentcolor;
  /*todo: хреново на ховере выглядит при темной темы*/
  background-color: hsl(var(--hover-color-btn), var(--color-lightness));
  transform: scale(1.1);
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
}

.tabs button.active {
  background-color: var(--main-bg-color);
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
</style>
