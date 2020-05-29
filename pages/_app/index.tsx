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
import ToastContainer from "src/toastify"
import styles from "./_app.scss"

export interface IProps {
  store: PersistedStore
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <PersistGate
            loading={
              <div className={styles.app__loading__container}>
                <LoadingSpinner />
              </div>
            }
            persistor={store.__persistor}
          >
            <Component {...pageProps} />
            <ToastContainer />
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
