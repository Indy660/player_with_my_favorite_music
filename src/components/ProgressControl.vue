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
    },
    bestParties: {
      type: Array,
      default: () => []
    }
  },
  emits: ['time-change', 'time-change-line'],
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

    const convertBestPartiesInPercentage: ComputedRef<string[]> = computed(() => {
      const oneSecondSongInPercent = (100 / props.totalTime).toFixed(2)
      return props.bestParties?.map((item) => ({
        start: `${item.start * oneSecondSongInPercent}%`,
        end: `${100 - item.end * oneSecondSongInPercent}%`
      }))
    })

    function formatTime(timeInSeconds: number): string {
      const minutes: number = Math.floor(timeInSeconds / 60)
      const seconds: number = Math.floor(timeInSeconds % 60)
      return `${minutes}:${String(seconds).padStart(2, '0')}`
    }

    function timeHandlerEmit(e) {
      const parentLine = e.currentTarget.parentNode
      const { clientWidth } = parentLine
      const rect = parentLine.getBoundingClientRect()
      const x = e.clientX - rect.left // Позиция по оси X относительно родительского элемента
      emit('time-change-line', x / clientWidth)
    }

    function timeHandler(event: Event) {
      // console.log(event)
      emit('time-change', event)
    }

    return {
      convertToValue,
      convertCurrentTime,
      convertTotalTime,
      timeHandler,
      timeHandlerEmit,
      convertBestPartiesInPercentage
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
    <template v-if="bestParties.length">
      <div class="line">
        <div
          v-for="(party, key) in convertBestPartiesInPercentage"
          :key="key"
          :style="{ left: party.start, right: party.end }"
          class="best-section"
          @click="timeHandlerEmit"
        ></div>
      </div>
    </template>
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
  color: var(--main-color);
}

.line {
  margin-top: 5px;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: var(--main-bg-color-secondary);
}
.best-section {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: blue;
  cursor: pointer;
}
</style>
