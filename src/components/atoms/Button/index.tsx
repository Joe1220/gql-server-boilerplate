import * as React from "react"

import { IButton } from "./types"
import styles from "./_Button.scss"

/**
 * Basic Button Component
 */
const Button: React.FC<IButton> = ({ onClick, children }) => (
  <button className={styles.a__btn} onClick={onClick}>
    {children}
  </button>
)

export default Button
