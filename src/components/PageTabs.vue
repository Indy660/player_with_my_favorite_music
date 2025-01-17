<script setup lang="ts">
import { tracksApi } from '@/composable/tracks'

interface Props {
  tabSelected: number
}

const props = defineProps<Props>()
const emit = defineEmits(['change-tab'])

const { TabsOptionRender } = tracksApi()
function btnHandler(option: TabsOption): void {
  if (props.tabSelected !== option.id) {
    emit('change-tab', option)
  }
}
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
