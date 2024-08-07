<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  computed,
  onUnmounted,
  onMounted,
  watchEffect
} from 'vue'
import type { ComputedRef, Ref } from 'vue'

export default defineComponent({
  name: 'MainInfoBand',
  props: {
    songName: {
      type: String,
      default: ''
    },
    hasText: {
      type: Boolean,
      default: false
    },
    isFavoriteSong: {
      type: Boolean,
      default: false
    }
  },
  emits: ['show-text-song', 'add-favorite'],
  setup(props, { emit }) {
    const imagePaths = ref<Record<string, string>>({})

    const width: Ref<number> = ref(window.innerWidth)
    const height: Ref<number> = ref(window.innerHeight)

    const updateSize = () => {
      width.value = window.innerWidth
      height.value = window.innerHeight
    }
    onBeforeMount(async () => {
      // :TODO any - хз как исправить
      interface ImagesObject {
        [key: string]: () => Promise<any>
      }
      const images: ImagesObject = import.meta.glob('@assets/images/*')
      for (const path in images) {
        const imageName: string = path.replace(/^.*\/(.*)\.\w+$/, '$1')
        imagePaths.value[imageName] = (await images[path]()).default
      }
    })
    onMounted(() => {
      window.addEventListener('resize', updateSize)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', updateSize)
    })

    const fullSongName: ComputedRef<string> = computed(() => {
      const indexSlice: number | undefined = props.songName?.lastIndexOf('.')
      return (props.songName && props.songName.substring(0, indexSlice)) || ''
    })

    interface GetInfoBand {
      bandName: string
      songName: string
    }
    const getInfoBand: ComputedRef<GetInfoBand> = computed(() => {
      const [bandName, songName] = fullSongName.value.split(' - ')
      return {
        bandName,
        songName
      }
    })

    const getLogoImage: ComputedRef<string> = computed(() => {
      const { bandName } = getInfoBand.value
      return imagePaths.value[bandName] || imagePaths.value.default_logo
      // TODO: как сделать так, чтобы свг в default_logo заработало? Не работает require в css?
      // const path = imagePaths.value[bandName] || imagePaths.value.default_logo
      // return `url(${path})`
    })

    interface ImagesSizes {
      width: number | string
      height: number | string
    }
    const getImageSizes: ComputedRef<ImagesSizes> = computed(() => {
      function getSize(value: number, coefficient: number = 1): ImagesSizes {
        return { width: `${coefficient * value}px`, height: `${coefficient * value}px` }
      }
      if (width.value > height.value) return getSize(height.value, 0.6)
      return getSize(width.value, 0.8)
    })
    function setMetadata(): void {
      if ('mediaSession' in navigator && getLogoImage.value) {
        const imageSizes: string[] = [
          '96x96',
          '128x128',
          '192x192',
          '256x256',
          '384x384',
          '512x512'
        ]
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
    const iconShowTextClass: ComputedRef<string> = computed(() => {
      return props.hasText ? '' : 'disabled'
    })

    const iconHeartClass: ComputedRef<string> = computed(() => {
      // return props.hasText ? '' : 'disabled'
      return props.isFavoriteSong ? 'active' : ''
    })
    function onIconShowTextClick(): void {
      props.hasText && emit('show-text-song')
    }

    function onIconAddFavoriteClick(): void {
      emit('add-favorite')
    }

    return {
      getInfoBand,
      getLogoImage,
      getImageSizes,
      onIconShowTextClick,
      onIconAddFavoriteClick,
      iconHeartClass,
      iconShowTextClass
    }
  }
})
</script>

<template>
  <div class="main-info">
    <img :src="getLogoImage" class="album-image" alt="" />
    <div class="main-panel">
      <button class="heart" :class="iconHeartClass" @click.stop="onIconAddFavoriteClick">
        <i class="fa-solid fa-heart" />
      </button>
      <!--    <div class="album-image" alt="" />-->
      <div class="artist-info">
        <div class="band">{{ getInfoBand.bandName }}</div>
        <div class="song">{{ getInfoBand.songName }}</div>
      </div>
      <button class="show-text" :class="iconShowTextClass" @click.stop="onIconShowTextClick">
        <i class="fa-solid fa-text-height" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.main-info {
  .album-image {
    width: v-bind('getImageSizes.width');
    height: v-bind('getImageSizes.height');
    background-color: white;
    /*color: green;*/
    /*background-image: v-bind('getLogoImage') ;*/
    /*background-size: contain;*/
    /*color: var(--main-color);*/
  }

  .main-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .artist-info .band {
      margin-bottom: 10px;
    }

    .artist-info .song {
      font-size: calc(var(--main-font-size) + 2px);
      font-weight: 600;
    }

    .heart.active {
      color: #de0a26;
    }

    button {
      font-size: 20px;
    }
  }
}
</style>
