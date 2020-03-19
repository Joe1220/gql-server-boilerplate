import React from "react"
import Select from "react-select"
import { ISelectProps } from "./types"

const CustomSelect: React.FC<ISelectProps> = ({
  options = [{ value: "", label: "" }],
  ...props
}) => {
  return <Select options={options} {...props} />
}

export default CustomSelect
