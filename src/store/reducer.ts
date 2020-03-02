import { combineReducers } from "redux"

import time from "src/store/modules/time"

const rootReducer = combineReducers({
  time
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
