import { MUSIC_LIST } from '../const/music_list'
import { onBeforeMount, ref, computed, watchEffect } from 'vue'
import type { Ref, ComputedRef } from 'vue'
interface TrackList {
  songName: string
}

interface TopTrackList extends TrackList {
  sort: number
  bestParties: BestParties[]
}

interface NotAggressiveTrackList extends TrackList {
  notAggressive: number
}

// interface BestPartieseTrackList extends TrackList {
//   bestParties: BestParties[]
// }

interface TabsOption {
  label: string
  id: number
  url: string
}

// const BASE_URL = import.meta.env.VITE_BASE_URL
// console.log(BASE_URL, import.meta.env)
// TopTrack
export function tracksApi() {
  // const test: Ref<TopTrackList[]> = ref([{ songName: 'fsdf', sort: 3, bestParties: 2 }])
  const defaultTrackList: Ref<TrackList[]> = ref([])
  const topTrackList: Ref<TopTrackList[]> = ref([])
  const notAggressiveTrackList: Ref<NotAggressiveTrackList[]> = ref([])
  // const bestPartiesTrackList: Ref<BestPartieseTrackList[]> = ref([])
  const currentTrackIndex: Ref<number> = ref(0)
  const totalNumbSongs: Ref<number> = ref(0)
  onBeforeMount(() => {
    defaultTrackList.value = MUSIC_LIST
    // TODO: хз на что ругается
    topTrackList.value = MUSIC_LIST.filter((item) => item.sort)
    notAggressiveTrackList.value = MUSIC_LIST.filter((item) => item.notAggressive)
    // bestPartiesTrackList.value = MUSIC_LIST.filter((item) => item.bestParties)
    totalNumbSongs.value = currentTracks.value.length
  })

  const pathToCurrentFile: ComputedRef<string> = computed(() => {
    // TODO: не работает
    // const basePath = BASE_URL
    // const basePath = import.meta.env.DEV ? '/' : BASE_URL
    // const basePath = import.meta.env.DEV ? '' : BASE_URL
    // console.log('basePath', basePath, process.env.NODE_ENV, BASE_URL)
    // TODO: как вынести /player_with_my_favorite_music/, чтобы потом везде использовалось
    const basePath: string = import.meta.env.DEV ? '/' : '/player_with_my_favorite_music/'
    return currentTracks.value[currentTrackIndex.value]
      ? `${basePath}music/${currentTracks.value[currentTrackIndex.value]}`
      : ``
  })

  const sortingTopTrackList: ComputedRef<TopTrackList[]> = computed(() => {
    return [...topTrackList.value].sort((a, b) => a.sort - b.sort)
  })

  const tabsOption: TabsOption[] = [
    { label: 'All music', id: 1, url: 'all' },
    { label: 'Top', id: 2, url: 'top' },
    { label: 'Top Shorts', id: 4, url: 'shorts' },
    { label: 'Not aggressive', id: 3, url: 'not_aggressive' }
  ]
  const tabSelected: Ref<number> = ref(1)
  function changeTab(option: TabsOption): void {
    if (
      !(tabSelected.value === 4 && option.id === 2) &&
      !(tabSelected.value === 2 && option.id === 4)
    ) {
      currentTrackIndex.value = 0
    }
    tabSelected.value = option.id
    totalNumbSongs.value = currentTracks.value.length
  }

  // Метод для обновления значений по URL
  const updateValuesFromUrl = () => {
    // TODO: в github ломает при обновлении
    // const queryParts = window.location.pathname.split('&')
    // if (queryParts.length === 2) {
    //   const tabUrl = queryParts[0].split('=')[1]
    //   const trackIndex = parseInt(queryParts[1].split('=')[1])
    //   const selectedTab = tabsOption.find((tab) => tab.url === tabUrl)
    //   if (selectedTab) {
    //     tabSelected.value = selectedTab.id
    //     currentTrackIndex.value = !isNaN(trackIndex) ? trackIndex : 0
    //   }
    // }
  }
  updateValuesFromUrl()
  // TODO: в github ломает при обновлении, нужно добавить ? вместо /
  watchEffect(() => {
    // const currentTab = tabsOption.find((tab) => tab.id === tabSelected.value)
    // const tabUrl = currentTab ? currentTab.url : ''
    // const trackUrl = currentTrackIndex.value.toString()
    // const params = new URLSearchParams(`tab=${tabUrl}&track=${trackUrl}`)
    // window.history.pushState({}, '', params)
  })

  const tracksByTab: ComputedRef<string[]> = computed(() => {
    const returnSongName = (arr: TrackList[]): string[] => arr.map((item) => item.songName)
    switch (tabSelected.value) {
      case 1:
        return returnSongName(defaultTrackList.value)
      case 2:
        return returnSongName(sortingTopTrackList.value)
      case 3:
        return returnSongName(notAggressiveTrackList.value)
      case 4:
        return returnSongName(sortingTopTrackList.value)
      default:
        return []
    }
  })

  const bestParties: ComputedRef<BestParties[] | []> = computed(() => {
    return tabSelected.value === 4
      ? sortingTopTrackList.value[currentTrackIndex.value].bestParties
      : []
  })

  const currentTracks: ComputedRef<string[]> = computed(() => {
    return isRandomTracks.value ? getRandomTracks() : tracksByTab.value
  })

  function getRandomTracks(): string[] {
    return tracksByTab.value
      .map((value: string) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  function nextTrack(): void {
    currentTrackIndex.value += 1
    if (currentTrackIndex.value >= currentTracks.value.length) {
      currentTrackIndex.value = 0
    }
  }

  function previousTrack(): void {
    currentTrackIndex.value =
      (currentTrackIndex.value - 1 + currentTracks.value.length) % currentTracks.value.length
  }

  function selectTrack(trackIndex: number): void {
    currentTrackIndex.value = trackIndex
  }

  const isRandomTracks: Ref<boolean> = ref(false)
  function handlerRandomBtn(): void {
    isRandomTracks.value = !isRandomTracks.value
  }

  return {
    totalNumbSongs,
    defaultTrackList,
    topTrackList,
    bestParties,
    nextTrack,
    previousTrack,
    pathToCurrentFile,
    sortingTopTrackList,
    currentTrackIndex,
    changeTab,
    selectTrack,
    tabsOption,
    tabSelected,
    isRandomTracks,
    handlerRandomBtn,
    currentTracks
  }
}
