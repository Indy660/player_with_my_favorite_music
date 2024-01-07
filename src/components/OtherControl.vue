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
    <button :class="{ active: isRandomTracks }" @click="iconClickRandomHandler">
      <i class="fas fa-shuffle"></i>
    </button>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSong }}</span>
    </div>
    <!--    todo пофиксить но хз как-->
    <button
      v-if="isShowTrackList"
      :class="{ active: isShowTrackList }"
      @click="iconClickShowListHandler"
    >
      <i class="fas fa-bars fa-rotate-90"></i>
    </button>
    <button v-else @click.stop="iconClickShowListHandler">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>

<style scoped>
.other {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.other .active {
  color: #0016ff;
}
</style>
