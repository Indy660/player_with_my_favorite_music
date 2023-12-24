<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'MainInfoBand',
  props: {
    volume: {
      type: Number,
      default: 80
    }
  },
  setup(props, { emit }) {
    const convertToValue = computed(() => {
      return props.volume * 100
    })

    function volumeHandler(event: InputEvent) {
      emit('volumeChange', (event.target as HTMLInputElement).value)
    }

    return {
      convertToValue,
      volumeHandler
    }
  }
})
</script>

<template>
  <div class="volume-control">
    <button id="volumeDownBtn" class="player-button">
      <i class="fas fa-volume-up"></i>
    </button>
    <input
      id="volumeRange"
      class="volume-control"
      type="range"
      :value="convertToValue"
      min="0"
      max="100"
      value="80"
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
</style>
