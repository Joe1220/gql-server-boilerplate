import React from "react"
import { render, fireEvent } from "@testing-library/react"

import MenuToggle from "./"

describe("<MenuToggle />", () => {
  it("matches snapshot", () => {
    const instance = render(<MenuToggle>test</MenuToggle>)
    expect(instance.container).toMatchSnapshot()
  })
  it("have toggle button", () => {
    const instance = render(
      <MenuToggle>
        <div>testing</div>>
      </MenuToggle>
    )
    const button = instance.getByTestId("toggle_button")
    fireEvent.click(button)
    instance.getByTestId("dropdown")
  })
})
