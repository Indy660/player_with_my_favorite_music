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
  emits: ['randomClick'],
  setup(_, { emit }) {
    function iconClickHandler() {
      emit('randomClick')
    }
    return { iconClickHandler }
  }
})
</script>

<template>
  <div class="other">
    <i class="fa-solid fa-shuffle" :class="{ isRandomTracks: 'red' }" @click="iconClickHandler"></i>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSong }}</span>
    </div>
  </div>
</template>

<style scoped></style>
