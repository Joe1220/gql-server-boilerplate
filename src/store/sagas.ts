import { all, fork } from "redux-saga/effects"

import watchSocketSaga from "src/store/modules/socket/sagas"

export default function*() {
  yield all([fork(watchSocketSaga)])
}
