import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

import { IButton } from "src/components/atoms/Button/types"
import { Ref } from "src/shared/types"

export type IIconButton = FontAwesomeIconProps &
  IButton & {
    ref?: Ref<void>
  }
