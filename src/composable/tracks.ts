import { MUSIC_LIST } from '../const/music_list'
import { TABS_OPTION } from '../const/tabs_otion'
import { onBeforeMount, ref, computed, watchEffect } from 'vue'
// import { useRouter } from 'vue-router'
//
// const router = useRouter()
// const route = useRoute()
import type { Ref, ComputedRef } from 'vue'

interface TopTrackList extends TrackList {
  sort: number
  bestParties: BestParties[]
}

interface NotAggressiveTrackList extends TrackList {
  notAggressive: boolean
}

export function tracksApi() {
  const defaultTrackList: Ref<TrackList[]> = ref(MUSIC_LIST)
  const topTrackList: Ref<TopTrackList[]> = ref(
    MUSIC_LIST.filter((item) => item.sort) as TopTrackList[]
  )
  const notAggressiveTrackList: Ref<NotAggressiveTrackList[]> = ref(
    MUSIC_LIST.filter((item) => item.notAggressive) as NotAggressiveTrackList[]
  )
  // as NotAggressiveTrackList[]
  const currentTrackIndex: Ref<number> = ref(0)
  const totalNumbSongs: Ref<number> = ref(0)
  onBeforeMount(() => {
    defaultTrackList.value = MUSIC_LIST
    // TODO: хз на что ругается
    totalNumbSongs.value = currentTracksList.value.length
  })

  const pathToCurrentFile: ComputedRef<string> = computed(() => {
    console.log(import.meta.env)
    // console.log(process.env)
    const basePath: string = import.meta.env.BASE_URL
    return currentTracksList.value[currentTrackIndex.value]
      ? `${basePath}music/${currentSong.value.songName}`
      : ``
  })

  const sortingTopTrackList: ComputedRef<TopTrackList[]> = computed(() => {
    return [...topTrackList.value].sort((a, b) => a.sort - b.sort)
  })

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

  function setTabAndIndex(query: string): void {
    const queryParts: Array<string> = query.split('&')
    if (queryParts.length === 2) {
      const tabUrl = queryParts[0].split('=')[1]
      const trackIndex = parseInt(queryParts[1].split('=')[1])
      const selectedTab: TabsOption | undefined = TABS_OPTION.find((tab) => tab.url === tabUrl)
      if (selectedTab) {
        tabSelected.value = selectedTab.id
        currentTrackIndex.value = !isNaN(trackIndex) ? trackIndex : 0
      }
    }
  }
  const updateValuesFromUrl = (): void => {
    const urlFromStorage: string | null = localStorage.getItem('url')
    urlFromStorage && setTabAndIndex(urlFromStorage)
  }
  updateValuesFromUrl()
  watchEffect(() => {
    const currentTab: TabsOption | undefined = TABS_OPTION.find(
      (tab) => tab.id === tabSelected.value
    )
    const tabUrl: string = currentTab ? currentTab.url : ''
    const trackUrl: string = currentTrackIndex.value.toString()
    const params: string = `${import.meta.env.BASE_URL}#tab=${tabUrl}&track=${trackUrl}`
    window.history.pushState({}, '', params)
    localStorage.setItem('url', params)
  })
  const tracksByTab: ComputedRef<TrackList[]> = computed(() => {
    switch (tabSelected.value) {
      case 1:
        return defaultTrackList.value
      case 2:
        return sortingTopTrackList.value
      case 3:
        return notAggressiveTrackList.value
      case 4:
        return sortingTopTrackList.value
      default:
        return []
    }
  })

  const bestParties: ComputedRef<BestParties[] | []> = computed(() => {
    return tabSelected.value === 4
      ? sortingTopTrackList.value[currentTrackIndex.value].bestParties
      : []
  })

  const currentTracks: ComputedRef<TrackList[]> = computed(() => {
    return isRandomTracks.value ? getRandomTracks() : tracksByTab.value
  })

  const currentTracksList: ComputedRef<string[]> = computed(() => {
    return currentTracks.value.map((item) => item.songName)
  })

  const currentSong: ComputedRef<TrackList> = computed(() => {
    return currentTracks.value[currentTrackIndex.value]
  })

  function getRandomTracks(): TrackList[] {
    return tracksByTab.value
      .map((value: TrackList) => ({ ...value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...rest }) => rest)
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
    tabSelected,
    isRandomTracks,
    handlerRandomBtn,
    currentTracks,
    currentTracksList,
    currentSong
  }
}
