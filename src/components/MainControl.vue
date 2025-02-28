<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  isPlaying: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['previous', 'play-pause', 'next'])

function previousButtonHandler(): void {
  emit('previous')
}

const iconPlayerButton = computed(() => {
  return props.isPlaying ? '<i class="fas fa-pause"/>' : ' <i class="fas fa-play"/>'
})

function playerButtonHandler(): void {
  emit('play-pause')
}

function nextButtonHandler(): void {
  emit('next')
}
</script>

<template>
  <div class="main-control">
    <button class="player-button" @click.stop="previousButtonHandler">
      <i class="fas fa-step-backward"></i>
    </button>
    <button @keyup.space.prevent class="player-button" @click.stop="playerButtonHandler">
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
