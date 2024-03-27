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
      return props.currentTracks?.map((item) => {
        const indexLastSlash: number | undefined = item.lastIndexOf('/')
        const indexSlice: number | undefined = item?.lastIndexOf('.')
        return (item && item.substring(indexLastSlash + 1, indexSlice)) || ''
      })
    })

    watch(
      () => props.currentTrackIndex,
      () => {
        scrollTo()
      }
    )
    async function scrollTo() {
      await nextTick()
      const selected = document.querySelector('.selected')
      selected?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    function selectTrackFromList(trackIndex: number) {
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
  <div>
    <ul ref="sidebarRef" class="sidebar" @click.stop>
      <li
        v-for="(track, index) in currentTracksWithCorrectNames"
        :key="index"
        :class="{ selected: index === currentTrackIndex }"
        @click="selectTrackFromList(index)"
      >
        {{ index + 1 }}. {{ track }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--main-bg-color);
  width: 100%;
  height: 100%;
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
  background-color: var(--main-bg-color-secondary);
}
li:hover {
  background-color: rgb(0 22 255 / 10%);
}
</style>
