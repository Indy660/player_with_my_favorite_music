<script lang="ts">
import { computed, ComputedRef, defineComponent, onBeforeMount, ref, Ref, reactive } from 'vue'
import TrackList from './components/TrackList.vue'
import PageTabs from './components/PageTabs.vue'
import MainInfoBand from './components/MainInfoBand.vue'
import VolumeControl from './components/VolumeControl.vue'
import ProgressControl from './components/ProgressControl.vue'
import MainControl from './components/MainControl.vue'
import OtherControl from './components/OtherControl.vue'

interface CustomAudioElement extends HTMLAudioElement {
  currentRange: number
  duration: number
  volume: number
  currentTime: number
}

interface TopTrack {
  songName: string
  sort: number
  path: string
}

const TOP_MUSIC = [
  { songName: 'Between The Buried And Me - Swim To The Moon', sort: 10 },
  { songName: 'August Burns Red - Barbarian', sort: 20 },
  { songName: 'Ozoi The Maid, Yakui The Maid - Wonderland', sort: 30 },
  { songName: 'As I Lay Dying - Nothing Left', sort: 40 },
  { songName: 'Angel Vivaldi - An Erisian Autumn', sort: 50 },
  { songName: 'As I Lay Dying - The Sound Оf Truth', sort: 60 },
  { songName: 'August Burns Red - Your Little Suburbia Is in Ruins', sort: 70 },
  { songName: 'What Mad Universe - Nebula, My Love', sort: 80 },
  { songName: 'What Mad Universe - Starborne', sort: 90 },
  { songName: 'zYnthetic - Abandon All v3', sort: 100 },
  { songName: 'Children Of Bodom - Are You Dead Yet', sort: 110 },
  { songName: 'Dragonforce - The Flame of Youth', sort: 120 },
  { songName: 'In Flames - Clayman', sort: 130 },
  { songName: 'Psygnosis - Lost in Oblivion', sort: 140 },
  { songName: 'Raunchy - Twelve Feet Tall', sort: 150 },
  { songName: 'Rise Of The Northstar - What The Fuck', sort: 160 },
  { songName: 'What Mad Universe - head of column', sort: 170 },
  { songName: 'Toundra - Bizancio Byzantium', sort: 180 },
  { songName: 'Raunchy - Wasteland Discotheque', sort: 190 },
  { songName: 'Between The Buried And Me - Ants Of The Sky', sort: 200 }
]
export default defineComponent({
  name: 'MainComponent',
  components: {
    TrackList,
    PageTabs,
    MainInfoBand,
    VolumeControl,
    ProgressControl,
    MainControl,
    OtherControl
  },
  setup() {
    onBeforeMount(async () => {
      const music = import.meta.glob('@assets/music/*.mp3')
      for (const path in music) {
        const songPath = (await music[path]()).default
        defaultTrackList.value.push(songPath)
        TOP_MUSIC.forEach((item) => {
          if (songPath.includes(item.songName)) topTrackList.value.push({ ...item, path: songPath })
        })
      }

      totalNumbSongs.value =
        tabSelected.value === 1 ? topTrackList.value.length : defaultTrackList.value.length
      audioPlayer.value = document.getElementById('audioPlayer') as CustomAudioElement
    })

    const audioPlayer: Ref<CustomAudioElement | null> = ref(null)
    const defaultTrackList: Ref<string[]> = ref([])
    const topTrackList: Ref<TopTrack[]> = ref([])
    const currentTrackIndex: Ref<number> = ref(0)
    const totalNumbSongs: Ref<number> = ref(0)
    const isPlaying: Ref<boolean> = ref(false)
    const currentTime: Ref<number> = ref(0)
    const totalTime: Ref<number> = ref(0)
    const isRandomTracks: Ref<boolean> = ref(false)
    const isShowTrackList: Ref<boolean> = ref(false)

    const tabsOption = reactive([
      { label: 'Top', id: 1, url: '' },
      { label: 'All music', id: 2, url: 'all' },
      { label: 'Shorts', id: 3, url: 'shorts' }
    ])
    const tabSelected: Ref<number> = ref(1)
    // const tabSelected = reactive(tabsOption[0])

    const pathToCurrentFile: ComputedRef<string> = computed(() => {
      return currentTracks.value[currentTrackIndex.value] || ''
    })

    const fullSongName: ComputedRef<string> = computed(() => {
      const indexLastSlash: number | undefined = pathToCurrentFile.value?.lastIndexOf('/')
      const indexSlice: number | undefined =
        process.env.NODE_ENV === 'production'
          ? pathToCurrentFile.value?.lastIndexOf('-')
          : pathToCurrentFile.value?.lastIndexOf('.')
      return (
        (pathToCurrentFile.value &&
          pathToCurrentFile.value.substring(indexLastSlash + 1, indexSlice)) ||
        ''
      )
    })

    // TODO: totalNumbSongs нужно фиксить
    const tracksByTab: ComputedRef<string[]> = computed(() => {
      return tabSelected.value === 1
        ? [...topTrackList.value].sort((a, b) => a.sort - b.sort).map((item) => item.path)
        : defaultTrackList.value
    })

    const currentTracks: ComputedRef<string[]> = computed(() => {
      return isRandomTracks.value ? getRandomTracks() : tracksByTab.value
    })

    function getRandomTracks(): string[] {
      return defaultTrackList.value
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    }

    function handlerCanPlay(event: Event) {
      setTotalTime(event)
      playTrack()
    }

    function handlerEnded() {
      nextTrack()
    }

    // TODO: поправить
    function changeTab(option: Object) {
      tabSelected.value = option.id
      currentTrackIndex.value = 0
      totalNumbSongs.value = currentTracks.value.length
    }

    function handlerTimeChange(event: Event) {
      if (audioPlayer.value) {
        const target = event.target as HTMLInputElement
        audioPlayer.value!.currentTime =
          (Number(target.value) / 100) * (audioPlayer.value!.duration || 0)
      }
    }

    function onTimeUpdate(event: Event) {
      currentTime.value = (event.target as HTMLAudioElement).currentTime
    }

    function setVolume(value: number) {
      audioPlayer.value!.volume = value / 100
    }

    function setTotalTime(event: Event) {
      totalTime.value = (event.target as HTMLAudioElement).duration
    }

    function playTrack() {
      if (isPlaying.value) {
        try {
          audioPlayer.value?.play().then((r) => r)
        } catch (error) {}
      }
    }

    function togglePlayPause() {
      isPlaying.value = !isPlaying.value
      if (isPlaying.value) {
        audioPlayer.value?.play().then((r) => r)
      } else {
        audioPlayer.value?.pause()
      }
    }

    function nextTrack() {
      currentTrackIndex.value += 1
      if (currentTrackIndex.value >= currentTracks.value.length) {
        currentTrackIndex.value = 0
      }
    }

    function previousTrack() {
      if (currentTime.value <= 20)
        currentTrackIndex.value =
          (currentTrackIndex.value - 1 + currentTracks.value.length) % currentTracks.value.length
      else {
        // TODO: потенциально ошибка может быть
        audioPlayer.value!.currentTime = 0
      }
    }

    function handlerRandomBtn() {
      isRandomTracks.value = !isRandomTracks.value
    }
    function handlerShowListBtn() {
      isShowTrackList.value = !isShowTrackList.value
    }

    function handlerSelectTrack(trackIndex: number) {
      currentTrackIndex.value = trackIndex
    }

    return {
      audioPlayer,
      totalNumbSongs,
      isPlaying,
      currentTime,
      totalTime,
      isRandomTracks,
      pathToCurrentFile,
      fullSongName,
      defaultTrackList,
      topTrackList,
      tracksByTab,
      currentTracks,
      currentTrackIndex,
      handlerCanPlay,
      handlerEnded,
      handlerTimeChange,
      onTimeUpdate,
      setVolume,
      setTotalTime,
      playTrack,
      togglePlayPause,
      nextTrack,
      previousTrack,
      handlerRandomBtn,
      handlerShowListBtn,
      handlerSelectTrack,
      tabsOption,
      tabSelected,
      changeTab,
      isShowTrackList
    }
  }
})
</script>

<template>
  <div class="container">
    <!--    :class="{ padding_top: isShowTrackList }"-->
    <!--    :class="isShowTrackList ? 'show' : 'hide'"-->
    <!--    TODO: не работает анимация -->
    <transition name="slide">
      <TrackList
        v-show="isShowTrackList"
        :current-track-index="currentTrackIndex"
        :current-tracks="currentTracks"
        class="track_list"
        @select-track-from-list="handlerSelectTrack"
      />
    </transition>
    <PageTabs :tab-selected="tabSelected" :tab-options="tabsOption" @change-tab="changeTab" />
    <MainInfoBand :full-song-name="fullSongName" />
    <VolumeControl @volume-change="setVolume" />
    <ProgressControl
      :current-time="currentTime"
      :total-time="totalTime"
      @time-change="handlerTimeChange"
    />
    <MainControl
      :is-playing="isPlaying"
      @previous="previousTrack"
      @next="nextTrack"
      @play-pause="togglePlayPause"
    />
    <OtherControl
      :current-numb-song="currentTrackIndex + 1"
      :total-numb-song="totalNumbSongs"
      :is-random-tracks="isRandomTracks"
      :is-show-track-list="isShowTrackList"
      @random-click="handlerRandomBtn"
      @show-list-click="handlerShowListBtn"
    />
    <audio
      id="audioPlayer"
      ref="audioPlayer"
      :src="pathToCurrentFile"
      preload="metadata"
      @timeupdate="onTimeUpdate"
      @canplay="handlerCanPlay"
      @ended="handlerEnded"
    />
  </div>
</template>

<style lang="css">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.track_list {
  position: absolute;
  transition: padding 0.5s;
  height: 420px;
}

.container {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

@media screen and (max-width: 400px) {
  .container {
    width: 100vw;
    padding: 3vw;
  }
}

.container > * {
  margin-bottom: 10px;
}

input[type='range'] {
  width: 100%;
  height: 5px;
  background-color: #ddd;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

button {
  font-size: 24px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ddd;
}
</style>
