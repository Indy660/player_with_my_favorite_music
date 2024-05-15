<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'

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

    const convertCurrentTimeSeconds: ComputedRef<string> = computed(() => {
      return import.meta.env.DEV ? formatTimeSeconds(props.currentTime) : ''
    })

    const convertTotalTime: ComputedRef<string> = computed(() => {
      return formatTime(props.totalTime)
    })

    // type TypeParties = 'start' | 'end'
    interface BestPartiesPosition {
      left: string
      right: string
    }
    const convertBestPartiesInPercentage: ComputedRef<BestPartiesPosition[]> = computed(() => {
      const oneSecondSongInPercent: number = Number((100 / props.totalTime).toFixed(2))
      // TODO: хз как defineProps в props.bestParties проверить типы
      return (props.bestParties as BestParties[]).map((item) => ({
        left: `${item.start * oneSecondSongInPercent}%`,
        right: `${100 - item.end * oneSecondSongInPercent}%`
      }))
    })

    function formatTimeSeconds(timeInSeconds: number): string {
      return `${timeInSeconds.toFixed(2)}`
    }

    function formatTime(timeInSeconds: number): string {
      const minutes: number = Math.floor(timeInSeconds / 60)
      const seconds: number = Math.floor(timeInSeconds % 60)
      return `${minutes}:${String(seconds).padStart(2, '0')}`
    }

    function timeHandlerEmit(e: MouseEvent): void {
      const parentLine: Element = <HTMLElement>(<HTMLElement>e.target).parentNode || null
      const clientWidth: number = parentLine?.clientWidth || 0
      const rect: DOMRect = parentLine.getBoundingClientRect()
      const x: number = e.clientX - rect.left // Позиция по оси X относительно родительского элемента
      emit('time-change', (x / clientWidth) * props.totalTime)
    }

    function timeHandler(event: Event): void {
      const target = event.target as HTMLInputElement
      emit('time-change', (Number(target.value) / 100) * (props.totalTime || 0))
    }

    return {
      convertToValue,
      convertCurrentTime,
      convertTotalTime,
      timeHandler,
      timeHandlerEmit,
      convertBestPartiesInPercentage,
      convertCurrentTimeSeconds
    }
  }
})
</script>

<template>
  <div class="progress-control">
    <input type="range" min="0" max="100" :value="convertToValue" step="1" @input="timeHandler" />
    <div class="time-display">
      <span>{{ convertCurrentTime }}</span>
      <span>{{ convertCurrentTimeSeconds }}</span>
      <span>{{ convertTotalTime }}</span>
    </div>
    <template v-if="bestParties.length">
      <div class="line">
        <div
          v-for="(party, key) in convertBestPartiesInPercentage"
          :key="key"
          :style="{ left: party.left, right: party.right }"
          class="best-section"
          @click.stop="timeHandlerEmit"
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
