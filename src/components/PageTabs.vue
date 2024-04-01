<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    // tabsOption: {
    //   type: Array,
    //   default: () => []
    // },
    tabSelected: {
      type: Number,
      default: 1
    }
  },
  emits: ['change-tab'],
  setup(props, { emit }) {
    const tabsOption: TabsOption[] = [
      { label: 'All music', id: 1, url: 'all' },
      { label: 'Top', id: 2, url: 'top' },
      { label: 'Top Shorts', id: 4, url: 'shorts' },
      { label: 'Not aggressive', id: 3, url: 'not_aggressive' }
    ]
    function btnHandler(option: TabsOption): void {
      if (props.tabSelected !== option.id) {
        emit('change-tab', option)
      }
    }
    return {
      btnHandler,
      tabsOption
    }
  }
})
</script>

<template>
  <div class="tabs">
    <button
      v-for="(option, index) in tabsOption"
      :key="index"
      :class="{ active: option.id === tabSelected }"
      @click="btnHandler(option)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
}

.tabs button {
  color: var(--main-color);
  background-color: var(--main-bg-color-secondary);
  border: none;
  padding: 10px 20px;
  border-radius: initial;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tabs button.active {
  background-color: var(--main-bg-color);
  border: 1px solid var(--main-color);
}
</style>
