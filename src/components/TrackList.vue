<script lang="ts">
import { defineComponent, computed, watch, nextTick } from 'vue'
import type { ComputedRef } from 'vue'
export default defineComponent({
  name: 'TrackList',
  props: {
    currentTracks: {
      type: Array,
      default: () => []
    },
    currentTrackIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['select-track-from-list'],
  setup(props, { emit }) {
    const currentTracksWithCorrectNames: ComputedRef<string[]> = computed(() => {
      // TODO: хз как defineProps в props.currentTracks проверить типы
      return (props.currentTracks as string[]).map((item: string) => {
        const indexLastSlash: number = item.lastIndexOf('/')
        const indexSlice: number = item?.lastIndexOf('.')
        return (item && item.substring(indexLastSlash + 1, indexSlice)) || ''
      })
    })

    watch(
      () => props.currentTrackIndex,
      () => {
        scrollTo()
      }
    )
    // TODO: хз, что возвращает, войд не подходит
    async function scrollTo() {
      await nextTick()
      const selected = document.querySelector('.tracks .selected')
      selected?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    function selectTrackFromList(trackIndex: number): void {
      emit('select-track-from-list', trackIndex)
    }

    return {
      currentTracksWithCorrectNames,
      selectTrackFromList
    }
  }
})
</script>

<template>
  <ul class="sidebar tracks" @click.stop>
    <li
      v-for="(track, index) in currentTracksWithCorrectNames"
      :key="index"
      :class="{ selected: index === currentTrackIndex }"
      @click.stop="selectTrackFromList(index)"
    >
      {{ index + 1 }}. {{ track }}
    </li>
  </ul>
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
li {
  color: var(--main-color);
  margin-bottom: 5px;
  cursor: pointer;
}
li.selected {
  color: hsl(var(--active-color-btn), var(--color-lightness));
}
li:hover {
  background-color: var(--main-bg-color-secondary);
}
</style>
