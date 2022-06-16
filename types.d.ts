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
  localization: string
}