<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref, watchEffect, onMounted } from 'vue'
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
      sortingTopTrackList,
      currentTrackIndex,
      changeTab,
      selectTrack,
      tabSelected,
      isRandomTracks,
      handlerRandomBtn,
      totalNumbSongs,
      currentTracks,
      currentSong,
      currentTracksList
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
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      // const rootElement = document.documentElement
      if (theme === 'dark') {
        isDarkTheme.value = true
        // import('./assets/css/dark-theme.css')
        // rootElement.classList.add('dark-theme');
      } else {
        isDarkTheme.value = false
        // import('./assets/css/light-theme.css')
        // rootElement.classList.add('light-theme')
      }
    }

    function handlerChangeThemeBtn(): void {
      isDarkTheme.value = !isDarkTheme.value
      // TODO: не работает пока
      // TODO: как грамотно подключать стили темная/светлая, меняя и переменные и все цвета
      //  async
      // const oldLink = document.querySelector(
      //   `link[href*="${isDarkTheme.value ? 'light' : 'dark'}"]`
      // )
      // if (oldLink) {
      //   oldLink.remove()
      // }
      // const newColor = isDarkTheme.value ? 'dark' : 'light'
      // // ./assets/css/dark-theme.css
      // await loadCss(`./assets/css/${newColor}-theme.css`)

      // if (isDarkTheme.value) {
      //   import('./assets/css/dark-theme.css')
      // } else {
      //   import('./assets/css/light-theme.css')
      // }
    }
    // async function loadCss(file) {
    //   const link = document.createElement('link')
    //   link.rel = 'stylesheet'
    //   link.href = file
    //   // link.type = 'text/css'
    //   document.head.appendChild(link)
    // }

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

    function handlerTimeChange(event: Event): void {
      if (audioPlayer.value) {
        const target = event.target as HTMLInputElement
        audioPlayer.value!.currentTime =
          (Number(target.value) / 100) * (audioPlayer.value!.duration || 0)
      }
    }

    function handlerTimeChangeLine(number: number): void {
      if (audioPlayer.value) {
        audioPlayer.value!.currentTime = number * (audioPlayer.value!.duration || 0)
      }
    }

    function onTimeUpdate(event: Event): void {
      currentTime.value = (event.target as HTMLAudioElement).currentTime
      // TODO: не работает перемотка в MediaSession
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
        duration: target.duration,
        playbackRate: 1,
        position: 0
      })
    }

    function playTrack(): void {
      try {
        audioPlayer.value?.play().then((r) => r)
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
        audioPlayer.value?.pause()
      }
    }

    // for 1 loop
    const isVolumeChanging: Ref<boolean> = ref(false)
    async function changeVolumeSlowly(isDecrease = true): void {
      let steps = 20
      const stepValue = 0.01
      if (isDecrease) {
        // return await new Promise((resolve) => {
        const intervalId = setInterval(() => {
          if (steps >= 0 && volume.value >= 0.2) {
            const newVolume = (volume.value - stepValue).toFixed(2)
            console.log('+', newVolume)
            steps--
            audioPlayer.value!.volume = newVolume
          } else {
            clearInterval(intervalId)
            isVolumeChanging.value = false
            // resolve()
          }
        }, 50)
        // })
      } else {
        // return await new Promise((resolve) => {
        const intervalId = setInterval(() => {
          if (steps >= 0 && volume.value < 1) {
            const newVolume = (volume.value + stepValue).toFixed(2)
            console.log('-', newVolume)
            steps--
            audioPlayer.value!.volume = newVolume
          } else {
            clearInterval(intervalId)
            isVolumeChanging.value = false
            // resolve()
          }
        }, 50)
        // })
      }
    }

    function shortTracksObserver(time: number): void {
      const bestParties: BestParties[] =
        sortingTopTrackList.value[currentTrackIndex.value].bestParties
      for (let i = 0; i < bestParties.length; i++) {
        const currentBestParty = bestParties[i]
        // start song
        if (time < currentBestParty.start && !isVolumeChanging.value) {
          // isVolumeChanging.value = true
          console.log('start')
          audioPlayer.value!.currentTime = currentBestParty.start
          // await changeVolumeSlowly(false)
          return
        } else if (time >= currentBestParty.start && time <= currentBestParty.end) {
          console.log('continue')
          // TODO: хз как поймать эту фазу один раз
          if (time >= currentBestParty.end - 3 && !isVolumeChanging.value) {
            console.log('end')
            // isVolumeChanging.value = true
            // await changeVolumeSlowly(true)
          }
          return
        }
      }
      console.log('nextTrack')
      handlerEnded()
    }

    watchEffect(() => {
      if (tabSelected.value === 4 && isPlaying.value && currentTrackIndex) {
        shortTracksObserver(currentTime.value)
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
      distanceBetweenComponents.value = `${Math.abs(rect1.top - rect2.top) + 18}px`
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
      if (!isPlaying.value) {
        togglePlayPause()
      } else {
        playTrack()
      }
    }

    const isRepeatMode: Ref<boolean> = ref(false)
    function repeatModeChange(): void {
      isRepeatMode.value = !isRepeatMode.value
    }

    type SongsText = {
      [key: string]: string
    }
    const currentSongText: ComputedRef<string> = computed(
      () => (SONGS_TEXT as SongsText)[currentSong.value.songName] || ''
    )

    return {
      audioPlayer,
      isPlaying,
      currentTime,
      volume,
      onVolumeUpdate,
      totalTime,
      isRandomTracks,
      pathToCurrentFile,

      currentTracks,
      currentTrackIndex,
      currentTracksList,
      totalNumbSongs,
      currentSong,

      handlerCanPlay,
      handlerEnded,
      handlerTimeChange,
      handlerTimeChangeLine,
      onTimeUpdate,
      setVolume,
      togglePlayPause,
      nextTrack,
      previousTrackHandler,
      handlerRandomBtn,
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
      isShowSongText,
      closeAllBars,
      currentSongText,
      distanceBetweenComponents
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
        <SongText v-show="isShowSongText" :song-text="currentSongText" class="top_bar" />
      </transition>
      <PageTabs :tab-selected="tabSelected" @change-tab="changeTab" />
      <MainInfoBand :song-name="currentSong.songName" />
      <VolumeControl
        :has-text="!!currentSongText.length"
        :volume="volume"
        @volume-change="setVolume"
        @show-text-song="handlerShowSongTextBtn"
      />
      <ProgressControl
        :best-parties="bestParties"
        :current-time="currentTime"
        :total-time="totalTime"
        @time-change="handlerTimeChange"
        @time-change-line="handlerTimeChangeLine"
      />
      <MainControl
        ref="main_control_ref"
        class="main_control_ref"
        :is-playing="isPlaying"
        @previous="previousTrackHandler"
        @next="nextTrack"
        @play-pause="togglePlayPause"
      />
      <OtherControl
        :current-numb-song="currentTrackIndex + 1"
        :total-numb-songs="totalNumbSongs"
        :is-random-tracks="isRandomTracks"
        :is-show-track-list="isShowTrackList"
        :is-repeat-mode="isRepeatMode"
        :is-dark-theme="isDarkTheme"
        @repeat-mode-click="repeatModeChange"
        @random-click="handlerRandomBtn"
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
* {
  transition: all 0.3s linear;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  color: var(--main-color);
  font-weight: 500;
  --main-font-size: 24px;
  --max-container-width: 1000px;
  font-size: var(--main-font-size);
}
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color-secondary);
  overflow: hidden;
}

main.light {
  color-scheme: light;
  --main-color: #000000ff;
  --main-bg-color: #ffffffff;
  --main-bg-color-secondary: rgba(210, 211, 223, 0.39);
}

main.dark {
  color-scheme: dark;
  --main-color: #ffffffff;
  --main-bg-color: #000000ff;
  --main-bg-color-secondary: rgb(48, 49, 53);
}

/*:root {*/
/*  color-scheme: dark;*/
/*}*/

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
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  /*background-color: #ddd;*/
}

.slide-track-list-enter-active,
.slide-track-list-leave-active {
  transition: all 0.5s ease;
}

/*TODO: баг, -100% недоконца скрывает*/
.slide-track-list-enter-from,
.slide-track-list-leave-to {
  transform: translateY(-110%);
}

.slide-track-list-enter-to,
.slide-track-list-leave-from {
  transform: translateY(0);
}

.slide-song-text-enter-active,
.slide-song-text-leave-active {
  transition: all 0.5s ease;
}

/*TODO: баг, -100% недоконца скрывает*/
.slide-song-text-enter-from,
.slide-song-text-leave-to {
  transform: translateY(-110%);
}

.slide-song-text-enter-to,
.slide-song-text-leave-from {
  transform: translateY(0);
}
</style>
