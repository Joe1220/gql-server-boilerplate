import React from "react"

import styles from "./_Input.scss"
import { IInputProps } from "./types"

const Input: React.FC<IInputProps> = ({ onChange, ...props }) => {
  return (
    <input
      onChange={onChange}
      data-testid="input"
      className={styles["a__input__container"]}
      {...props}
    />
  )
}

export default Input
