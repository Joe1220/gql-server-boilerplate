import * as React from "react"
import { NextPage } from "next"

import Layout from "src/components/templates/ClockLayout"
import TStyle from "src/components/templates/ClockLayout/_ClockLayout.scss"
import Button from "src/components/atoms/Button"
import styles from "./_index.scss"

/**
 * Stop watch page
 */
const IndexPage: NextPage = () => {
  return (
    <Layout>
      <span>
        <span className={TStyle["t__clocklayout__clock"]}>01:00.00</span>
        <span className={TStyle["t__clocklayout__miles"]}>.00</span>
      </span>

      <div>
        <Button className={styles["mainpage__btn--reset"]}>reset</Button>
        <Button className={styles["mainpage__btn--start"]}>start</Button>
      </div>
    </Layout>
  )
}

export default IndexPage
