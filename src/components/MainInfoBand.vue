<script lang="ts">
import { defineComponent, ref, onBeforeMount, ComputedRef, computed } from 'vue'

export default defineComponent({
  name: 'MainInfoBand',
  props: {
    fullSongName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const imagePaths = ref<Record<string, string>>({})

    onBeforeMount(async () => {
      const images = import.meta.glob('@assets/images/*')
      for (const path in images) {
        const imageName = path.replace(/^.*\/(.*)\.\w+$/, '$1')
        imagePaths.value[imageName] = (await images[path]()).default
        console.log('imagePaths', imagePaths.value)
      }
    })

    const getInfoBand = computed(() => {
      const [bandName, songName] = props.fullSongName.split(' - ')
      return {
        bandName,
        songName
      }
    })

    const getLogoImage = computed(() => {
      const { bandName } = getInfoBand.value
      return imagePaths.value[bandName] || imagePaths.value.default_logo
    })

    return { getInfoBand, getLogoImage }
  }
})
</script>

<template>
  <img :src="getLogoImage" class="album-image" alt="" />
  <div class="artist-info">
    <div class="band">{{ getInfoBand.bandName }}</div>
    <div class="song">{{ getInfoBand.songName }}</div>
  </div>
</template>

<style scoped>
.album-image {
  width: 200px;
  height: 200px;
}

.artist-info .band {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
}

.artist-info .song {
  font-size: 18px;
  font-weight: 600;
}
</style>
