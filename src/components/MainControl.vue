<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'
// import { ComputedRef } from 'vue/dist/vue'
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
    function previousButtonHandler(): void {
      emit('previous')
    }

    const iconPlayerButton: ComputedRef<string> = computed(() => {
      return props.isPlaying ? '<i class="fas fa-pause"/>' : ' <i class="fas fa-play"/>'
    })

    function playerButtonHandler(): void {
      emit('play-pause')
    }

    function nextButtonHandler(): void {
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
    <button class="player-button" @click.stop="previousButtonHandler">
      <i class="fas fa-step-backward"></i>
    </button>
    <button class="player-button" @click.stop="playerButtonHandler">
      <span v-html="iconPlayerButton"></span>
    </button>
    <button class="player-button" @click.stop="nextButtonHandler">
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
