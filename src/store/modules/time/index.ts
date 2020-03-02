import { createReducer } from "typesafe-actions"

import {
  TIME_STOP_START,
  TIME_STOP_RESET,
  TIME_STOP_TICK,
  TimeState,
  TimeAction,
  TIME_STOP_STOP,
  TIME_STOP_LAB
} from "./types"

const initialState: TimeState = {
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
  })
})
