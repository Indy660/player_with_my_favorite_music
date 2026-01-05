<script setup lang="ts">
import { computed } from 'vue'
import { tracksApi } from '@/composable/tracks'

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
  <div class="sidebar settings" @click.stop>
    <h3 class="settings-title">Настройки</h3>
    <div class="settings-item">
      <button :class="{ active: isRandomTracks }" @click.stop="handleRandomClick">
        <i class="fas fa-shuffle"></i>
      </button>
      <span class="settings-label">Случайный порядок</span>
    </div>
    <div class="settings-item">
      <button :class="{ active: isRepeatMode }" @click.stop="handleRepeatClick">
        <i class="fas fa-repeat"></i>
      </button>
      <span class="settings-label">Повторять текущую песню</span>
    </div>
    <div class="settings-item">
      <button @click.stop="handleThemeClick">
        <span v-html="themeIcon"></span>
      </button>
      <span class="settings-label">{{ isDarkTheme ? 'Темная тема' : 'Светлая тема' }}</span>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--main-bg-color);
  width: 100%;
  overflow-y: auto;
  list-style-type: none;
  margin: 0;
  padding: 10px 5px;
  text-align: start;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.settings-title {
  color: var(--main-color);
  font-size: calc(var(--main-font-size) + 2px);
  margin: 10px 0;
  text-align: center;
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

