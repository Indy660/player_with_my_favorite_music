<script lang="ts" setup>
import { computed, watch, ref, watchEffect } from 'vue'

interface Props {
  songText: string
  songTextWithTimecodes: SongTextWithTimeCode[]
  songTextWithTimecodesAssemblyAi: SongTextWithTimeCodeAssemblyAi[]
  currentTime: number
}

const props = defineProps<Props>()
const emit = defineEmits(['time-change'])

type TabsOption = {
  label: string
  id: number
  available: boolean
}
const tabsOption = computed<TabsOption[]>(() => {
  return [
    {
      label: 'Timecodes',
      id: 1,
      available: Boolean(props.songTextWithTimecodes.length)
    },
    { label: 'Raw', id: 2, available: Boolean(props.songText.length) },
    {
      label: 'Assembly AI',
      id: 3,
      available: Boolean(props.songTextWithTimecodesAssemblyAi.length)
    }
  ]
})
const idTabSelected = ref(1)
function goToText(time: number): void {
  emit('time-change', time - 0.5)
}
watchEffect(() => {
  if (!props.songText.length && props.songTextWithTimecodes.length) {
    idTabSelected.value = 1
  }
  if (!props.songTextWithTimecodes.length && props.songText.length) {
    idTabSelected.value = 2
  }
  // TODO: поправить
  if (!props.songTextWithTimecodesAssemblyAi.length && props.songText.length) {
    idTabSelected.value = 2
  }
})

// TODO: переключение по инпуту трека закрывает этот компонент
const songTextWithTimecodesAndSymbols = computed<SongTextWithTimeCode[]>(() => {
  const result: SongTextWithTimeCode[] = []
  props.songTextWithTimecodes.forEach((item, index) => {
    if (
      props.songTextWithTimecodes?.[index + 1]?.seconds &&
      Number(
        props.songTextWithTimecodes[index + 1].seconds - props.songTextWithTimecodes[index].seconds
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

const indexPlayingPartTimeCode = computed(() => {
  if (props.songTextWithTimecodes.length) {
    // если текущее время выходит за длину текста
    if (
      props.currentTime >=
      songTextWithTimecodesAndSymbols.value[songTextWithTimecodesAndSymbols.value.length - 1]
        .seconds
    ) {
      return songTextWithTimecodesAndSymbols.value.length - 1
    }
    const index = songTextWithTimecodesAndSymbols.value?.findIndex((partSong, index, array) => {
      return (
        props.currentTime >= partSong.seconds - 1 && props.currentTime < array?.[index + 1]?.seconds
      )
    })
    return index > 0 ? index : 0
  }
  return 0
})

const songTextWithTimecodesAndSymbolsAssemblyAi = computed<SongTextWithTimeCodeAssemblyAi[]>(() => {
  const result: SongTextWithTimeCodeAssemblyAi[] = []
  props.songTextWithTimecodesAssemblyAi.forEach((item, index) => {
    if (
      props.songTextWithTimecodesAssemblyAi?.[index + 1]?.end &&
      Number(
        props.songTextWithTimecodesAssemblyAi[index + 1].start -
        props.songTextWithTimecodesAssemblyAi[index].end
      ) > 5
    ) {
      result.push(item)
      result.push({
        text: '<br/>',
        start: props.songTextWithTimecodesAssemblyAi[index].end + 0.3,
        end: props.songTextWithTimecodesAssemblyAi[index + 1].start - 0.3,
        confidence: 100,
        speaker: null
      })
    } else {
      result.push(item)
    }
  })

  return result
  // return props.songTextWithTimecodesAssemblyAi
})

type songTextWithTimecodesAndSymbolsAssemblyAiLines = SongTextWithTimeCode & { index: number }

const songTextWithTimecodesAndSymbolsAssemblyAiLines = computed<
  [songTextWithTimecodesAndSymbolsAssemblyAiLines[]]
>(() => {
  const timeToNextLine = 0.1
  return songTextWithTimecodesAndSymbolsAssemblyAi.value.reduce(
    (acc, curr, index) => {
      let lastElement = acc[acc.length - 1]
      if (curr.start - lastElement[lastElement.length - 1]?.end > timeToNextLine) {
        acc.push([])
        lastElement = acc[acc.length - 1]
      }
      curr.index = index
      if (curr?.text) {
        if (curr?.confidence <= 0.3) {
          curr.text = `${curr.text}*`
        }
        curr.text = `${curr.text} `
      }
      lastElement.push(curr)
      return acc
    },
    [[]]
  )
})

const indexPlayingPartTimeCodeAssemblyAi = computed(() => {
  if (props.songTextWithTimecodesAssemblyAi.length) {
    // если текущее время выходит за длину текста
    if (
      props.currentTime >=
      songTextWithTimecodesAndSymbolsAssemblyAi.value[
        songTextWithTimecodesAndSymbolsAssemblyAi.value.length - 1
      ].start
    ) {
      return songTextWithTimecodesAndSymbolsAssemblyAi.value.length - 1
    }
    const index = songTextWithTimecodesAndSymbolsAssemblyAi.value?.findIndex(
      (partSong, index, array) => {
        return (
          props.currentTime >= partSong.start - 1 && props.currentTime < array?.[index + 1]?.start
        )
      }
    )
    return index > 0 ? index : 0
  }
  return 0
})

watchEffect(() => {
  if (
    (indexPlayingPartTimeCode.value || props.songTextWithTimecodes.length) &&
    idTabSelected.value === 1
  ) {
    scrollToTimeCode()
  }
})
watch(
  () => props.songText,
  () => {
    if (props.songText?.length && idTabSelected.value === 2) scrollToTop()
  }
)
function scrollToTimeCode() {
  const selectedSongText = document.querySelector('.song-text .selected')
  selectedSongText?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function scrollToTop() {
  const songTextBlock = document.querySelector('.song-text .raw')
  songTextBlock?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function btnHandler(option: TabsOption): void {
  option.available && (idTabSelected.value = option.id)
}
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
      <div v-show="idTabSelected === 1" class="text-with-timestamps">
        <span
          v-for="(partSong, key) in songTextWithTimecodesAndSymbols"
          :key="key"
          :class="{
            selected: key === indexPlayingPartTimeCode
          }"
          @click="goToText(partSong.seconds)"
          v-html="`\n${partSong.seconds} ${partSong.lyrics}\n`"
        />
      </div>
      <span v-show="idTabSelected === 2" class="raw" v-html="songText" />
      <div v-show="idTabSelected === 3" class="text-with-timestamps">
        {{ currentTime }}
        {{ indexPlayingPartTimeCodeAssemblyAi }}
        <span> 0.3 or less confidence word marked with *</span>
        <br />
        <br />
        <div v-for="(line, key) in songTextWithTimecodesAndSymbolsAssemblyAiLines" :key="key">
          <span
            v-for="(partSong, key2) in line"
            :key="key2"
            :class="{
              selected: partSong.index === indexPlayingPartTimeCodeAssemblyAi
            }"
            @click="goToText(partSong.start)"
            v-html="`${partSong.text}`"
          >
          </span>
          <br />
        </div>
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.tabs {
  border-bottom: 1px solid;
  border-bottom-color: var(--main-color);
  z-index: 2;
  padding: 10px;
  background-color: var(--main-bg-color);
}

.song-text {
  height: 100%;
  overflow-y: auto;
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
