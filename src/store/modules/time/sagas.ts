import { put, select, delay, take, call, takeEvery, fork } from "redux-saga/effects"

import {
  timeStopTick,
  timeStopReset,
  timeStopStop,
  timerReset,
  timerEdit,
  timerStop
} from "./actions"
import { TIME_STOP_START, TIMER_START, TIMER_STOP } from "./types"
import { RootState } from "src/store/reducer"
import { MILLISECONDS_DEALY, MILLISECONDS_SECOND } from "./config"
import { eventChannel, END, EventChannel } from "redux-saga"

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

export function countdown(secs: number) {
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

export function* timerStopFork(chan: EventChannel<any>) {
  yield take(TIMER_STOP)
  yield put(timerStop())
  chan.close()
}

export function* handleTimerRequest() {
  const timeTotal = yield select(getTimerTotal)
  const chan = yield call(countdown, timeTotal)

  yield fork(timerStopFork, chan)
  try {
    while (true) {
      if (yield select(getTimerRunning)) {
        const secs = yield take(chan)
        yield put(timerEdit(secs))
      }
      // stop이벤트가 발생되어도 secs가 minus되는 issue로 인해, 위해서 fork로 stop이벤트 처리
      // else {
      //   chan.close()
      //   yield put(timerStop())
      //   break
      // }
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
