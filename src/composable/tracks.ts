import { MUSIC_LIST } from '@/const/music_list'
import { computed, onBeforeMount, onMounted, ref, watch, watchEffect } from 'vue'

interface TopTrackList extends TrackList {
  sort: number
  bestParties: BestParties[]
}

interface NotAggressiveTrackList extends TrackList {
  notAggressive: boolean
}

function isTopTrackList(item: TrackList): item is TopTrackList {
  return typeof item.sort === 'number' && item.bestParties !== undefined
}

function isNotAggressiveTrackList(item: TrackList): item is NotAggressiveTrackList {
  return typeof item.notAggressive === 'boolean'
}

const TABS_OPTION: TabsOption[] = [
  { label: 'All music', id: 1, url: 'all' },
  { label: 'Top', id: 2, url: 'top' },
  { label: 'Top Shorts', id: 4, url: 'shorts' },
  { label: 'Not aggressive', id: 3, url: 'not_aggressive' },
  { label: 'Favorite', id: 5, url: 'favorite' }
  // { label: 'Ai', id: 6, url: 'ai' }
]
const favoriteSongs = ref<string[]>([])
const totalNumbSongs = ref(0)
const isRandomTracks = ref(false)

// import SONGS_TEXT_WITH_TIMECODES_ASSEMBLY_AI from '@/static_data/songs_text_with_timecodes_assembly_ai.json'

export function tracksApi() {
  const defaultTrackList = ref<TrackList[]>(MUSIC_LIST)
  const topTrackList = ref<TopTrackList[]>(MUSIC_LIST.filter(isTopTrackList))
  const notAggressiveTrackList = ref<NotAggressiveTrackList[]>(
    MUSIC_LIST.filter(isNotAggressiveTrackList)
  )
  // const aiTrackList = ref(
  //   MUSIC_LIST.filter(item => SONGS_TEXT_WITH_TIMECODES_ASSEMBLY_AI[item.songName]?.length)
  // )
  // console.log(aiTrackList)
  // const topTrackList = ref<TopTrackList[]>(MUSIC_LIST.filter((item) => item.sort) as TopTrackList[])
  // const notAggressiveTrackList = ref<NotAggressiveTrackList[]>(
  //   MUSIC_LIST.filter((item) => item.notAggressive) as NotAggressiveTrackList[]
  // )

  const currentTrackIndex = ref(0)
  onBeforeMount(() => {
    defaultTrackList.value = MUSIC_LIST
    totalNumbSongs.value = currentTracksList.value.length
    getFavoriteSongsFromLocalStorage()
  })

  const pathToCurrentFile = computed(() => {
    const basePath: string = import.meta.env.BASE_URL
    return currentTracksList.value[currentTrackIndex.value]
      ? `${basePath}music/${currentSong.value}`
      : ``
  })

  const sortingTopTrackList = computed<TopTrackList[]>(() => {
    return [...topTrackList.value].sort((a, b) => a.sort - b.sort)
  })

  const tabSelected = ref(1)

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
    const queryParts = new URLSearchParams(query.replace(/^#/, ''))
    const tabUrl = queryParts.get('tab')
    const trackIndex = parseInt(queryParts.get('track') || '0')

    const selectedTab = TABS_OPTION.find((tab) => tab.url === tabUrl)
    if (selectedTab) {
      tabSelected.value = selectedTab.id
      currentTrackIndex.value = !isNaN(trackIndex) ? trackIndex : 0
    }
  }

  const updateValuesFromUrl = (): void => {
    const urlFromStorage = window.location.hash
    urlFromStorage && setTabAndIndex(urlFromStorage)
  }
  updateValuesFromUrl()

  watchEffect(() => {
    const currentTab = TABS_OPTION.find((tab) => tab.id === tabSelected.value)
    const tabUrl = currentTab ? currentTab.url : ''
    const trackUrl = currentTrackIndex.value.toString()
    console.log('tabUrl', tabUrl, 'trackUrl', trackUrl)

    const currentHash = window.location.hash.slice(1)
    const hashParams = new URLSearchParams(currentHash)

    const previousTab = hashParams.get('tab')
    const previousTrack = hashParams.get('track')

    hashParams.set('tab', tabUrl)
    hashParams.set('track', trackUrl)

    const hasTabChanged = previousTab !== tabUrl
    const hasTrackChanged = previousTrack !== trackUrl

    // Если вышли из вкладки short или переключили трек — удаляем bestPart
    if (tabSelected.value !== 4 || hasTrackChanged || hasTabChanged) {
      hashParams.delete('bestPart')
    }

    const newHash = hashParams.toString()
    window.history.pushState({}, '', `${window.location.pathname}#${newHash}`)
  })
  const tracksByTab = computed<TrackList[]>(() => {
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
      // case 6:
      //   return aiTrackList.value
      default:
        return []
    }
  })
  const tracksByTabForFavorite = computed<TrackList[]>(() => {
    return defaultTrackList.value.filter((item) => favoriteSongs.value.includes(item.songName))
  })

  const TabsOptionRender = computed<TabsOption[]>(() => {
    return tracksByTabForFavorite.value.length
      ? TABS_OPTION
      : TABS_OPTION.filter((tab) => tab.id !== 5)
  })

  const bestParties = computed<BestParties[] | []>(() => {
    return tabSelected.value === 4
      ? sortingTopTrackList.value[currentTrackIndex.value].bestParties || [{ start: 0, end: 30 }]
      : []
  })

  const currentTracks = computed<TrackList[]>(() => {
    return isRandomTracks.value ? getRandomTracks() : tracksByTab.value
  })

  const currentTracksList = computed<string[]>(() => {
    return currentTracks.value.map((item) => item.songName)
  })

  const currentSong = computed(() => {
    return currentTracksList.value[currentTrackIndex.value]
  })

  function getRandomTracks(): TrackList[] {
    return tracksByTab.value
      .map((value: TrackList) => ({ ...value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
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
    const findingSongIndex = favoriteSongs.value.findIndex((item) => item === currentSong.value)
    if (findingSongIndex >= 0) {
      favoriteSongs.value.splice(findingSongIndex, 1)
      if (!favoriteSongs.value.length) {
        tabSelected.value = 1
      }
    } else {
      favoriteSongs.value.push(currentSong.value)
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
