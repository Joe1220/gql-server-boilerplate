import React from "react"
import { render } from "@testing-library/react"

import TimeForm from "."

describe("<TimeForm />", () => {
  const milliseconds = 666666
  it("matches snapshot", () => {
    const instance = render(<TimeForm milliseconds={milliseconds} />)
    expect(instance.container).toMatchSnapshot()
  })
})
