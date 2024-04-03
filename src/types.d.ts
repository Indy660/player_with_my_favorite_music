interface TrackList {
  songName: Required<string>
  sort?: number
  bestParties?: BestParties[]
  hasText?: boolean
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
