import { ActionType } from "typesafe-actions"

import * as actions from "./actions"

export type TimeStop = {
  milliseconds: number
  startNow: number
  isRunning: boolean
  labs: number[]
}

export type Timer = {
  milliseconds: number
  resetMilliseconds: number
  isRunning: boolean
  /** src 경로 */
  audio: string
  audioRunning: boolean
}

export type TimerTime = "hour" | "minute" | "second"
export type CalType = "add" | "minus"

export const TIME_STOP_START = "time/TIME_STOP_START"
export const TIME_STOP_STOP = "time/TIME_STOP_STOP"
export const TIME_STOP_RESET = "time/TIME_STOP_RESET"
export const TIME_STOP_TICK = "time/TIME_STOP_TICK"
export const TIME_STOP_LAB = "time/TIME_STOP_LAB"

export const TIMER_START = "time/TIMER_START"
export const TIMER_TICK = "time/TIMER_TICK"
export const TIMER_STOP = "time/TIMER_STOP"
export const TIMER_RESET = "time/TIMER_RESET"
export const TIMER_EDIT = "time/TIMER_EDIT"
export const TIMER_RESET_EDIT = "time/TIMER_RESET_EDIT"
export const TIMER_AUDIO_EDIT = "time/TIMER_AUDIO_EDIT"
export const TIMER_AUDIO_START = "time/TIMER_AUDIO_START"

export type TimeState = {
  timer: Timer
  timeStop: TimeStop
}

export type TimeAction = ActionType<typeof actions>
