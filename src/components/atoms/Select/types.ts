import { Props as ReactSelectProps } from "react-select"

type SelectOptionValue = any

interface SelectOption {
  label: string
  options?: SelectOption[]
  value?: SelectOptionValue
}

export type ISelectProps = ReactSelectProps<SelectOption> & {
  onChange?: (value: SelectOption | SelectOption[] | null) => void
  value?: SelectOption | SelectOption[] | null
}
