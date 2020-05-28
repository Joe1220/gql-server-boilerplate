import React, { useState, useEffect } from "react"

import { IFormProps } from "./types"

const Form: React.FC<IFormProps> = ({ isAsync, onSubmit, children, ...props }) => {
  /** 한번 클릭 후 reclick 방지 */
  const [canClick, setCanClick] = useState(false)
  useEffect(() => {
    if (isAsync) {
      setCanClick(true)
    } else {
      setCanClick(false)
    }
  }, [isAsync])
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (canClick) {
      setCanClick(false)
      await onSubmit()
        .then(() => setCanClick(true))
        .catch(() => setCanClick(true))
    } else {
      onSubmit()
    }
  }
  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}

export default Form
