import { ActionType } from "typesafe-actions"

import * as actions from "./actions"

export type TimeStop = {
  milliseconds: number
  startNow: number
  isRunning: boolean
  labs: number[]
}

export const TIME_STOP_START = "time/TIME_STOP_START"
export const TIME_STOP_STOP = "time/TIME_STOP_STOP"
export const TIME_STOP_RESET = "time/TIME_STOP_RESET"
export const TIME_STOP_TICK = "time/TIME_STOP_TICK"
export const TIME_STOP_LAB = "time/TIME_STOP_LAB"

export type TimeState = {
  timeStop: TimeStop
}

export type TimeAction = ActionType<typeof actions>
