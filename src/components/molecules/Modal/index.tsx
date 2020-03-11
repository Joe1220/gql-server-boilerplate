import React from "react"
import classNames from "classnames/bind"
import { CSSTransition } from "react-transition-group"

import styles from "./_Modal.scss"
import { useOutsideClick } from "src/shared/hooks"

const cx = classNames.bind(styles)

type IProps = {
  children: React.ReactNode
  handleClose: () => void
  isShow: boolean
}

const Modal: React.FC<IProps> = ({ handleClose, isShow = false, children }) => {
  const { _ref } = useOutsideClick(handleClose)
  return (
    <div
      className={cx("m__modal__overlay", {
        showing: isShow
      })}
    >
      <CSSTransition
        in={isShow}
        timeout={400}
        classNames={{
          enter: styles["m__modal__content-enter"],
          enterActive: styles["m__modal__content-enter-active"],
          exit: styles["m__modal__content-exit"],
          exitActive: styles["m__modal__content-exit-active"]
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={cx("m__modal__content")} data-testid="modal" ref={_ref}>
          {children}
        </div>
      </CSSTransition>
    </div>
  )
}

export default Modal
