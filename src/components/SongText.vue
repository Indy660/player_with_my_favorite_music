<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { ComputedRef } from 'vue'
export default defineComponent({
  props: {
    songText: {
      type: [Object, String],
      default: ''
    },
    currentTime: {
      type: Number,
      default: 0
    }
  },
  emits: ['time-change'],
  setup(props, { emit }) {
    function goToText(time: number): void {
      emit('time-change', time - 0.5)
    }
    // TODO: songTextWithMusicSymbol
    // TODO: переключение по инпуту трека закрывает этот компонент
    // TODO: сделать два таба для разных видов текстов

    // const songTextWithMusicSymbol: ComputedRef<SongTextProp> = computed(() => {
    //

    // TODO:
    // Are You Dead Yet
    // Clayman
    // Wasteland Discotheque
    // Nothing Left
    // Fucking Perfect
    return { goToText }
  }
})
</script>

<template>
  <div class="sidebar" @click.stop>
    <span v-show="typeof songText === 'string'" v-text="songText" />
    <div v-show="typeof songText === 'object'" class="text-with-timestamps">
      {{ currentTime }}
      <!--      currentTime < songText[key - 1]?.seconds ||-->
      <span
        v-for="(partSong, key) in songText"
        :key="key"
        :class="{
          selected:
            currentTime >= partSong.seconds - 1 &&
            (currentTime < songText[key + 1]?.seconds || key === Object.keys(songText).length - 1)
        }"
        @click="goToText(partSong.seconds)"
        v-html="'\n' + partSong.seconds + ' ' + partSong.lyrics + '\n'"
      />
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
  /*transition: none;*/
}

.sidebar span {
  white-space: break-spaces;
}

.text-with-timestamps span {
  opacity: 0.6;
  cursor: pointer;
}

.text-with-timestamps span.selected {
  opacity: 1;
}
</style>
