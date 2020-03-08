import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"

import Icon from "src/components/atoms/Icon"
import styles from "./_MenuToggle.scss"
import { useOutsideClick } from "src/shared/hooks"

type IProps = {
  children: React.ReactNode
}

const MenuToggle: React.FC<IProps> = ({ children }) => {
  const [isHide, setIsHide] = useState(false)
  const handleHide = () => {
    setIsHide(!isHide)
  }
  const handleHideFalse = () => {
    setIsHide(false)
  }
  const { _ref } = useOutsideClick(handleHideFalse)
  return (
    <div className={styles["m__menutoggle__container"]} ref={_ref}>
      <span onClick={() => handleHide()} data-testid="toggle_button">
        <Icon icon="bars" size="3x" />
      </span>
      <CSSTransition
        in={isHide}
        timeout={400}
        classNames={{
          enter: styles["m__menutoggle__dropdown-enter"],
          enterActive: styles["m__menutoggle__dropdown-enter-active"],
          exit: styles["m__menutoggle__dropdown-exit"],
          exitActive: styles["m__menutoggle__dropdown-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={styles["m__menutoggle__dropdown"]} data-testid="dropdown">
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

export default MenuToggle
