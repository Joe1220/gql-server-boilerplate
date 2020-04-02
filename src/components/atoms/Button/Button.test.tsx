import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Button from "./"

describe("<Button />", () => {
  it("matches snapshot", () => {
    const onClick = () => console.log("test")
    const instance = render(<Button onClick={onClick}>test</Button>)
    expect(instance.container).toMatchSnapshot()
  })
  it("work onClick props event", () => {
    const mockFn = jest.fn()
    const { getByText } = render(<Button onClick={mockFn}>test</Button>)
    fireEvent.click(getByText("test"))
    expect(mockFn).toHaveBeenCalled()
  })
})
