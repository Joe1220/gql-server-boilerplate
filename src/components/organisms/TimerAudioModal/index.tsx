import React, { useEffect } from "react"

import Modal from "src/components/molecules/Modal"
import Audio from "src/components/atoms/Audio"
import TimeForm from "src/components/molecules/TimeForm"
import Button from "src/components/atoms/Button"
import { ITimerAudioModal } from "./types"
import styles from "./_TimerAudioModal.scss"
import { useAudioHooks } from "../../atoms/Audio/hooks"

const AudioModal: React.FC<ITimerAudioModal> = ({ isShow, handleClose, milliseconds, src }) => {
  const { _ref, handleOnEnded, handlePlay } = useAudioHooks({
    counting: 3,
    handleOnEndedEvent: () => {
      handlePlay(false)
      handleClose()
    },
  })
  useEffect(() => {
    if (isShow) {
      handlePlay(true)
    }
  }, [isShow])

  return (
    <div className={styles["o__audiomodal__container"]}>
      <Modal isShow={isShow} handleClose={handleClose}>
        <h6 className={styles["o__audiomodal__title"]}> time timer</h6>
        <div className={styles["o__audiomodal__content"]}>
          <TimeForm milliseconds={milliseconds} size="lg" isShowMs={false} />
        </div>
        <Button onClick={handleClose} className={styles["o__audiomodal__button"]}>
          CANCEL
        </Button>
        <Audio src={src} onEnded={handleOnEnded} ref={_ref} />
      </Modal>
    </div>
  )
}

export default AudioModal
