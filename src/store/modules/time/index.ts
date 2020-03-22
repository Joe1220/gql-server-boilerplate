import { createReducer } from "typesafe-actions"
import { TIMER_RESET_TIME, MILLISECONDS_SECOND } from "./config"

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
  TIMER_RESET_EDIT
} from "./types"

const initialState: TimeState = {
  timer: { milliseconds: TIMER_RESET_TIME, resetMilliseconds: TIMER_RESET_TIME, isRunning: false },
  timeStop: { milliseconds: 0, startNow: 0, isRunning: false, labs: [] }
}

export default createReducer<TimeState, TimeAction>(initialState, {
  [TIME_STOP_START]: state => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      startNow: Date.now() - state.timeStop.milliseconds,
      isRunning: true
    }
  }),
  [TIME_STOP_STOP]: state => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      isRunning: false
    }
  }),
  [TIME_STOP_RESET]: state => ({
    ...state,
    timeStop: {
      startNow: 0,
      milliseconds: 0,
      isRunning: false,
      labs: []
    }
  }),
  [TIME_STOP_TICK]: (state, action) => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      milliseconds: Date.now() - action.payload
    }
  }),
  [TIME_STOP_LAB]: state => ({
    ...state,
    timeStop: {
      ...state.timeStop,
      labs: [...state.timeStop.labs, state.timeStop.milliseconds]
    }
  }),
  // timer
  [TIMER_START]: state => ({
    ...state,
    timer: {
      ...state.timer,
      isRunning: true
    }
  }),
  [TIMER_TICK]: state => ({
    ...state,
    timer: {
      ...state.timer,
      milliseconds: state.timer.milliseconds - MILLISECONDS_SECOND
    }
  }),
  [TIMER_RESET]: state => ({
    ...state,
    timer: {
      ...state.timer,
      milliseconds: state.timer.resetMilliseconds,
      isRunning: false
    }
  }),
  [TIMER_STOP]: state => ({
    ...state,
    timer: {
      ...state.timer,
      isRunning: false
    }
  }),
  [TIMER_EDIT]: (state, action) => ({
    ...state,
    timer: {
      ...state.timer,
      milliseconds: action.payload
    }
  }),
  [TIMER_RESET_EDIT]: (state, action) => ({
    ...state,
    timer: {
      ...state.timer,
      resetMilliseconds: action.payload
    }
  })
})
