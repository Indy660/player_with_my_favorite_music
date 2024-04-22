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

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
}

.tabs button {
  color: var(--main-color);
  background-color: var(--main-bg-color-secondary);
  border: none;
  padding: 10px 20px;
  border-radius: initial;
}

.tabs button.active {
  background-color: var(--main-bg-color);
  border: 1px solid var(--main-color);
}
</style>
