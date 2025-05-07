<script setup lang="ts">
import { ref, onBeforeMount, computed, watchEffect } from 'vue'

interface Props {
  songName: string
  hasText: boolean
  isFavoriteSong: boolean
  isDarkTheme: boolean
}

const props = defineProps<Props>()
// const emit = defineEmits(['show-text-song', 'add-favorite'])

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
// const iconShowTextClass = computed(() => {
//   return props.hasText ? '' : 'disabled'
// })

// const iconHeartClass = computed(() => {
//   return props.isFavoriteSong ? 'active' : ''
// })
// function onIconShowTextClick(): void {
//   props.hasText && emit('show-text-song')
// }

// function onIconAddFavoriteClick(): void {
//   emit('add-favorite')
// }
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
      <div class="artist-info">
        <div class="band">{{ getInfoBand.bandName }}</div>
        <div class="song">{{ getInfoBand.songName }}</div>
      </div>
      <div class="slot-wrapper">
        <slot />
      </div>

<!--      <button class="heart" :class="iconHeartClass" @click.stop="onIconAddFavoriteClick">-->
<!--        <i class="fa-solid fa-heart" />-->
<!--      </button>-->
<!--      <button class="show-text" :class="iconShowTextClass" @click.stop="onIconShowTextClick">-->
<!--        <i class="fa-solid fa-text-height" />-->
<!--      </button>-->
    </div>
  </div>
</template>

<style >
.main-info {
  .album-image {
    border-radius: 5px;
    aspect-ratio: 1 / 1;
    max-height: 60vh;
    max-width: 60vw;
    width: 100%;
    height: 100%;
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
      width: 45%;
      text-align: left;
      margin: 10px 0;
      .band {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 10px;

      }

      .song {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: calc(var(--main-font-size) + 2px);

        font-weight: 600;
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
</style>
