<script lang="ts">
import { defineComponent } from 'vue'
import { TABS_OPTION } from '../const/tabs_otion'

export default defineComponent({
  props: {
    tabSelected: {
      type: Number,
      default: 1
    }
  },
  emits: ['change-tab'],
  setup(props, { emit }) {
    function btnHandler(option: TabsOption): void {
      if (props.tabSelected !== option.id) {
        emit('change-tab', option)
      }
    }
    return {
      btnHandler,
      TABS_OPTION
    }
  }
})
</script>

<template>
  <div class="tabs">
    <button
      v-for="(option, index) in TABS_OPTION"
      :key="index"
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
}

.tabs button {
  color: var(--main-color);
  background-color: var(--main-bg-color-secondary);
  border: none;
  padding: 10px 20px;
  border-radius: initial;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tabs button.active {
  background-color: var(--main-bg-color);
  border: 1px solid var(--main-color);
}
</style>
