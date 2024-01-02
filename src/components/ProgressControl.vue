<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'

export default defineComponent({
  name: 'ProgressControl',
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    totalTime: {
      type: Number,
      default: 0
    }
  },
  emits: ['time-change'],
  setup(props, { emit }) {
    const convertToValue: ComputedRef<number> = computed(() => {
      return (props.currentTime / props.totalTime) * 100
    })

    const convertCurrentTime: ComputedRef<string> = computed(() => {
      return formatTime(props.currentTime)
    })

    const convertTotalTime: ComputedRef<string> = computed(() => {
      return formatTime(props.totalTime)
    })

    function formatTime(timeInSeconds: number): string {
      const minutes: number = Math.floor(timeInSeconds / 60)
      const seconds: number = Math.floor(timeInSeconds % 60)
      return `${minutes}:${String(seconds).padStart(2, '0')}`
    }

    const timeHandler = (event: Event) => {
      emit('time-change', event)
    }

    return {
      convertToValue,
      convertCurrentTime,
      convertTotalTime,
      timeHandler
    }
  }
})
</script>

<template>
  <div class="progress-control">
    <input
      id="progressRange"
      type="range"
      min="0"
      max="100"
      :value="convertToValue"
      step="1"
      @input="timeHandler"
    />
    <div class="time-display">
      <span id="currentTime">{{ convertCurrentTime }}</span>
      <span id="totalTime">{{ convertTotalTime }}</span>
    </div>
  </div>
</template>

<style scoped>
.progress-control {
  width: 100%;
}
.time-display {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
}
</style>
