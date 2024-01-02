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
    }
  },
  emits: ['random-click'],
  setup(_, { emit }) {
    function iconClickHandler() {
      emit('random-click')
    }
    return { iconClickHandler }
  }
})
</script>

<template>
  <div class="other">
    <i
      class="fa-solid fa-shuffle"
      :class="{ active: isRandomTracks }"
      @click="iconClickHandler"
    ></i>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSong }}</span>
    </div>
  </div>
</template>

<style scoped>
.other .active {
  color: blue;
}
</style>
