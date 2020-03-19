import { Props as ReactSelectProps } from "react-select"

export interface SelectOption {
  label: string
  options?: SelectOption[]
  value?: any
}

export type ISelectProps = ReactSelectProps<SelectOption> & {
  onChange?: (value: SelectOption | SelectOption[] | null) => void
  value?: SelectOption | SelectOption[] | null
}
