import { MUSIC_LIST } from '../const/music_list'
import type { ComputedRef, Ref } from 'vue'
import { computed, onBeforeMount, ref, watchEffect } from 'vue'

interface TopTrackList extends TrackList {
  sort: number
  bestParties: BestParties[]
}

interface NotAggressiveTrackList extends TrackList {
  notAggressive: boolean
}

const TABS_OPTION: TabsOption[] = [
  { label: 'All music', id: 1, url: 'all' },
  { label: 'Top', id: 2, url: 'top' },
  { label: 'Top Shorts', id: 4, url: 'shorts' },
  { label: 'Not aggressive', id: 3, url: 'not_aggressive' },
  { label: 'Favorite', id: 5, url: 'favorite' }
]
const favoriteSongs: Ref<Array<string>> = ref([])
const totalNumbSongs: Ref<number> = ref(0)
const isRandomTracks: Ref<boolean> = ref(false)

export function tracksApi() {
  const defaultTrackList: Ref<TrackList[]> = ref(MUSIC_LIST)
  const topTrackList: Ref<TopTrackList[]> = ref(
    MUSIC_LIST.filter((item) => item.sort) as TopTrackList[]
  )
  const notAggressiveTrackList: Ref<NotAggressiveTrackList[]> = ref(
    MUSIC_LIST.filter((item) => item.notAggressive) as NotAggressiveTrackList[]
  )
  const currentTrackIndex: Ref<number> = ref(0)
  onBeforeMount(() => {
    defaultTrackList.value = MUSIC_LIST
    totalNumbSongs.value = currentTracksList.value.length
    getFavoriteSongsFromLocalStorage()
  })

  const pathToCurrentFile: ComputedRef<string> = computed(() => {
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
    const urlFromStorage = window.location.hash
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
      case 5:
        return tracksByTabForFavorite.value
      default:
        return []
    }
  })
  const tracksByTabForFavorite: ComputedRef<TrackList[]> = computed(() => {
    return defaultTrackList.value.filter((item) => favoriteSongs.value.includes(item.songName))
  })

  const TabsOptionRender: ComputedRef<TabsOption[]> = computed(() => {
    return tracksByTabForFavorite.value.length
      ? TABS_OPTION
      : TABS_OPTION.slice(0, TABS_OPTION.length - 1)
  })

  const bestParties: ComputedRef<BestParties[] | []> = computed(() => {
    return tabSelected.value === 4
      ? sortingTopTrackList.value[currentTrackIndex.value]?.bestParties || [{ start: 0, end: 30 }]
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
    console.log('nextTrack')
    currentTrackIndex.value =
      currentTrackIndex.value >= currentTracks.value.length - 1 ? 0 : currentTrackIndex.value + 1
  }

  function previousTrack(): void {
    // console.log(
    //   'previousTrack',
    //   currentTrackIndex.value,
    //   currentTrackIndex.value <= 0,
    //   currentTrackIndex.value - 1
    // )
    // TODO: странный баг на http://127.0.0.1:5000/#tab=shorts&track=11, не переключает трек, только если не на стопе
    // http://127.0.0.1:5000/#tab=shorts&track=23
    currentTrackIndex.value =
      currentTrackIndex.value <= 0 ? currentTracks.value.length - 1 : currentTrackIndex.value - 1
  }

  function selectTrack(trackIndex: number): void {
    currentTrackIndex.value = trackIndex
  }

  function handlerRandomBtn(): void {
    isRandomTracks.value = !isRandomTracks.value
  }

  function getFavoriteSongsFromLocalStorage(): void {
    const raw: string | null = localStorage.getItem('favoriteSongs')
    raw && (favoriteSongs.value = JSON.parse(raw))
  }

  function setFavoriteSongsFromLocalStorage(): void {
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs.value.slice(0)))
  }

  function handleAddFavoriteSongBtn(): void {
    const song: TrackList = currentSong.value
    const findingSongIndex = favoriteSongs.value.findIndex((item) => item === song.songName)
    if (findingSongIndex >= 0) {
      favoriteSongs.value.splice(findingSongIndex, 1)
      if (!favoriteSongs.value.length) {
        tabSelected.value = 1
      }
    } else {
      favoriteSongs.value.push(song.songName)
    }
    setFavoriteSongsFromLocalStorage()
  }

  return {
    totalNumbSongs,
    defaultTrackList,
    topTrackList,
    bestParties,
    nextTrack,
    previousTrack,
    pathToCurrentFile,
    currentTrackIndex,
    changeTab,
    selectTrack,
    tabSelected,
    isRandomTracks,
    handlerRandomBtn,
    currentTracks,
    currentTracksList,
    currentSong,
    handleAddFavoriteSongBtn,
    favoriteSongs,
    TabsOptionRender
  }
}
