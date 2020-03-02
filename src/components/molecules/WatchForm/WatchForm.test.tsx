import React from "react"
import { render } from "@testing-library/react"

import WatchForm from "./"

describe("<WatchForm />", () => {
  const milliseconds = 666666
  it("matches snapshot", () => {
    const instance = render(<WatchForm milliseconds={milliseconds} />)
    expect(instance.container).toMatchSnapshot()
  })
})
