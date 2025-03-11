<script setup lang="ts">
import { computed } from 'vue'
import { tracksApi } from '@/composable/tracks'

interface Props {
  currentNumbSong: number
  isRepeatMode: boolean
  isShowTrackList: boolean
  isDarkTheme: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:isShowTrackList', 'update:isRepeatMode', 'update:isDarkTheme'])

const { totalNumbSongs, isRandomTracks, handlerRandomBtn } = tracksApi()
function iconClickRandomHandler(): void {
  handlerRandomBtn()
}
function iconClickRepeatModeHandler(): void {
  emit('update:isRepeatMode', !props.isRepeatMode)
}
function iconClickShowListHandler(): void {
  emit('update:isShowTrackList', !props.isShowTrackList)
}
function iconClickChangeThemeHandler(): void {
  emit('update:isDarkTheme', !props.isDarkTheme)
}

const iconToggle = computed(() => {
  return props.isDarkTheme
    ? '<i class="fa-solid fa-toggle-on"/>'
    : '<i class="fa-solid fa-toggle-off"/>'
})
const iconBar = computed(() => {
  return props.isShowTrackList
    ? '<i class="fas fa-bars fa-rotate-90"/>'
    : '<i class="fas fa-bars"/>'
})
</script>

<template>
  <!--  TODO: isRandomTracks/isRepeatMode/isShowTrackList - не подсвечиваются в шаблоне-->
  <div class="other">
    <button :class="{ active: isRandomTracks }" @click.stop="iconClickRandomHandler">
      <i class="fas fa-shuffle"></i>
    </button>
    <button :class="{ active: isRepeatMode }" @click.stop="iconClickRepeatModeHandler">
      <i class="fas fa-repeat"></i>
    </button>
    <div class="song-display">
      <span>{{ currentNumbSong }}</span
      >/<span> {{ totalNumbSongs }}</span>
    </div>
    <button @click.stop="iconClickChangeThemeHandler">
      <span v-html="iconToggle"></span>
    </button>
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
  color: var(--main-color);
}
</style>
