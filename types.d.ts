import { Audio, AVPlaybackStatus } from 'expo-av'

export interface Itheme {
  name: string
  color: string
  select: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
  backgroundColorSecondary: string
}

export type IthemeType = 'light' | 'dark'

export type Inavigation = {
  Home: undefined
  Settings: undefined
}

export interface Iaudio {
  name: string
  duration: number
  localization: string
}

interface Iplayer {
  sound: Audio.Sound
  status: AVPlaybackStatus
}

interface IaudioPlayed {
  audio: Iaudio
  player: 'default' | 'non-default'
}