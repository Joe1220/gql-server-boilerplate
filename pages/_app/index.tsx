import React from "react"
import App from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import withRedux from "next-redux-wrapper"

import initialStore, { PersistedStore } from "src/store"
import "src/styles/index.scss"

export interface IProps {
  store: PersistedStore
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <PersistGate loading={<div>hello</div>} persistor={store.__persistor}>
          <Component {...pageProps} />
          <Head>
            <title>FClock</title>
          </Head>
        </PersistGate>
      </Provider>
    )
  }
}

export default withRedux(initialStore)(MyApp)
