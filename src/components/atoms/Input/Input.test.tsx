import React from "react"
import { render, fireEvent } from "@testing-library/react"

import Input from "./"

describe("Input atoms component", () => {
  it("value change", () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<Input onChange={onChange} />)
    const input = getByTestId("input")
    fireEvent.change(input, { target: { value: "test@test.com " } })
  })
})
