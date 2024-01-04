<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tabOptions: {
      type: Array,
      default: () => []
    },
    tabSelected: {
      type: Number,
      default: 1
    }
  },
  emits: ['change-tab'],
  setup(_, { emit }) {
    function btnHandler(option) {
      emit('change-tab', option)
    }
    return {
      btnHandler
    }
  }
})
</script>

<template>
  <div class="tabs">
    <button
      v-for="(option, index) in tabOptions"
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
  background-color: #f2f2f2;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tabs button.active {
  background-color: #e4e4e4;
}
</style>
