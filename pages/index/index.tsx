import * as React from "react"
import { NextPage } from "next"

import Layout from "src/components/templates/Layout"
import Button from "src/components/atoms/Button"
import styles from "./_index.scss"

/**
 * Stop watch page
 */
const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>00:00.00</h1>
      <div>
        <Button className={styles["mainpage__btn--reset"]}>reset</Button>
        <Button className={styles["mainpage__btn--start"]}>start</Button>
      </div>
    </Layout>
  )
}

export default IndexPage
