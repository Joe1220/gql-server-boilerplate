import React from "react"
import { render } from "@testing-library/react"

import WatchForm from "./"

describe("<WatchForm />", () => {
  it("matches snapshot", () => {
    const instance = render(<WatchForm />)
    expect(instance.container).toMatchSnapshot()
  })
})
