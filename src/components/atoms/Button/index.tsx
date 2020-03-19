import * as React from "react"
import classNames from "classnames/bind"

import { IButton } from "./types"
import styles from "./_Button.scss"

const cx = classNames.bind(styles)
/**
 * Basic Button Component
 */
const Button: React.FC<IButton> = ({ onClick, className, disabled, children }) => {
  let _className = cx("a__btn", className, {
    disabled
  })
  return (
    <button className={_className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
