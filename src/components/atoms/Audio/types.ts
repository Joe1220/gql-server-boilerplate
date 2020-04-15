import { RefObject } from "react"

type OnEnded = (replay: any) => void

export type IAudio = {
  onEnded?: OnEnded
  src: string
  ref?: RefObject<HTMLAudioElement>
}

export type AudioHookParams = {
  value?: string
  counting?: number
  handleOnEndedEvent?: () => void
}
