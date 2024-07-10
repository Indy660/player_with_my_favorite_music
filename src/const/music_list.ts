import musicList from '../static_data/music_list.json'
interface MusicList {
  songName: Required<string>
  sort?: number
  bestParties?: BestParties[]
  notAggressive?: boolean
}

const sortMusicList: MusicList[] = musicList.sort((a, b) => a.songName.localeCompare(b.songName))

export { sortMusicList as MUSIC_LIST }
