import { createStore, applyMiddleware, Store, AnyAction, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistReducer, persistStore } from "redux-persist"

import rootReducer from "./reducer"
import rootSaga from "./sagas"

export type PersistedStore = Store<any, AnyAction> & {
  __persistor?: any
}

const isClient = typeof window !== "undefined"
const sagaMiddleware = createSagaMiddleware()
// middleware list
const middlewares = [sagaMiddleware]

const initStore = (reducer: any) => {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  return createStore(reducer, enhancer)
}

export default () => {
  let _store: PersistedStore
  if (isClient) {
    const storage = require("redux-persist/lib/storage").default

    const persistConfig = {
      key: "root",
      storage,
      blacklist: ["time"]
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    _store = initStore(persistedReducer)
    _store.__persistor = persistStore(_store)
  } else {
    _store = initStore(rootReducer)
  }
  sagaMiddleware.run(rootSaga)

  return _store
}
