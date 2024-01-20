<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onBeforeMount,
  ref,
  Ref,
  reactive,
  watch
} from 'vue'
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

// const TOP_MUSIC = [
//   {
//     songName: 'Between The Buried And Me - Swim To The Moon',
//     sort: 10,
//     bestParties: [
//       { start: 135, end: 160 },
//       { start: 500, end: 551 },
//       { start: 980, end: 1022 }
//     ]
//   },
//   {
//     songName: 'August Burns Red - Barbarian',
//     sort: 20,
//     bestParties: [
//       { start: 21, end: 32 },
//       { start: 70, end: 88 },
//       { start: 113, end: 152 }
//     ]
//   },
//   {
//     songName: 'Ozoi The Maid Yakui The Maid - Wonderland',
//     sort: 30,
//     bestParties: [
//       { start: 115, end: 243 },
//       { start: 355, end: 442 }
//     ]
//   },
//   {
//     songName: 'As I Lay Dying - Nothing Left',
//     sort: 40,
//     bestParties: [{ start: 0, end: 57 }]
//   },
//   {
//     songName: 'Angel Vivaldi - An Erisian Autumn',
//     sort: 50,
//     bestParties: [
//       { start: 78, end: 104 },
//       { start: 246, end: 268 }
//     ]
//   },
//   {
//     songName: 'As I Lay Dying - The Sound Оf Truth',
//     sort: 60,
//     bestParties: [
//       { start: 0, end: 36 },
//       { start: 59, end: 121 }
//     ]
//   },
//   {
//     songName: 'August Burns Red - Your Little Suburbia Is in Ruins',
//     sort: 70,
//     bestParties: [
//       { start: 12, end: 27 },
//       { start: 107, end: 125 },
//       { start: 146, end: 178 }
//     ]
//   },
//   {
//     songName: 'What Mad Universe - Nebula My Love',
//     sort: 80,
//     bestParties: [
//       { start: 162, end: 246 },
//       { start: 260, end: 358 }
//     ]
//   },
//   {
//     songName: 'What Mad Universe - Starborne',
//     sort: 90,
//     bestParties: [
//       { start: 85, end: 105 },
//       { start: 144, end: 185 }
//     ]
//   },
//   {
//     songName: 'zYnthetic - Abandon All v3',
//     sort: 100,
//     bestParties: [
//       { start: 0, end: 30 },
//       { start: 60, end: 89 }
//     ]
//   },
//   {
//     songName: 'Children Of Bodom - Are You Dead Yet',
//     sort: 110,
//     bestParties: [{ start: 82, end: 114 }]
//   },
//   {
//     songName: 'Ozoi The Maid Yakui The Maid - Lanterns',
//     sort: 111,
//     bestParties: [{ start: 146, end: 218 }]
//   },
//   {
//     songName: 'Between The Buried And Me - Ants Of The Sky',
//     sort: 112,
//     bestParties: [{ start: 0, end: 108 }]
//   },
//   {
//     songName: 'Dragonforce - The Flame of Youth',
//     sort: 120,
//     bestParties: [
//       { start: 46, end: 65 },
//       { start: 289, end: 317 }
//     ]
//   },
//   {
//     songName: 'In Flames - Clayman',
//     sort: 130,
//     bestParties: [{ start: 0, end: 21 }]
//   },
//   {
//     songName: 'Psygnosis - Lost in Oblivion',
//     sort: 140,
//     bestParties: [{ start: 292, end: 356 }]
//   },
//   {
//     songName: 'August Burns Red - Indonesia',
//     sort: 141,
//     bestParties: [
//       { start: 84, end: 117 },
//       { start: 161, end: 180 }
//     ]
//   },
//   {
//     songName: 'August Burns Red - A Shot Below The Belt',
//     sort: 142,
//     bestParties: [
//       { start: 0, end: 30 },
//       { start: 90, end: 114 },
//       { start: 164, end: 175 }
//     ]
//   },
//   {
//     songName: 'Raunchy - Twelve Feet Tall',
//     sort: 150,
//     bestParties: [{ start: 65, end: 96 }]
//   },
//   {
//     songName: 'Rise Of The Northstar - What The Fuck',
//     sort: 160,
//     bestParties: [{ start: 45, end: 79 }]
//   },
//   {
//     songName: 'What Mad Universe - head of column',
//     sort: 170,
//     bestParties: [{ start: 30, end: 65 }]
//   },
//   {
//     songName: 'Toundra - Bizancio Byzantium',
//     sort: 180,
//     bestParties: [
//       { start: 127, end: 224 },
//       { start: 406, end: 480 }
//     ]
//   },
//   {
//     songName: '1.5 кг Отличного Пюре - Эмо',
//     sort: 181,
//     bestParties: [{ start: 25, end: 84 }]
//   },
//   {
//     songName: 'Raunchy - Wasteland Discotheque',
//     sort: 190,
//     bestParties: [
//       { start: 0, end: 34 },
//       { start: 63, end: 101 }
//     ]
//   },
//   {
//     songName: 'As I Lay Dying - Forever',
//     sort: 210,
//     bestParties: [{ start: 0, end: 25 }]
//   },
//   {
//     songName: 'Siberian Meat Grinder feat Distemper - Пламя в Груди',
//     sort: 211,
//     bestParties: [{ start: 49, end: 68 }]
//   },
//   {
//     songName: 'In The Constellation Of The Black Widow',
//     sort: 220,
//     bestParties: [
//       { start: 65, end: 85 },
//       { start: 114, end: 141 }
//     ]
//   }
// ]
// const NOT_AGGRESSIVE_MUSIC = [
//   'Angel Vivaldi - An Erisian Autumn',
//   'What Mad Universe - Nebula My Love',
//   'What Mad Universe - Starborne',
//   'zYnthetic - Abandon All v3',
//   'What Mad Universe - head of column',
//   'Toundra - Bizancio Byzantium',
//   '1.5 кг Отличного Пюре - Эмо',
//   'August Burns Red - Meridian',
//   'Cosmonauts Day - The Captain',
//   'If These Trees Could Talk - From Roots to Needles',
//   'Long Distance Calling - Black Paper Planes',
//   'Killing Floor OST - Wake',
//   'Psygnosis - Phrase 7',
//   'The Doors - Alabama song',
//   'The Doors - The End',
//   'The Five Stars - Atom Bomb Baby',
//   'URO & .corridoiokraut. - Nappi',
//   'What Mad Universe - mythical sacred firebird'
// ]

// @ts-expect-error
import { MUSIC_LIST } from './const/music_list'
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
      defaultTrackList.value = MUSIC_LIST
      topTrackList.value = MUSIC_LIST.filter((item) => item.sort)
      notAggressiveTrackList.value = MUSIC_LIST.filter((item) => item.notAggressive)

      totalNumbSongs.value = currentTracks.value.length
      audioPlayer.value = document.getElementById('audioPlayer') as CustomAudioElement

      const actionHandlers = [
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
        [
          'seekto',
          (e) => {
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

    const audioPlayer: Ref<CustomAudioElement | null> = ref(null)

    const defaultTrackList: Ref<string[]> = ref([])
    const topTrackList: Ref<TopTrack[]> = ref([])
    const notAggressiveTrackList: Ref<string[]> = ref([])

    const currentTrackIndex: Ref<number> = ref(0)
    const totalNumbSongs: Ref<number> = ref(0)
    const currentTime: Ref<number> = ref(0)
    const volume: Ref<number> = ref(0.8)

    const pathToCurrentFile: ComputedRef<string> = computed(() => {
      // TODO: хз как сделать по другому
      const basePath = import.meta.env.DEV ? '/' : '/player_with_my_favorite_music/'
      return currentTracks.value[currentTrackIndex.value]
        ? `${basePath}music/${currentTracks.value[currentTrackIndex.value]}`
        : ``
    })

    const sortingTopTrackList = computed(() => {
      return [...topTrackList.value].sort((a, b) => a.sort - b.sort)
    })

    const tracksByTab: ComputedRef<string[]> = computed(() => {
      switch (tabSelected.value) {
        case 1:
          return defaultTrackList.value.map((item) => item.songName)
        case 2:
          return sortingTopTrackList.value.map((item) => item.songName)
        case 3:
          return notAggressiveTrackList.value.map((item) => item.songName)
        case 4:
          return sortingTopTrackList.value
            .filter((item) => item?.bestParties)
            .map((item) => item.songName)
      }
    })

    const fullSongName: ComputedRef<string> = computed(() => {
      const indexLastSlash: number | undefined = pathToCurrentFile.value?.lastIndexOf('/')
      const indexSlice: number | undefined = pathToCurrentFile.value?.lastIndexOf('.')
      return (
        (pathToCurrentFile.value &&
          pathToCurrentFile.value.substring(indexLastSlash + 1, indexSlice)) ||
        ''
      )
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
      if (isPlaying.value) {
        playTrack()
      }
    }

    function handlerEnded() {
      if (!isRepeatMode.value) {
        nextTrack()
      } else {
        audioPlayer.value!.currentTime = 0
      }
    }

    const tabsOption = reactive([
      { label: 'All music', id: 1, url: 'all' },
      { label: 'Top', id: 2, url: 'top' },
      { label: 'Not aggressive', id: 3, url: 'not_aggressive' },
      { label: 'Shorts', id: 4, url: 'shorts' }
    ])
    const tabSelected: Ref<number> = ref(1)
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

    function onVolumeUpdate(event: Event) {
      volume.value = (event.target as HTMLAudioElement).volume
    }

    function setVolume(value: number) {
      audioPlayer.value!.volume = value / 100
    }

    const totalTime: Ref<number> = ref(0)
    function setTotalTime(event: Event) {
      totalTime.value = (event.target as HTMLAudioElement).duration
      navigator.mediaSession.setPositionState({
        duration: (event.target as HTMLAudioElement).duration,
        playbackRate: 1,
        position: 0
      })
    }

    function playTrack() {
      try {
        audioPlayer.value?.play().then((r) => r)
      } catch (error) {
        console.log('error', error)
      }
    }

    const isPlaying: Ref<boolean> = ref(false)
    function togglePlayPause() {
      isPlaying.value = !isPlaying.value
      if (isPlaying.value) {
        playTrack()
      } else {
        audioPlayer.value?.pause()
      }
    }

    // for 1 loop
    // const isVolumeSlowlyDecrease: Ref<boolean> = ref(false)
    function changeVolumeSlowly(isDecrease = true) {
      // let steps = 40
      // const stepValue = 0.01
      // if (isDecrease && !isVolumeSlowlyDecrease.value) {
      //   isVolumeSlowlyDecrease.value = true
      //   const intervalId = setInterval(() => {
      //     if (steps >= 0 && volume.value >= 0.2) {
      //       const newVolume = (volume.value - stepValue).toFixed(2)
      //       console.log(newVolume)
      //       steps--
      //       audioPlayer.value!.volume = newVolume
      //     } else {
      //       clearInterval(intervalId)
      //     }
      //   }, 50)
      // } else {
      //   isVolumeSlowlyDecrease.value = false
      //   const intervalId = setInterval(() => {
      //     if (steps >= 0 && volume.value < 1) {
      //       const newVolume = (volume.value + stepValue).toFixed(2)
      //       console.log(newVolume)
      //       steps--
      //       audioPlayer.value!.volume = newVolume
      //     } else {
      //       clearInterval(intervalId)
      //     }
      //   }, 100)
      // }
    }

    function shortTracksObserver(time) {
      console.log(time)
      const currentBestParties = sortingTopTrackList.value[currentTrackIndex.value].bestParties
      for (let i = 0; i < currentBestParties.length; i++) {
        const currentBestParty = currentBestParties[i]
        // start song
        if (time < currentBestParty.start) {
          // changeVolumeSlowly(false)
          console.log('start')
          audioPlayer.value!.currentTime = currentBestParty.start
          return
        } else if (time >= currentBestParty.start && time <= currentBestParty.end) {
          console.log('continue')
          if (time >= currentBestParty.end - 2) {
            // changeVolumeSlowly(true)
          }
          return
        }
      }
      console.log('nextTrack')
      handlerEnded()
    }

    watch(
      () => [currentTime.value, isPlaying.value],
      () => {
        if (tabSelected.value === 4 && isPlaying.value) {
          shortTracksObserver(currentTime.value)
        }
      }
    )

    function nextTrack() {
      currentTrackIndex.value += 1
      if (currentTrackIndex.value >= currentTracks.value.length) {
        currentTrackIndex.value = 0
      }
    }

    function previousTrack() {
      if (audioPlayer.value!.currentTime <= 20 || tabSelected.value === 4)
        currentTrackIndex.value =
          (currentTrackIndex.value - 1 + currentTracks.value.length) % currentTracks.value.length
      else {
        // TODO: потенциально ошибка может быть
        audioPlayer.value!.currentTime = 0
      }
    }

    const isRandomTracks: Ref<boolean> = ref(false)
    function handlerRandomBtn() {
      isRandomTracks.value = !isRandomTracks.value
    }

    const isShowTrackList: Ref<boolean> = ref(false)
    function handlerShowListBtn() {
      isShowTrackList.value = !isShowTrackList.value
    }

    // const table = this.$refs?.tableWrapper?.$el
    // table.getBoundingClientRect().top

    function handlerSelectTrack(trackIndex: number) {
      currentTrackIndex.value = trackIndex
      if (!isPlaying.value) {
        togglePlayPause()
      } else {
        playTrack()
      }
    }

    const isRepeatMode: Ref<boolean> = ref(false)
    function repeatModeChange() {
      isRepeatMode.value = !isRepeatMode.value
    }

    return {
      audioPlayer,
      totalNumbSongs,
      isPlaying,
      currentTime,
      volume,
      onVolumeUpdate,
      totalTime,
      isRandomTracks,
      pathToCurrentFile,
      fullSongName,
      defaultTrackList,
      topTrackList,
      sortingTopTrackList,
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
      isShowTrackList,

      repeatModeChange,
      isRepeatMode
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
      <VolumeControl :volume="volume" @volume-change="setVolume" />
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
        :is-repeat-mode="isRepeatMode"
        @repeat-mode-click="repeatModeChange"
        @random-click="handlerRandomBtn"
        @show-list-click="handlerShowListBtn"
      />
      <audio
        id="audioPlayer"
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
