<script setup lang="ts">
import { computed, watch } from 'vue'
import Sidebar from './Sidebar.vue'

interface Props {
  currentTracks: string[]
  currentTrackIndex: number
}

const props = defineProps<Props>()
const emit = defineEmits(['select-track-from-list'])

const currentTracksWithCorrectNames = computed<string[]>(() => {
  return props.currentTracks.map((item: string) => {
    const indexLastSlash: number = item.lastIndexOf('/')
    const indexSlice: number = item?.lastIndexOf('.')
    return (item && item.substring(indexLastSlash + 1, indexSlice)) || ''
  })
})

watch(
  () => props.currentTrackIndex,
  () => {
    scrollToCurrentTrack()
  }
)
function scrollToCurrentTrack() {
  const selected = document.querySelector('.tracks .selected')
  selected?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function selectTrackFromList(trackIndex: number): void {
  emit('select-track-from-list', trackIndex)
}
</script>

<template>
  <Sidebar title="Track List">
    <ul class="tracks">
      <li
        v-for="(track, index) in currentTracksWithCorrectNames"
        :key="index"
        :class="{ selected: index === currentTrackIndex }"
        @click.stop="selectTrackFromList(index)"
      >
        {{ index + 1 }}. {{ track }}
      </li>
    </ul>
  </Sidebar>
</template>

<style scoped>
.tracks {
  list-style-type: none;
  margin: 0;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

li {
  color: var(--main-color);
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  line-height: 1.35;
}

li.selected {
  color: var(--player-button-hover);
  border-color: color-mix(in srgb, var(--accent-color), transparent 56%);
  background-color: color-mix(in srgb, var(--accent-color), transparent 86%);
}

li:hover {
  background-color: var(--panel-muted-bg);
}
</style>
