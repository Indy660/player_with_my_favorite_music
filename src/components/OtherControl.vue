<script setup lang="ts">
import { computed } from 'vue'
import { tracksApi } from '@/composable/tracks'

interface Props {
  currentNumbSong: number
  isShowTrackList: boolean
  isShowSettings: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isShowTrackList', 'update:isShowSettings'])

const { totalNumbSongs } = tracksApi()

function iconClickShowListHandler(): void {
  emit('update:isShowTrackList', !props.isShowTrackList)
}

function iconClickShowSettingsHandler(): void {
  emit('update:isShowSettings', !props.isShowSettings)
}

const iconBar = computed(() => {
  return props.isShowTrackList
    ? '<i class="fas fa-bars fa-rotate-90"/>'
    : '<i class="fas fa-bars"/>'
})
</script>

<template>
  <div class="other">
    <button :class="{ active: isShowSettings }" @click.stop="iconClickShowSettingsHandler">
      <i class="fas fa-cog"></i>
    </button>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSongs }}</span>
    </div>
    <button :class="{ active: isShowTrackList }" @click.stop="iconClickShowListHandler">
      <span v-html="iconBar"></span>
    </button>
  </div>
</template>

<style scoped>
.other {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a2a2a2;
  margin: 20px 0;
}
</style>
