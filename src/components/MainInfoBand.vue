<script lang="ts">
import { defineComponent, ref, onBeforeMount, computed, watch } from 'vue'
import type { ComputedRef } from 'vue'

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

    return { getInfoBand, getLogoImage }
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
  width: calc(75vw - 40px);
  max-width: calc(var(--max-container-width) - 40px - 50px);
  height: calc(75vw - 40px);
  max-height: calc(var(--max-container-width) - 40px - 50px);
}

.artist-info .band {
  margin-bottom: 10px;
}

.artist-info .song {
  font-size: calc(var(--main-font-size) + 2px);
  font-weight: 600;
}

@media screen and (max-width: 400px) {
  .album-image {
    max-height: unset;
    max-width: unset;
  }
}
</style>
