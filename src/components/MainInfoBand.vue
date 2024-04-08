<script lang="ts">
import { defineComponent, ref, onBeforeMount, computed, watch, onUnmounted, onMounted } from 'vue'
import type { ComputedRef, Ref } from 'vue'

export default defineComponent({
  name: 'MainInfoBand',
  props: {
    songName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
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

    watch(
      () => props.songName,
      () => {
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
    )

    return { getInfoBand, getLogoImage, getImageSizes }
  }
})
</script>

<template>
  <div>
    <img :src="getLogoImage" class="album-image" alt="" />
    <div class="artist-info">
      <div class="band">{{ getInfoBand.bandName }}</div>
      <div class="song">{{ getInfoBand.songName }}</div>
    </div>
  </div>
</template>

<style scoped>
.album-image {
  width: v-bind('getImageSizes.width');
  height: v-bind('getImageSizes.height');
}

.artist-info .band {
  margin-bottom: 10px;
}

.artist-info .song {
  font-size: calc(var(--main-font-size) + 2px);
  font-weight: 600;
}
</style>
