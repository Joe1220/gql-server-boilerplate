import { put, select, delay, take, call, takeEvery } from "redux-saga/effects"

import {
  timeStopTick,
  timeStopReset,
  timeStopStop,
  timerReset,
  timerEdit,
  timerStop
} from "./actions"
import { TIME_STOP_START, TIMER_START } from "./types"
import { RootState } from "src/store/reducer"
import { MILLISECONDS_DEALY, MILLISECONDS_SECOND } from "./config"
import { eventChannel, END } from "redux-saga"

export const getTimeStopRunning = (state: RootState) => state.time.timeStop.isRunning
export const getTimeStopStartNow = (state: RootState) => state.time.timeStop.startNow
export const getTimerRunning = (state: RootState) => state.time.timer.isRunning
export const getTimerTotal = (state: RootState) => state.time.timer.milliseconds

export function* handleTimeStopRequest() {
  try {
    while (true) {
      const timeState = yield select(getTimeStopRunning)
      const milliseconds = yield select(getTimeStopStartNow)
      if (timeState) {
        yield put(timeStopTick(milliseconds))
        yield delay(MILLISECONDS_DEALY)
      } else {
        yield put(timeStopStop())
        break
      }
    }
  } catch (error) {
    console.log("time stop error: ", error)
    yield put(timeStopReset())
  }
}

function countdown(secs: number) {
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      secs -= MILLISECONDS_SECOND
      if (secs > 0) {
        emitter(secs)
      } else {
        emitter(0)
        emitter(END)
      }
    }, MILLISECONDS_SECOND)
    return () => {
      clearInterval(iv)
    }
  })
}

export function* handleTimerRequest() {
  try {
    const timeTotal = yield select(getTimerTotal)
    const chan = yield call(countdown, timeTotal)
    while (true) {
      const timeState = yield select(getTimerRunning)
      if (timeState) {
        const secs = yield take(chan)
        yield put(timerEdit(secs))
      } else {
        yield put(timerStop())
        break
      }
    }
  } catch (error) {
    console.log("time stop error: ", error)
    yield put(timerReset())
  }
}

export default function*() {
  while (true) {
    yield takeEvery(TIME_STOP_START, handleTimeStopRequest)
    yield take(TIMER_START)
    yield call(handleTimerRequest)
  }
}
