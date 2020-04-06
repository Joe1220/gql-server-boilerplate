import { put, select, delay, take, call, takeEvery, fork } from "redux-saga/effects"

import {
  timeStopTick,
  timeStopReset,
  timeStopStop,
  timerReset,
  timerEdit,
  timerStop,
  timerAudioStart,
} from "./actions"
import { TIME_STOP_START, TIMER_START, TIMER_STOP } from "./types"
import { RootState } from "src/store/reducer"
import { MILLISECONDS_DEALY, MILLISECONDS_SECOND } from "./config"
import { eventChannel, END, EventChannel } from "redux-saga"

export const getTimeStopRunning = (state: RootState) => state.time.timeStop.isRunning
export const getTimeStopStartNow = (state: RootState) => state.time.timeStop.startNow
export const getTimerRunning = (state: RootState) => state.time.timer.isRunning
export const getTimerTotal = (state: RootState) => state.time.timer.milliseconds
export const getAudio = (state: RootState) => state.time.timer.audio

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
  return eventChannel((emitter) => {
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

/** stop 버튼을 위한 event처리 */
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
        yield put(timerEdit({ milliseconds: secs }))
        /** running 후 milliseconds 0일때 event 처리 */
        if (secs <= 0) {
          yield put(timerStop())
          yield put(timerAudioStart())
        }
      }
    }
  } catch (error) {
    console.log("time stop error: ", error)
    yield put(timerReset())
  }
}

export default function* () {
  while (true) {
    yield takeEvery(TIME_STOP_START, handleTimeStopRequest)
    yield takeEvery(TIMER_START, handleTimerRequest)
  }
}
