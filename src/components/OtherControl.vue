<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'OtherControl',
  props: {
    currentNumbSong: {
      type: Number,
      default: 0
    },
    totalNumbSong: {
      type: Number,
      default: 0
    },
    isRandomTracks: {
      type: Boolean,
      default: false
    },
    isShowTrackList: {
      type: Boolean,
      default: false
    }
  },
  emits: ['random-click', 'show-list-click'],
  setup(props, { emit }) {
    function iconClickRandomHandler() {
      emit('random-click')
    }
    function iconClickShowListHandler() {
      emit('show-list-click', event)
    }
    return { iconClickRandomHandler, iconClickShowListHandler }
  }
})
</script>

<template>
  <div class="other">
    <button @click="iconClickRandomHandler">
      <i class="fas fa-shuffle" :class="{ active: isRandomTracks }"></i>
    </button>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSong }}</span>
    </div>
    <button @click="iconClickShowListHandler">
      <i class="fas fa-bars" :class="{ active: isShowTrackList }"></i>
    </button>
  </div>
</template>

<style scoped>
.other .active {
  color: blue;
}
</style>
