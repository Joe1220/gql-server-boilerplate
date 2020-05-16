import React from "react"
import App from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import withRedux from "next-redux-wrapper"
import { ApolloProvider } from "@apollo/react-hooks"

import initialStore, { PersistedStore } from "src/store"
import "src/styles/index.scss"
import LoadingSpinner from "src/components/atoms/LoadingSpinner/index"
import apolloClient from "src/apollo"

export interface IProps {
  store: PersistedStore
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <PersistGate loading={<LoadingSpinner />} persistor={store.__persistor}>
            <Component {...pageProps} />
            <Head>
              <title>FClock</title>
            </Head>
          </PersistGate>
        </ApolloProvider>
      </Provider>
    )
  }
}

export default withRedux(initialStore)(MyApp)
