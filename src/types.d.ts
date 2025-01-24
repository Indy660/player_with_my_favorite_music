interface TrackList {
  songName: string
  sort?: number
  bestParties?: BestParties[]
  notAggressive?: boolean
}
interface BestParties {
  start: number
  end: number
}

interface TabsOption {
  label: string
  id: number
  url: string
}

type SongsText = {
  [key: string]: string
}
type SongTextWithTimeCode = {
  seconds: number
  lyrics: string
}
type SongTextWithTimeCodeAssemblyAi = {
  text: string
  start: number
  end: number
  confidence: number
  speaker: null
}
