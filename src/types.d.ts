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

interface EqualizerBand {
  frequency: number
  label: string
  gain: number
}

interface EqualizerPreset {
  id: string
  name: string
  gains: number[]
  disabled?: boolean
}

interface EqualizerSettings {
  bands: EqualizerBand[]
  preset: string
  timestamp?: number
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
