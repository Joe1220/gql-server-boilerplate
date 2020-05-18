import React, { forwardRef } from "react"
import classNames from "classnames/bind"

import styles from "./_Input.scss"
import { IInputProps } from "./types"

const cx = classNames.bind(styles)

const Input: React.FC<IInputProps> = ({ onChange, className, ...props }, ref) => {
  let _className = cx("a__input__container", className)
  return (
    <input onChange={onChange} data-testid="input" className={_className} ref={ref} {...props} />
  )
}

export default forwardRef(Input)
