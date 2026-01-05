<script setup lang="ts">
import { computed } from 'vue'
import { tracksApi } from '@/composable/tracks'
import Sidebar from './Sidebar.vue'

interface Props {
  isRepeatMode: boolean
  isDarkTheme: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isRepeatMode', 'update:isDarkTheme'])

const { isRandomTracks, handlerRandomBtn } = tracksApi()

function handleRandomClick(): void {
  handlerRandomBtn()
}

function handleRepeatClick(): void {
  emit('update:isRepeatMode', !props.isRepeatMode)
}

function handleThemeClick(): void {
  emit('update:isDarkTheme', !props.isDarkTheme)
}

const themeIcon = computed(() => {
  return props.isDarkTheme
    ? '<i class="fa-solid fa-toggle-on"/>'
    : '<i class="fa-solid fa-toggle-off"/>'
})
</script>

<template>
  <Sidebar title="Settings">
    <div class="settings">
      <div class="settings-item">
        <button :class="{ active: isRandomTracks }" @click.stop="handleRandomClick">
          <i class="fas fa-shuffle"></i>
        </button>
        <span class="settings-label">Shuffle</span>
      </div>
      <div class="settings-item">
        <button :class="{ active: isRepeatMode }" @click.stop="handleRepeatClick">
          <i class="fas fa-repeat"></i>
        </button>
        <span class="settings-label">Repeat Current Song</span>
      </div>
      <div class="settings-item">
        <button @click.stop="handleThemeClick">
          <span v-html="themeIcon"></span>
        </button>
        <span class="settings-label">{{ isDarkTheme ? 'Dark Theme' : 'Light Theme' }}</span>
      </div>
    </div>
  </Sidebar>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 5px;
}

.settings-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.settings-item:hover {
  background-color: var(--main-bg-color-secondary);
}

.settings-label {
  color: var(--main-color);
  font-size: var(--main-font-size);
  flex: 1;
}

.settings-item button {
  flex-shrink: 0;
}
</style>

