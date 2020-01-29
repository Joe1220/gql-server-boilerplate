import * as React from "react"
import { NextPage } from "next"

import Layout from "src/components/templates/Layout"
import Button from "src/components/atoms/Button"

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <h1>Project Start</h1>
      <Button>hello</Button>
    </Layout>
  )
}

export default IndexPage
