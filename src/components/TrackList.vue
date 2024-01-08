<script lang="ts">
import { defineComponent, computed, ComputedRef, watch } from 'vue'
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
        const indexSlice: number | undefined =
          process.env.NODE_ENV === 'production'
            ? item?.lastIndexOf('.') - 9
            : item?.lastIndexOf('.')
        return (item && item.substring(indexLastSlash + 1, indexSlice)) || ''
      })
    })

    // watch(props.currentTrackIndex, (index) => {
    //   console.log(this.$refs?.sidebar, index)
    // })

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
    <ul ref="sidebar" class="sidebar" @click.stop>
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
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 2;
  list-style-type: none;
  margin: 0;
  padding: 10px 5px;
  text-align: start;
}
li {
  margin-bottom: 5px;
  cursor: pointer;
}
li.selected {
  background-color: rgb(0 22 255 / 30%);
}
li:hover {
  background-color: rgb(0 22 255 / 10%);
}
</style>
