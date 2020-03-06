import React from "react"
import { render } from "@testing-library/react"
import Navigation from "./"
import { appTitle } from "src/shared/config"

describe("<Navigation />", () => {
  it("matches snapshot", () => {
    const instance = render(<Navigation />)
    expect(instance.container).toMatchSnapshot()
  })
  it("contain 'fClock' app link title", () => {
    const { getByText } = render(<Navigation />)

    expect(getByText(appTitle).closest("a")).toHaveAttribute("href", "/")
  })
})
