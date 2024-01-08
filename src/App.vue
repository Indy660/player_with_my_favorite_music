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
  { songName: 'Ozoi The Maid Yakui The Maid - Wonderland', sort: 30 },
  { songName: 'As I Lay Dying - Nothing Left', sort: 40 },
  { songName: 'Angel Vivaldi - An Erisian Autumn', sort: 50 },
  { songName: 'As I Lay Dying - The Sound Оf Truth', sort: 60 },
  { songName: 'August Burns Red - Your Little Suburbia Is in Ruins', sort: 70 },
  { songName: 'What Mad Universe - Nebula My Love', sort: 80 },
  { songName: 'What Mad Universe - Starborne', sort: 90 },
  { songName: 'zYnthetic - Abandon All v3', sort: 100 },
  { songName: 'Children Of Bodom - Are You Dead Yet', sort: 110 },
  { songName: 'Ozoi The Maid Yakui The Maid - Lanterns', sort: 111 },
  { songName: 'Between The Buried And Me - Ants Of The Sky', sort: 112 },
  { songName: 'Dragonforce - The Flame of Youth', sort: 120 },
  { songName: 'In Flames - Clayman', sort: 130 },
  { songName: 'Psygnosis - Lost in Oblivion', sort: 140 },
  { songName: 'August Burns Red - Indonesia', sort: 141 },
  { songName: 'August Burns Red - A Shot Below The Belt', sort: 142 },
  { songName: 'Raunchy - Twelve Feet Tall', sort: 150 },
  { songName: 'Rise Of The Northstar - What The Fuck', sort: 160 },
  { songName: 'What Mad Universe - head of column', sort: 170 },
  { songName: 'Toundra - Bizancio Byzantium', sort: 180 },
  { songName: '1.5 кг Отличного Пюре - Эмо', sort: 181 },
  { songName: 'Raunchy - Wasteland Discotheque', sort: 190 },
  { songName: 'As I Lay Dying - Forever', sort: 210 },
  { songName: 'Siberian Meat Grinder feat Distemper - Пламя в Груди', sort: 211 },
  { songName: 'In The Constellation Of The Black Widow', sort: 220 }
]
// вариант без сортировки, нужен будет прелоадер для лучших
// const TOP_MUSIC = [
//   'Between The Buried And Me - Swim To The Moon',
//   'August Burns Red - Barbarian',
//   'Ozoi The Maid Yakui The Maid - Wonderland',
//   'As I Lay Dying - Nothing Left',
//   'Angel Vivaldi - An Erisian Autumn',
//   'As I Lay Dying - The Sound Оf Truth',
//   'August Burns Red - Your Little Suburbia Is in Ruins',
//   'What Mad Universe - Nebula My Love',
//   'What Mad Universe - Starborne',
//   'zYnthetic - Abandon All v3',
//   'Children Of Bodom - Are You Dead Yet',
//   'Ozoi The Maid Yakui The Maid - Lanterns',
//   'Between The Buried And Me - Ants Of The Sky',
//   'Dragonforce - The Flame of Youth',
//   'In Flames - Clayman',
//   'Psygnosis - Lost in Oblivion',
//   'August Burns Red - Indonesia',
//   'August Burns Red - A Shot Below The Belt',
//   'Raunchy - Twelve Feet Tall',
//   'Rise Of The Northstar - What The Fuck',
//   'What Mad Universe - head of column',
//   'Toundra - Bizancio Byzantium',
//   '1.5 кг Отличного Пюре - Эмо',
//   'Raunchy - Wasteland Discotheque',
//   'As I Lay Dying - Forever',
//   'In The Constellation Of The Black Widow'
// ]
const NOT_AGGRESSIVE_MUSIC = [
  'Angel Vivaldi - An Erisian Autumn',
  'What Mad Universe - Nebula My Love',
  'What Mad Universe - Starborne',
  'zYnthetic - Abandon All v3',
  'Psygnosis - Lost in Oblivion',
  'What Mad Universe - head of column',
  'Toundra - Bizancio Byzantium',
  '1.5 кг Отличного Пюре - Эмо',
  'August Burns Red - Meridian',
  'Cosmonauts Day - The Captain',
  'If These Trees Could Talk - From Roots to Needles',
  'Long Distance Calling - Black Paper Planes',
  'Killing Floor OST - Wake',
  'Psygnosis - Phrase 7',
  'The Doors - Alabama song',
  'The Doors - The End',
  'The Five Stars - Atom Bomb Baby',
  'URO & .corridoiokraut. - Nappi',
  'What Mad Universe - head of column',
  'What Mad Universe - mythical sacred firebird'
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
        // TOP_MUSIC.forEach((item) => {
        //   if (songPath.includes(item)) topTrackList.value.push(songPath)
        // })
        NOT_AGGRESSIVE_MUSIC.forEach((item) => {
          if (songPath.includes(item)) notAggressiveTrackList.value.push(songPath)
        })
      }

      totalNumbSongs.value = currentTracks.value.length
      audioPlayer.value = document.getElementById('audioPlayer') as CustomAudioElement

      const actionHandlers = [
        [
          'play',
          async () => {
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
          async () => {
            nextTrack()
          }
        ],
        [
          'previoustrack',
          async () => {
            previousTrack()
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

    const audioPlayer: Ref<CustomAudioElement | null> = ref(null)
    const defaultTrackList: Ref<string[]> = ref([])
    const topTrackList: Ref<TopTrack[]> = ref([])
    // const topTrackList: Ref<TopTrack[string]> = ref([])
    const notAggressiveTrackList: Ref<string[]> = ref([])
    const currentTrackIndex: Ref<number> = ref(0)
    const totalNumbSongs: Ref<number> = ref(0)
    const isPlaying: Ref<boolean> = ref(false)
    const currentTime: Ref<number> = ref(0)
    const totalTime: Ref<number> = ref(0)
    const isRandomTracks: Ref<boolean> = ref(false)
    const isShowTrackList: Ref<boolean> = ref(false)

    const tabsOption = reactive([
      { label: 'All music', id: 1, url: 'all' },
      { label: 'Top', id: 2, url: 'top' },
      { label: 'Not aggressive', id: 3, url: 'shorts' }
      // { label: 'Shorts', id: 4, url: 'shorts' }
    ])
    const tabSelected: Ref<number> = ref(1)

    const pathToCurrentFile: ComputedRef<string> = computed(() => {
      return currentTracks.value[currentTrackIndex.value] || ''
    })

    const fullSongName: ComputedRef<string> = computed(() => {
      const indexLastSlash: number | undefined = pathToCurrentFile.value?.lastIndexOf('/')
      const indexSlice: number | undefined =
        process.env.NODE_ENV === 'production'
          ? pathToCurrentFile.value?.lastIndexOf('.') - 9
          : pathToCurrentFile.value?.lastIndexOf('.')
      return (
        (pathToCurrentFile.value &&
          pathToCurrentFile.value.substring(indexLastSlash + 1, indexSlice)) ||
        ''
      )
    })

    // TODO: totalNumbSongs нужно фиксить
    const tracksByTab: ComputedRef<string[]> = computed(() => {
      switch (tabSelected.value) {
        case 1:
          return defaultTrackList.value
        case 2:
          return [...topTrackList.value].sort((a, b) => a.sort - b.sort).map((item) => item.path)
        // return topTrackList.value
        case 3:
          return notAggressiveTrackList.value
      }
    })

    const currentTracks: ComputedRef<string[]> = computed(() => {
      return isRandomTracks.value ? getRandomTracks() : tracksByTab.value
    })

    function getRandomTracks(): string[] {
      return tracksByTab.value
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

    // const table = this.$refs?.tableWrapper?.$el
    // table.getBoundingClientRect().top

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
  <main @click="isShowTrackList = false">
    <div class="container">
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
  </main>
</template>

<style lang="css">
body {
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
}
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 400px) {
  .container {
    width: 100vw;
    padding: 3vw;
  }
}

.container > * {
  margin-bottom: 10px;
  width: 100%;
}

.track_list {
  position: absolute;
  transition: padding 0.5s;
  /*todo можно переделать на getBoundingClientRect().top */
  height: 435px;
  top: 0;
  left: 0;
}

input[type='range'] {
  width: 100%;
  height: 5px;
  border-radius: 2px;
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

/*todo: баг, -100% недоконца скрывает*/
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-110%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}
</style>
