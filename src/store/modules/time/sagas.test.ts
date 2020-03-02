import { expectSaga, testSaga } from "redux-saga-test-plan"
import { call } from "redux-saga/effects"

import timeSaga, { handleTimeStopRequest, getIsRunning, getStartNow } from "./sagas"
import { timeStopStart, timeStopTick, timeStopStop } from "./actions"

describe("time saga module test", () => {
  it("time saga run when taking start type", () => {
    return expectSaga(timeSaga)
      .dispatch(timeStopStart())
      .provide([[call(handleTimeStopRequest), {}]])
      .run()
  })
  // it("run when isRunning value is true, and 'false' is not running", () => {
  //   const whileText = "before endter while"
  //   const saga = testSaga(handleTimeStopRequest)
  //   saga
  //     .next()
  //     .select(getStateFunc)
  //     .save(whileText)
  //     .next(true)
  //     .put(timeStopTick())
  //     .restore(whileText)
  //     .next(false)
  //     .put(timeStopReset())
  //     .next()
  //     .isDone()
  // })
  it("run when isRunning value is true, and 'false' is not running", () => {
    const isRunningText = "isRunning is true"
    const saga = testSaga(handleTimeStopRequest)
    saga
      .next()
      .select(getIsRunning)
      .next(0)
      .select(getStartNow)
      .save(isRunningText)
      .next(false)
      .put(timeStopStop())
      .next()
      .isDone()
  })
  // it("not run when isRunning value is false", () => {
  //   return expectSaga(handleTimeStopRequest)
  //     .provide([[select(getStateFunc), false]])
  //     .put(timeStopReset())
  //     .run()
  // })
})
