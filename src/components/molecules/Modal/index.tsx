import React, { useRef } from "react"
import classNames from "classnames/bind"
import { CSSTransition } from "react-transition-group"

import styles from "./_Modal.scss"
import { useOutsideClick } from "src/shared/hooks"
import { IModalProps } from "./types"

const cx = classNames.bind(styles)

const Modal: React.FC<IModalProps> = ({ handleClose, isShow = false, children }) => {
  const _ref = useRef<HTMLDivElement>(null)
  useOutsideClick(handleClose, _ref)
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
