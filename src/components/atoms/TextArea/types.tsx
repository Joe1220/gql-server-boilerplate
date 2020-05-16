import { TextareaAutosizeProps } from "react-textarea-autosize"

import { IInputProps } from "src/components/atoms/Input/types"

export type ITextArea = IInputProps &
  TextareaAutosizeProps & {
    /** resize 할 수 있을지 여부 */
    notResize?: boolean
  }
