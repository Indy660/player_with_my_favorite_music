<script lang="ts">
import { defineComponent, computed, ComputedRef, ref, Ref, watch, onMounted } from 'vue'
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
    onMounted(() => {
      if (selectedTrackRef.value) {
        scrollTo(selectedTrackRef)
      }
    })

    const sidebarRef = ref<HTMLElement | null>(null)
    const selectedTrackRef = ref<HTMLElement | null>(null)
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
        scrollTo(sidebarRef)
      }
    )

    // TODO: не работает скролл до текущего элемента
    function scrollTo(view: Ref<HTMLElement | null>) {
      const selected = view.value?.querySelector('.selected')
      // console.log(selected)
      selected?.scrollIntoView({ behavior: 'smooth' })
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
