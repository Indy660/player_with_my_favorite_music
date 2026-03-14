<script setup lang="ts">
import { computed } from 'vue'
import { tracksApi } from '@/composable/tracks'
import Sidebar from './Sidebar.vue'

interface Props {
  isRepeatMode: boolean
  isDarkTheme: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isRepeatMode', 'update:isDarkTheme', 'open-equalizer'])

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

function handleEqualizerClick(): void {
  emit('open-equalizer')
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
      <div class="settings-item" @click.stop="handleRandomClick">
        <button :class="{ active: isRandomTracks }">
          <i class="fas fa-shuffle"></i>
        </button>
        <span class="settings-label">Shuffle</span>
      </div>
      <div class="settings-item" @click.stop="handleRepeatClick">
        <button :class="{ active: isRepeatMode }">
          <i class="fas fa-repeat"></i>
        </button>
        <span class="settings-label">Repeat Current Song</span>
      </div>
      <div class="settings-item" @click.stop="handleThemeClick">
        <button>
          <span v-html="themeIcon"></span>
        </button>
        <span class="settings-label">{{ isDarkTheme ? 'Dark Theme' : 'Light Theme' }}</span>
      </div>
      <div class="settings-item" @click.stop="handleEqualizerClick">
        <button>
          <i class="fas fa-sliders"></i>
        </button>
        <span class="settings-label">Equalizer</span>
      </div>
    </div>
  </Sidebar>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 8px;
}

.settings-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: background-color 0.2s ease;
  cursor: pointer;
  user-select: none;
}

.settings-item:hover {
  background-color: var(--panel-muted-bg);
  border-color: var(--main-border-color);
}

.settings-item:active {
  transform: scale(0.98);
}

.settings-label {
  color: var(--main-color);
  font-size: var(--main-font-size);
  flex: 1;
}

.settings-item button {
  flex-shrink: 0;
  pointer-events: none;
}
</style>
