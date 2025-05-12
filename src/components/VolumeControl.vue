<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  volume: number
}

const props = defineProps<Props>()
const emit = defineEmits(['volume-change'])

const convertToValue = computed(() => {
  return props.volume * 100
})
const iconVolume = computed(() => {
  return props.volume > 0 ? '<i class="fas fa-volume-up"/>' : '<i class="fas fa-volume-off"/>'
})

function volumeHandler(event: Event) {
  const volumeValue: number = parseFloat((event.target as HTMLInputElement).value) / 100
  emit('volume-change', volumeValue)
}

function volumeHandlerByClick(number: number): void {
  emit('volume-change', number)
}

function onIconVolumeClick(): void {
  const defaultVolume: number = 0.8
  if (props.volume > 0) {
    volumeHandlerByClick(0)
  } else {
    volumeHandlerByClick(defaultVolume)
  }
}
</script>

<template>
  <div class="volume-control">
    <button class="player-button margin" @click.stop="onIconVolumeClick">
      <span v-html="iconVolume"></span>
    </button>
    <input
      class="margin"
      type="range"
      :value="convertToValue"
      min="0"
      max="100"
      step="1"
      @input="volumeHandler"
    />
  </div>
</template>

<style scoped>
.volume-control {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.volume-control .player-button {
  text-align: start;
  min-width: 30px;
  padding: 0;
}


.volume-cont.player-buttonrol .margin {
  margin-right: 0.2vw;
}
</style>
