<script lang="ts">
import { defineComponent, onBeforeMount, ref, Ref, watchEffect } from 'vue'
import { tracksApi } from './composable/tracks'
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
    const {
      defaultTrackList,
      topTrackList,
      currentBestParties,
      nextTrack,
      previousTrack,
      pathToCurrentFile,
      sortingTopTrackList,
      currentTrackIndex,
      changeTab,
      selectTrack,
      tabsOption,
      tabSelected,
      isRandomTracks,
      handlerRandomBtn,
      totalNumbSongs,
      currentTracks
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

    const currentTime: Ref<number> = ref(0)
    const volume: Ref<number> = ref(0.8)

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

    function handlerTimeChange(event: Event) {
      if (audioPlayer.value) {
        const target = event.target as HTMLInputElement
        audioPlayer.value!.currentTime =
          (Number(target.value) / 100) * (audioPlayer.value!.duration || 0)
      }
    }

    function handlerTimeChangeLine(number: number) {
      if (audioPlayer.value) {
        audioPlayer.value!.currentTime = number * (audioPlayer.value!.duration || 0)
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
      const target = event.target as HTMLAudioElement
      totalTime.value = target.duration
      navigator.mediaSession.setPositionState({
        duration: target.duration,
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

    watchEffect(() => {
      if (tabSelected.value === 4 && isPlaying.value) {
        shortTracksObserver(currentTime.value)
      }
    })

    function previousTrackHandler() {
      if (audioPlayer.value!.currentTime <= 20 || tabSelected.value === 4) previousTrack()
      else {
        audioPlayer.value!.currentTime = 0
      }
    }

    const isShowTrackList: Ref<boolean> = ref(false)
    function handlerShowListBtn() {
      isShowTrackList.value = !isShowTrackList.value
    }

    // const table = this.$refs?.tableWrapper?.$el
    // table.getBoundingClientRect().top

    function handlerSelectTrack(trackIndex: number) {
      selectTrack(trackIndex)
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
      defaultTrackList,
      topTrackList,
      sortingTopTrackList,
      currentTracks,
      currentTrackIndex,
      handlerCanPlay,
      handlerEnded,
      handlerTimeChange,
      handlerTimeChangeLine,
      onTimeUpdate,
      setVolume,
      setTotalTime,
      playTrack,
      togglePlayPause,
      nextTrack,
      previousTrackHandler,
      handlerRandomBtn,
      handlerShowListBtn,
      handlerSelectTrack,
      tabsOption,
      tabSelected,
      changeTab,
      isShowTrackList,
      repeatModeChange,
      isRepeatMode,
      currentBestParties
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
      <MainInfoBand :song-name="currentTracks[currentTrackIndex]" />
      <VolumeControl :volume="volume" @volume-change="setVolume" />
      <ProgressControl
        :best-parties="currentBestParties"
        :current-time="currentTime"
        :total-time="totalTime"
        @time-change="handlerTimeChange"
        @time-change-line="handlerTimeChangeLine"
      />
      <MainControl
        :is-playing="isPlaying"
        @previous="previousTrackHandler"
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
  z-index: 2;
}

input[type='range'] {
  width: 100%;
  height: 5px;
  border-radius: 2px;
  cursor: pointer;
  margin: 0;
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
