import { ISelectProps } from "src/components/atoms/Select/types"

export type ISelectNumInputProps = ISelectProps & {
  label?: string
  minusChange?: () => void | any
  addChange?: () => void | any
  minusDisbled?: boolean
  addDisabled?: boolean
}
