import { call, take, put, select, delay } from "redux-saga/effects"

import { timeStopTick, timeStopReset, timeStopStop } from "./actions"
import { TIME_STOP_START } from "./types"
import { RootState } from "src/store/reducer"
import { MILLISECONDS_DEALY } from "./config"

export const getIsRunning = (state: RootState) => state.time.timeStop.isRunning
export const getStartNow = (state: RootState) => state.time.timeStop.startNow

export function* handleTimeStopRequest() {
  try {
    while (true) {
      const timeState = yield select(getIsRunning)
      const milliseconds = yield select(getStartNow)
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

export default function*() {
  while (true) {
    yield take(TIME_STOP_START), yield call(handleTimeStopRequest)
  }
}
