import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCheckSquare,
  faAdjust,
  faCog,
  faBars,
  faWindowClose,
  faPlay,
  faPause,
  faMinus,
  faPlus
} from "@fortawesome/free-solid-svg-icons"
import cx from "classnames"

import { IIconButton } from "./types"
import styles from "./_Icon.scss"

library.add(faCheckSquare, faAdjust, faCog, faBars, faWindowClose, faPlay, faPause, faMinus, faPlus)

/**
 * Basic Icon Component - use fortawesome
 */
const Icon: React.FC<IIconButton> = ({ icon, onClick, ...props }) => {
  let className = cx({
    [styles["a__icon--clickable"]]: onClick
  })
  return (
    <span onClick={onClick} className={className}>
      <FontAwesomeIcon icon={icon} {...props} />
    </span>
  )
}

export default Icon
