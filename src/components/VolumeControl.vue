<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'

export default defineComponent({
  name: 'VolumeControl',
  props: {
    volume: {
      type: Number,
      default: 0.8
    }
  },
  emits: ['volume-change'],
  setup(props, { emit }) {
    const convertToValue: ComputedRef<number> = computed(() => {
      return props.volume * 100
    })
    // TODO: не работает
    // const iconVolume = computed(() => {
    //   return props.volume > 0 ? 'fa-volume-up' : 'fa-volume-off'
    // })
    const iconVolume: ComputedRef<string> = computed(() => {
      return props.volume > 0 ? '<i class="fas fa-volume-up"/>' : '<i class="fas fa-volume-off"/>'
    })

    function volumeHandler(event: InputEvent): void {
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

    return {
      convertToValue,
      volumeHandler,
      onIconVolumeClick,
      iconVolume
    }
  }
})
</script>

<template>
  <div class="volume-control">
    <button class="player-button margin" @click.stop="onIconVolumeClick">
      <!--      // TODO: можно ли без span?-->
      <span v-html="iconVolume"></span>
      <!--      <i class="fas" :class="iconVolume" />-->
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

.volume-control .margin {
  margin-right: 0.2vw;
}
</style>
