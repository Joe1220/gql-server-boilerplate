import React, { forwardRef } from "react"
import TextareaAutosize from "react-textarea-autosize"
import classNames from "classnames/bind"

import styles from "./_TextArea.scss"
import { ITextArea } from "./types"

const cx = classNames.bind(styles)

const Input: React.FC<ITextArea> = ({ onChange, className, notResize, ...props }, ref) => {
  let _className = cx("a__textarea__container", className, {
    notResize
  })
  return <TextareaAutosize onChange={onChange} className={_className} ref={ref} {...props} />
}

export default forwardRef(Input)
