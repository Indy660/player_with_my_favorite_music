<script lang="ts">
import { defineComponent, computed, nextTick, watch } from 'vue'
import type { ComputedRef } from 'vue'
export default defineComponent({
  props: {
    songText: {
      type: [Array, String],
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
    // TODO: очень часто но хз как
    watch(
      () => props.currentTime,
      () => {
        scrollTo()
      }
    )
    async function scrollTo() {
      await nextTick()
      const selected = document.querySelector('.song-text .selected')
      selected?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    // TODO: songTextWithMusicSymbol
    // TODO: переключение по инпуту трека закрывает этот компонент
    // TODO: сделать два таба для разных видов текстов

    const songTextWithMusicSymbol: ComputedRef<SongTextProp> = computed(() => {
      const result = []
      // https://www.compart.com/en/unicode/U+1F3B5
      if (Array.isArray(props.songText)) {
        props.songText.forEach((item, index) => {
          if (props.songText[index + 1].seconds - props.songText[index].seconds > 30) {
            result.push({
              seconds: props.songText[index].seconds + 3,
              lyrics: '&#127925'
            })
          }
          result.push({
            item
          })
        })
      }
      return result
    })

    // TODO:
    // Are You Dead Yet
    // Clayman
    // Wasteland Discotheque
    // Nothing Left
    // Fucking Perfect
    return { goToText, songTextWithMusicSymbol }
  }
})
</script>

<template>
  <div class="sidebar song-text" @click.stop>
    <span v-show="typeof songText === 'string'" v-text="songText" />
    <div v-show="Array.isArray(songText)" class="text-with-timestamps">
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
