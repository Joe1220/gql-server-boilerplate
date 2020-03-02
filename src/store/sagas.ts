import { all, fork } from "redux-saga/effects"

import watchTimeSaga from "src/store/modules/time/sagas"

export default function*() {
  yield all([fork(watchTimeSaga)])
}
