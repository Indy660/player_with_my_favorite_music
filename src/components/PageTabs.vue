<script lang="ts">
import { defineComponent } from 'vue'
import { tracksApi } from '../composable/tracks'

export default defineComponent({
  props: {
    tabSelected: {
      type: Number,
      default: 1
    }
  },
  emits: ['change-tab'],
  setup(props, { emit }) {
    const { TabsOptionRender } = tracksApi()
    function btnHandler(option: TabsOption): void {
      if (props.tabSelected !== option.id) {
        emit('change-tab', option)
      }
    }
    return {
      btnHandler,
      TabsOptionRender
    }
  }
})
</script>

<template>
  <div class="tabs">
    <button
      v-for="option in TabsOptionRender"
      :key="option.id"
      :class="{ active: option.id === tabSelected }"
      @click.stop="btnHandler(option)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped></style>
