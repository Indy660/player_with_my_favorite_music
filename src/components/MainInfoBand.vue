<script lang="ts">
import { defineComponent, ref, onBeforeMount, computed, watchEffect } from 'vue'

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

    const fullSongName = computed(() => {
      const indexSlice: number | undefined = props.songName?.lastIndexOf('.')
      return (props.songName && props.songName.substring(0, indexSlice)) || ''
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
      // TODO: как сделать так, чтобы свг в default_logo заработало? Не работает require в css?
      // const path = imagePaths.value[bandName] || imagePaths.value.default_logo
      // return `url(${path})`
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
    const iconShowTextClass = computed(() => {
      return props.hasText ? '' : 'disabled'
    })

    const iconHeartClass = computed(() => {
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
    background-color: white;
    aspect-ratio: 1 / 1;
    max-height: 60vh;
    max-width: 60vw;
    width: 100%;
    height: 100%;
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
