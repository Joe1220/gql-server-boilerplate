import React from "react"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"

import initialStore, { PersistedStore } from "src/store"
import "src/styles/index.scss"

export interface IProps {
  store: PersistedStore
}

class MyApp extends React.Component<IProps> {
  render() {
    const { store, children } = this.props
    return <Provider store={store}>{children}</Provider>
  }
}

export default withRedux(initialStore)(MyApp)
