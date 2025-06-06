<script setup lang="ts">
import { ref, onBeforeMount, computed, watchEffect, onMounted, onUnmounted, watch } from "vue";
import { useAdaptive } from '@/composable/useAdaptive.ts'

interface Props {
  songName: string
  hasText: boolean
  isFavoriteSong: boolean
  isDarkTheme: boolean
}

const props = defineProps<Props>()

const imagePaths = ref<Record<string, string>>({})

onBeforeMount(async () => {
  interface ImagesObject {
    [key: string]: () => Promise<any>
  }

  const images: ImagesObject = import.meta.glob('@assets/images/*')
  for (const path in images) {
    const imageName: string = path.replace(/^.*\/(.*)\.\w+$/, '$1')
    imagePaths.value[imageName] = (await images[path]()).default
  }
})

const fullSongName = computed(() => {
  const indexSlice: number | undefined = props.songName?.lastIndexOf('.')
  return (props.songName && props.songName.substring(0, indexSlice)) || ''
})

const isInvertColorImage = computed(() => {
  return props.isDarkTheme && imagePaths.value.default_logo === getLogoImage.value
})

interface GetInfoBand {
  bandName: string
  songName: string
}

const getInfoBand = computed<GetInfoBand>(() => {
  const [bandName, songName] = fullSongName.value.split(' - ')
  return {
    bandName,
    songName
  }
})

const getLogoImage = computed(() => {
  const { bandName } = getInfoBand.value
  return imagePaths.value[bandName] || imagePaths.value.default_logo
})

function setMetadata(): void {
  if ('mediaSession' in navigator && getLogoImage.value) {
    const imageSizes: string[] = ['96x96', '128x128', '192x192', '256x256', '384x384', '512x512']
    navigator.mediaSession.metadata = new MediaMetadata({
      title: getInfoBand.value?.songName || '',
      artist: getInfoBand.value?.bandName || '',
      artwork: imageSizes.map((item) => ({
        src: getLogoImage.value,
        sizes: item,
        type: 'image/png'
      }))
    })
  }
}

watchEffect(() => {
  if (getInfoBand.value && getLogoImage.value) {
    setMetadata()
  }
})

function getTextWidth(text: string, font: string): number {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  context.font = font
  return context.measureText(text).width
}

const artistInfoEl = ref<HTMLElement | null>(null)
const containerWidth = ref(0)

const { widthWindow } = useAdaptive()

const font = computed(() => {
  if (widthWindow.value < 400) {
    return '15px Arial,sans-serif'
  }
  if (widthWindow.value < 600) {
    return '20px Arial,sans-serif'
  }
  if (widthWindow.value < 743) {
    return '16px Arial,sans-serif'
  }
  return '18px Arial,sans-serif'
})
const updateWidth = () => {
  if (artistInfoEl.value) {
    containerWidth.value = artistInfoEl.value.clientWidth
  }
}
onMounted(() => {
  updateWidth()
})

watch(widthWindow, updateWidth)
const shouldScrollSong = computed(() => {
  return getTextWidth(getInfoBand.value.songName, '500 ' + font.value) > containerWidth.value
})

const shouldScrollBand = computed(() => {
  return getTextWidth(getInfoBand.value.bandName, 'bold ' + font.value) > containerWidth.value
})
</script>

<template>
  <div class="main-info">
    <img
      :src="getLogoImage"
      :class="{ 'invert-color': isInvertColorImage }"
      class="album-image"
      alt=""
    />
    <div class="main-panel">
      <div ref="artistInfoEl" class="artist-info">
        <div class="band-wrapper">
          <div class="band" :class="{ scrolling: shouldScrollBand }">
            <template v-if="shouldScrollBand">
              <span>{{ getInfoBand.bandName }}&nbsp;&nbsp;&nbsp;</span>
              <span>{{ getInfoBand.bandName }}&nbsp;&nbsp;&nbsp;</span>
            </template>
            <template v-else>
              <span>{{ getInfoBand.bandName }}</span>
            </template>
          </div>
        </div>

        <div class="song-wrapper">
          <div class="song" :class="{ scrolling: shouldScrollSong }">
            <template v-if="shouldScrollSong">
              <span>{{ getInfoBand.songName }}&nbsp;&nbsp;&nbsp;</span>
              <span>{{ getInfoBand.songName }}&nbsp;&nbsp;&nbsp;</span>
            </template>
            <template v-else>
              <span>{{ getInfoBand.songName }}</span>
            </template>
          </div>
        </div>
      </div>
      <div class="slot-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.band-wrapper,
.song-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.band,
.song {
  display: inline-flex;
  white-space: nowrap;
  font: bold 20px Rubik;
}

.band.scrolling,
.song.scrolling {
  animation: scrollLoop 10s linear infinite;
}

@keyframes scrollLoop {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.main-info {
  .album-image {
    border-radius: 5px;
    aspect-ratio: 1 / 1;
    width: min(40vw, 400px);
    height: min(40vw, 400px);
    object-fit: cover;
    transition: none;
    margin: 20px 0;

    &.invert-color {
      filter: invert(1);
    }
  }

  .main-panel {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    .artist-info {
      width: 55%;
      text-align: left;
      margin: 10px 0;

      .band {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;
      }
      .band > span {
        font-weight: bold;
      }
    }

    .slot-wrapper {
      width: 40%;
    }

    button {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 400px) {
  .main-info {
    .album-image {
      width: min(60vw, 600px);
      height: min(60vw, 600px);
      margin: 20px 0;
    }
  }
}

@media (min-width: 400px) and (max-width: 600px) {
  .main-info {
    .album-image {
      width: min(50vw, 500px);
      height: min(50vw, 500px);
      margin: 20px 0;
    }
  }
}
</style>
