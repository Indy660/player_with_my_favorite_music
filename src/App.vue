<script lang="ts">
import { computed, ComputedRef, defineComponent, onBeforeMount, ref, Ref } from 'vue'
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
    MainInfoBand,
    VolumeControl,
    ProgressControl,
    MainControl,
    OtherControl
  },
  setup() {
    const audioPlayer: Ref<CustomAudioElement | null> = ref(null)
    const trackList: Ref<string[]> = ref([])
    const currentTrackIndex: Ref<number> = ref(0)
    const totalNumbSongs: Ref<number> = ref(0)
    const isPlaying: Ref<boolean> = ref(false)
    const currentTime: Ref<number> = ref(0)
    const totalTime: Ref<number> = ref(0)
    const isRandomTracks: Ref<boolean> = ref(false)

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

    const currentTracks: ComputedRef<string[]> = computed(() => {
      return isRandomTracks.value ? getRandomTracks() : trackList.value
    })

    const getRandomTracks = (): string[] => {
      return trackList.value
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    }

    onBeforeMount(async () => {
      const music = import.meta.glob('@assets/music/*.mp3')
      //     const music = import.meta.glob('./assets/music/*.mp3');
      for (const path in music) {
        trackList.value.push((await music[path]()).default)
      }
      totalNumbSongs.value = trackList.value.length
      audioPlayer.value = document.getElementById('audioPlayer') as CustomAudioElement
    })

    const handlerCanPlay = (event: Event) => {
      setTotalTime(event)
      playTrack()
    }

    const handlerEnded = () => {
      nextTrack()
    }

    const handlerTimeChange = (event: Event) => {
      if (audioPlayer.value) {
        const target = event.target as HTMLInputElement
        audioPlayer.value!.currentTime =
          (Number(target.value) / 100) * (audioPlayer.value!.duration || 0)
      }
    }

    const onTimeUpdate = (event: Event) => {
      currentTime.value = (event.target as HTMLAudioElement).currentTime
    }

    const setVolume = (value: number) => {
      audioPlayer.value!.volume = value / 100
    }

    const setTotalTime = (event: Event) => {
      totalTime.value = (event.target as HTMLAudioElement).duration
    }

    const playTrack = () => {
      if (isPlaying.value) {
        try {
          audioPlayer.value?.play().then((r) => r)
        } catch (error) {}
      }
    }

    const togglePlayPause = () => {
      isPlaying.value = !isPlaying.value
      if (isPlaying.value) {
        audioPlayer.value?.play().then((r) => r)
      } else {
        audioPlayer.value?.pause()
      }
    }

    const nextTrack = () => {
      currentTrackIndex.value += 1
      if (currentTrackIndex.value >= trackList.value.length) {
        currentTrackIndex.value = 0
      }
    }

    const previousTrack = () => {
      if (currentTime.value <= 20)
        currentTrackIndex.value =
          (currentTrackIndex.value - 1 + trackList.value.length) % trackList.value.length
      else {
        // TODO: потенциально ошибка может быть
        audioPlayer.value!.currentTime = 0
      }
    }

    const handlerRandomBtn = () => {
      isRandomTracks.value = !isRandomTracks.value
    }

    return {
      audioPlayer,
      trackList,
      currentTrackIndex,
      totalNumbSongs,
      isPlaying,
      currentTime,
      totalTime,
      isRandomTracks,
      pathToCurrentFile,
      fullSongName,
      currentTracks,
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
      handlerRandomBtn
    }
  }
})
</script>

<template>
  <div class="container">
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
      @random-click="handlerRandomBtn"
    />
    <!--      src="./music/Angel Vivaldi - A Martian Winter.mp3"-->
    <!--      :src="pathToCurrentFile"-->
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

.container {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
}
input[type='range']::-webkit-slider-thumb {
  width: 12px;
  height: 12px;
  background-color: #666;
  border-radius: 50%;
  cursor: pointer;
}
</style>
