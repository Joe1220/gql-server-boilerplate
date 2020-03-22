import { expectSaga, testSaga } from "redux-saga-test-plan"
import { call } from "redux-saga/effects"

import timeSaga, {
  handleTimeStopRequest,
  getTimeStopRunning,
  getTimeStopStartNow,
  getTimerRunning,
  handleTimerRequest,
  getTimerTotal
} from "./sagas"
import { timeStopStart, timeStopStop, timerStart, timerTick, timerStop } from "./actions"

describe("time stop saga module test", () => {
  it("time saga(time stop) run when taking start type", () => {
    return expectSaga(timeSaga)
      .dispatch(timeStopStart())
      .provide([[call(handleTimeStopRequest), {}]])
      .run()
  })

  it("run when isRunning value is true, and 'false' is not running", () => {
    const isRunningText = "isRunning is true"
    const saga = testSaga(handleTimeStopRequest)
    saga
      .next()
      .select(getTimeStopRunning)
      .next(0)
      .select(getTimeStopStartNow)
      .save(isRunningText)
      .next(false)
      .put(timeStopStop())
      .next()
      .isDone()
  })
})

describe("timer saga module test", () => {
  it("time saga(timer) run when taking start type", () => {
    return expectSaga(timeSaga)
      .dispatch(timerStart())
      .provide([[call(handleTimerRequest), {}]])
      .run()
  })

  it("run when isRunning value is true, and 'false' is not running", () => {
    const isTimeBiggerThanZero = "time is big"
    const saga = testSaga(handleTimerRequest)
    saga
      .next()
      .select(getTimerRunning)
      .next(true)
      .select(getTimerTotal)
      .save(isTimeBiggerThanZero)
      .next(1000)
      .put(timerTick())
      .restore(isTimeBiggerThanZero)
      .next(-1000)
      .put(timerStop())
  })
})
