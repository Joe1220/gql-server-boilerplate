import { MouseEvent } from "react"

export type IButton = {
  className?: string
  onClick?: (event: MouseEvent) => void | any
  disabled?: boolean
}
