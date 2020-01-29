import * as React from "react"

import { IButton } from "./types"
import "./_Button.scss"

/**
 * Basic Button Component
 */
const Button: React.FC<IButton> = ({ onClick, children }) => (
  <button className={"a__btn"} onClick={onClick}>
    {children}
  </button>
)

export default Button
