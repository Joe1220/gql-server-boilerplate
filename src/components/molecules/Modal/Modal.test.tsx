import React from "react"
import { render } from "@testing-library/react"

import Modal from "./"

describe("Modal molecules Component", () => {
  it("can show when get Showing", () => {
    const handleClose = jest.fn()
    const instance = render(
      <Modal isShow={true} handleClose={handleClose}>
        test
      </Modal>
    )

    instance.getByTestId("modal")
  })
})
