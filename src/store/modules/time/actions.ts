import { deprecated } from "typesafe-actions"
import { TIMER_AUDIO_EDIT } from "./types"

import {
  TIME_STOP_START,
  TIME_STOP_RESET,
  TIME_STOP_TICK,
  TIME_STOP_STOP,
  TIME_STOP_LAB,
  TIMER_START,
  TIMER_RESET,
  TIMER_EDIT,
  TIMER_STOP,
  TIMER_TICK,
  TIMER_RESET_EDIT
} from "./types"
const { createStandardAction } = deprecated

export const timeStopStart = createStandardAction(TIME_STOP_START)<void>()
export const timeStopStop = createStandardAction(TIME_STOP_STOP)<void>()
export const timeStopReset = createStandardAction(TIME_STOP_RESET)<void>()
export const timeStopTick = createStandardAction(TIME_STOP_TICK)<number>()
export const timeStopLab = createStandardAction(TIME_STOP_LAB)<void>()

export const timerStart = createStandardAction(TIMER_START)<void>()
export const timerTick = createStandardAction(TIMER_TICK)<void>()
export const timerReset = createStandardAction(TIMER_RESET)<void>()
export const timerStop = createStandardAction(TIMER_STOP)<void>()
export const timerEdit = createStandardAction(TIMER_EDIT)<number>()
export const timerResetEdit = createStandardAction(TIMER_RESET_EDIT)<number>()
export const timerAudioEdit = createStandardAction(TIMER_AUDIO_EDIT)<string>()
