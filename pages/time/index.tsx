import React from "react"
import { NextPage } from "next"

import Layout from "src/components/templates/ClockLayout"
import CurrentTime from "src/components/molecules/CurrentTime/index"
import dSyles from "src/components/templates/ClockLayout/_ClockLayout.scss"

/**
 * Stop watch page
 */
const TimePage: NextPage = () => {
  return (
    <Layout>
      <div className={dSyles["t__clocklayout__panel"]}>
        <p className={dSyles["t__clocklayout__title"]}>time</p>
        <CurrentTime />
      </div>
    </Layout>
  )
}

export default TimePage
