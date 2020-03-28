import { RefObject } from "react"

type OnEnded = (replay: any) => void

export type IAudio = {
  onEnded?: OnEnded
  src: string
  ref?: RefObject<HTMLAudioElement>
}
