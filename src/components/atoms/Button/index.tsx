import * as React from "react"
import cx from "classnames"

import { IButton } from "./types"
import styles from "./_Button.scss"

/**
 * Basic Button Component
 */
const Button: React.FC<IButton> = ({ onClick, className, children }) => {
  let _className = cx(styles.a__btn, className)
  return (
    <button className={_className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
