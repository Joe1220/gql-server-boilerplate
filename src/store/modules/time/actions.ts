import { deprecated } from "typesafe-actions"

import {
  TIME_STOP_START,
  TIME_STOP_RESET,
  TIME_STOP_TICK,
  TIME_STOP_STOP,
  TIME_STOP_LAB
} from "./types"
const { createStandardAction } = deprecated

export const timeStopStart = createStandardAction(TIME_STOP_START)<void>()
export const timeStopStop = createStandardAction(TIME_STOP_STOP)<void>()
export const timeStopReset = createStandardAction(TIME_STOP_RESET)<void>()
export const timeStopTick = createStandardAction(TIME_STOP_TICK)<number>()
export const timeStopLab = createStandardAction(TIME_STOP_LAB)<void>()
