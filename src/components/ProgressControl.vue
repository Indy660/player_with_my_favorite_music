<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentTime: number
  totalTime: number
  bestParties: BestParties[]
}

const props = defineProps<Props>()
const emit = defineEmits(['time-change', 'time-change-line'])

const convertToValue = computed(() => {
  return (props.currentTime / props.totalTime) * 1000
})

const convertCurrentTime = computed(() => {
  return formatTime(props.currentTime)
})

const convertCurrentTimeSeconds = computed(() => {
  return import.meta.env.DEV ? formatTimeSeconds(props.currentTime) : ''
})

const convertTotalTime = computed(() => {
  return formatTime(props.totalTime)
})

interface BestPartiesPosition {
  left: string
  right: string
}
const convertBestPartiesInPercentage = computed<BestPartiesPosition[]>(() => {
  const oneSecondSongInPercent: number = Number((100 / props.totalTime).toFixed(2))
  // TODO: хз как defineProps в props.bestParties проверить типы
  return props.bestParties.map((item) => ({
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
  emit('time-change', (Number(target.value) / 1000) * (props.totalTime || 0))
}
</script>

<template>
  <div class="progress-control">
    <div class="input-wrapper">
      <input type="range" min="0" max="1000" :value="convertToValue" step="1" @input="timeHandler" />
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
    <div class="time-display">
      <span>{{ convertCurrentTime }}</span>
      <span>{{ convertCurrentTimeSeconds }}</span>
      <span>{{ convertTotalTime }}</span>
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
  color: var(--main-color);
}
/*
input[type="range"]::-webkit-slider-thumb {
  border: 2px solid red;
  background: var(--main-color);
}
*/


/*  TODO: подумать как исправить, хочу изменить стиль ползунка, но надо учесть что цвет после проигрыша тоже должен быть свой */
.input-wrapper input[type="range"]::-webkit-slider-runnable-track {
 background: transparent;
 //background: var(--main-color);
  //opacity: 0.3;
}

.input-wrapper input[type="range"]::-moz-range-track {
 //background: transparent;
}

.input-wrapper {
 position: relative;
 .line {
   position: absolute;
   width: 100%;
   height: 5px;
   /*  TODO: подумать как исправить */
   top: 17px;
   @media (max-width: 743px) {
     top: 9px;
   }
 }

 .best-section {
   position: absolute;
   top: 0;
   bottom: 0;
   background-color:  hsl(var(--active-color-btn), var(--color-lightness));
   cursor: pointer;
 }
}
</style>
