<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'MainControl',
  props: {
    isPlaying: {
      type: Boolean,
      default: false
    }
  },
  emits: ['previous', 'play-pause', 'next'],
  setup(props, { emit }) {
    function previousButtonHandler() {
      emit('previous')
    }

    const iconPlayerButton = computed(() => {
      return props.isPlaying ? '<i class="fas fa-pause"/>' : ' <i class="fas fa-play"/>'
    })

    function playerButtonHandler() {
      emit('play-pause')
    }

    function nextButtonHandler() {
      emit('next')
    }

    return {
      previousButtonHandler,
      playerButtonHandler,
      iconPlayerButton,
      nextButtonHandler
    }
  }
})
</script>

<template>
  <div class="main-control">
    <button class="player-button" @click="previousButtonHandler">
      <i class="fas fa-step-backward"></i>
    </button>
    <button class="player-button" @click="playerButtonHandler">
      <span v-html="iconPlayerButton"></span>
    </button>
    <button class="player-button" @click="nextButtonHandler">
      <i class="fas fa-step-forward"></i>
    </button>
  </div>
</template>

<style scoped>
.main-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
