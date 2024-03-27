<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'
// import { tracksApi } from '../composable/tracks'
export default defineComponent({
  name: 'OtherControl',
  props: {
    currentNumbSong: {
      type: Number,
      default: 0
    },
    totalNumbSongs: {
      type: Number,
      default: 0
    },
    isRandomTracks: {
      type: Boolean,
      default: false
    },
    isRepeatMode: {
      type: Boolean,
      default: false
    },
    isShowTrackList: {
      type: Boolean,
      default: false
    },
    isDarkTheme: {
      type: Boolean,
      default: false
    }
  },
  emits: ['random-click', 'show-list-click', 'repeat-mode-click', 'change-theme'],
  setup(props, { emit }) {
    //TODO: не обновляются данные из компонетс
    // const { totalNumbSongs, isRandomTracks } = tracksApi()
    function iconClickRandomHandler(): void {
      emit('random-click')
    }
    function iconClickRepeatModeHandler(): void {
      emit('repeat-mode-click')
    }
    function iconClickShowListHandler(): void {
      emit('show-list-click')
    }
    function iconClickChangeThemeHandler(): void {
      emit('change-theme')
    }

    const iconToggle: ComputedRef<string> = computed(() => {
      return props.isDarkTheme
        ? '<i class="fa-solid fa-toggle-on"/>'
        : '<i class="fa-solid fa-toggle-off"/>'
    })
    const iconBar: ComputedRef<string> = computed(() => {
      return props.isShowTrackList
        ? '<i class="fas fa-bars fa-rotate-90"/>'
        : '<i class="fas fa-bars"/>'
    })
    return {
      // totalNumbSongs,
      // isShowTrackList,
      // isRandomTracks,
      iconClickRandomHandler,
      iconClickRepeatModeHandler,
      iconClickShowListHandler,
      iconClickChangeThemeHandler,
      iconToggle,
      iconBar
    }
  }
})
</script>

<template>
  <div class="other">
    <button :class="{ active: isRandomTracks }" @click="iconClickRandomHandler">
      <i class="fas fa-shuffle"></i>
    </button>
    <button :class="{ active: isRepeatMode }" @click="iconClickRepeatModeHandler">
      <i class="fas fa-repeat"></i>
    </button>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSongs }}</span>
    </div>
    <button @click="iconClickChangeThemeHandler">
      <span v-html="iconToggle"></span>
    </button>
    <button :class="{ active: isShowTrackList }" @click.stop="iconClickShowListHandler">
      <span v-html="iconBar"></span>
    </button>
  </div>
</template>

<style scoped>
.other {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--main-color);
}
.other .active {
  color: #0016ff;
}
</style>
