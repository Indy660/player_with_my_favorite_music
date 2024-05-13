<script lang="ts">
import { defineComponent, computed, nextTick, watch, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
export default defineComponent({
  props: {
    songText: {
      type: String,
      default: ''
    },
    songTextWithTimecodes: {
      type: Array,
      default: () => []
    },
    currentTime: {
      type: Number,
      default: 0
    }
  },
  emits: ['time-change'],
  setup(props, { emit }) {
    type TabsOption = {
      label: string
      id: number
      available: boolean
    }
    const tabsOption: ComputedRef<TabsOption[]> = computed(() => {
      return [
        {
          label: 'Timecodes',
          id: 1,
          available: Boolean(props.songTextWithTimecodes.length)
        },
        { label: 'Raw', id: 2, available: Boolean(props.songText.length) }
      ]
    })
    const idTabSelected: Ref<number> = ref(1)
    function goToText(time: number): void {
      emit('time-change', time - 0.5)
    }
    watch(
      () => props.songText,
      () => {
        if (!props.songText.length && props.songTextWithTimecodes.length) {
          idTabSelected.value = 1
        }
        if (!props.songTextWithTimecodes.length && props.songText.length) {
          idTabSelected.value = 2
        }
      },
      { immediate: true }
    )

    // TODO: переключение по инпуту трека закрывает этот компонент
    const songTextWithMusicSymbol: ComputedRef<SongTextWithTimeCode[]> = computed(() => {
      const result: SongTextWithTimeCode[] = []
      // https://www.compart.com/en/unicode/U+1F3B5
      // TODO: поправить тайпскрипт
      ;(props.songTextWithTimecodes as SongTextWithTimeCode[]).forEach((item, index) => {
        if (
          props.songTextWithTimecodes?.[index + 1]?.seconds &&
          Number(
            props.songTextWithTimecodes[index + 1].seconds -
              props.songTextWithTimecodes[index].seconds
          ) > 20
        ) {
          result.push(item)
          result.push({
            seconds: props.songTextWithTimecodes[index].seconds + 3,
            lyrics: '&#127925'
          })
        } else {
          result.push(item)
        }
      })

      return result
    })

    const indexPlayingPartTimeCode: ComputedRef<number> = computed(() => {
      if (props.songTextWithTimecodes.length) {
        const findIndex = songTextWithMusicSymbol.value?.findIndex((partSong, index, array) => {
          return (
            props.currentTime >= partSong.seconds - 1 &&
            props.currentTime < array?.[index + 1]?.seconds
          )
        })
        return findIndex >= 0 ? findIndex : Object.keys(songTextWithMusicSymbol.value).length - 1
      }
      return 0
    })
    watch(
      () => indexPlayingPartTimeCode.value,
      () => {
        scrollTo()
      }
    )
    async function scrollTo() {
      await nextTick()
      const selected = document.querySelector('.song-text .selected')
      selected?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    function btnHandler(option: TabsOption): void {
      option.available && (idTabSelected.value = option.id)
    }

    // TODO:
    // As I Lay Dying - Nothing Left [2007] - проблемы, каждый раз при перемотке разное время
    // Are You Dead Yet
    // Clayman
    // Wasteland Discotheque
    // Fucking Perfect
    return {
      goToText,
      songTextWithMusicSymbol,
      tabsOption,
      idTabSelected,
      btnHandler,
      indexPlayingPartTimeCode
    }
  }
})
</script>

<template>
  <div class="sidebar" @click.stop>
    <div class="tabs">
      <button
        v-for="option in tabsOption"
        :key="option.id"
        :class="{ active: option.id === idTabSelected, disabled: !option.available }"
        @click.stop="btnHandler(option)"
      >
        {{ option.label }}
      </button>
    </div>
    <div class="song-text">
      <span v-show="idTabSelected === 2" v-text="songText" />
      <div v-show="idTabSelected === 1" class="text-with-timestamps">
        {{ currentTime }}
        <span
          v-for="(partSong, key) in songTextWithMusicSymbol"
          :key="key"
          :class="{
            selected: key === indexPlayingPartTimeCode
          }"
          @click="goToText(partSong.seconds)"
          v-html="`\n${partSong.seconds} ${partSong.lyrics}\n`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--main-bg-color);
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0 5px 10px;
  text-align: start;
  overflow-y: auto;
}

.tabs {
  position: sticky;
  top: 0;
  border-bottom: 1px solid;
  border-bottom-color: var(--main-color);
  z-index: 2;
  padding: 10px;
  background-color: var(--main-bg-color);
}

.song-text {
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
