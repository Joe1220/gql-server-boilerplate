import { createReducer } from "typesafe-actions"
import { MILLISECONDS_SECOND, MILLISECONDS_HOUR } from "./config"
import { audioList } from "src/components/organisms/TimerModal/datas"

import {
  TIME_STOP_START,
  TIME_STOP_RESET,
  TIME_STOP_TICK,
  TimeState,
  TimeAction,
  TIME_STOP_STOP,
  TIME_STOP_LAB,
  TIMER_START,
  TIMER_RESET,
  TIMER_STOP,
  TIMER_EDIT,
  TIMER_TICK,
  TIMER_RESET_EDIT,
  TIMER_AUDIO_START,
} from "./types"

const initialState: TimeState = {
  timer: {
    milliseconds: MILLISECONDS_HOUR,
    resetMilliseconds: MILLISECONDS_HOUR,
    isRunning: false,
    audio: audioList[0].value,
    audioRunning: false,
  },
  timeStop: { milliseconds: 0, startNow: 0, isRunning: false, labs: [] },
}

export default createReducer<TimeState, TimeAction>(initialState, {
  [TIME_STOP_START]: (state) => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      startNow: Date.now() - state.timeStop.milliseconds,
      isRunning: true,
    },
  }),
  [TIME_STOP_STOP]: (state) => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      isRunning: false,
    },
  }),
  [TIME_STOP_RESET]: (state) => ({
    ...state,
    timeStop: {
      startNow: 0,
      milliseconds: 0,
      isRunning: false,
      labs: [],
    },
  }),
  [TIME_STOP_TICK]: (state, action) => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      milliseconds: Date.now() - action.payload,
    },
  }),
  [TIME_STOP_LAB]: (state) => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      labs: [...state.timeStop.labs, state.timeStop.milliseconds],
    },
  }),
  // timer
  [TIMER_START]: (state) => ({
    ...state,
    timer: {
      ...state.timer,
      isRunning: true,
    },
  }),
  [TIMER_TICK]: (state) => ({
    ...state,
    timer: {
      ...state.timer,
      milliseconds: state.timer.milliseconds - MILLISECONDS_SECOND,
    },
  }),
  [TIMER_RESET]: (state) => ({
    ...state,
    timer: {
      ...state.timer,
      milliseconds: state.timer.resetMilliseconds,
      audio: audioList[0].value,
      isRunning: false,
      audioRunning: false,
    },
  }),
  [TIMER_STOP]: (state) => ({
    ...state,
    timer: {
      ...state.timer,
      isRunning: false,
    },
  }),
  [TIMER_EDIT]: (state, action) => ({
    ...state,
    timer: {
      ...state.timer,
      ...action.payload,
    },
  }),
  [TIMER_RESET_EDIT]: (state, action) => ({
    ...state,
    timer: {
      ...state.timer,
      resetMilliseconds: action.payload,
    },
  }),
  [TIMER_AUDIO_START]: (state) => ({
    ...state,
    timer: {
      ...state.timer,
      milliseconds: state.timer.resetMilliseconds,
      isRunning: false,
      audioRunning: true,
    },
  }),
})
