import { IModalProps } from "src/components/molecules/Modal/types"
import { IAudio } from "src/components/atoms/Audio/types"

export type ITimerAudioModal = IModalProps &
  IAudio & {
    /** time module의 reset milliseconds state를 참조 */
    milliseconds: number
  }
