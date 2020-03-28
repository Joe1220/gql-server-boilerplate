import React from "react"
import { bindActionCreators, Dispatch, AnyAction } from "redux"
import { connect } from "react-redux"
import classNames from "classnames/bind"

import { RootState } from "src/store/reducer"
import Modal from "src/components/molecules/Modal"
import { timerEdit, timerResetEdit, timerAudioEdit } from "src/store/modules/time/actions"
import SelectNumInput from "src/components/molecules/SelectNumInput"
import { IModalProps } from "src/components/molecules/Modal/types"
import styles from "./_TimerModal.scss"
import { makeTimes } from "./utils"
import timeModalHook from "./hooks"
import Button from "src/components/atoms/Button"
import { audioList } from "./datas"
import SelectAudio from "src/components/molecules/SelectAudio"

const cx = classNames.bind(styles)

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  IModalProps

const TimerModal: React.FC<IProps> = ({ timerEdit, timerResetEdit, handleClose, isShow }) => {
  const { hours, minutes, seconds } = makeTimes()
  const {
    hour,
    minute,
    second,
    handleTime,
    handleAddOrMinus,
    handleTotalTime,
    audio,
    handleSetAudio
  } = timeModalHook()

  return (
    <Modal handleClose={handleClose} isShow={isShow}>
      <h4 className={styles["o__timermodal__title"]}>TIMER EDIT</h4>
      <div>
        <SelectNumInput
          options={hours}
          label={"hour"}
          defaultValue={hours[1]}
          onChange={(e: any) => handleTime(e, "hour")}
          minusChange={() => handleAddOrMinus("hour")}
          minusDisbled={hour.value <= 0}
          addChange={() => handleAddOrMinus("hour", "add")}
          addDisabled={hour.value >= 99}
          value={hour}
        />
        <SelectNumInput
          options={minutes}
          label={"minutes"}
          defaultValue={minutes[0]}
          onChange={(e: any) => handleTime(e, "minute")}
          minusChange={() => handleAddOrMinus("minute")}
          minusDisbled={minute.value <= 0}
          addChange={() => handleAddOrMinus("minute", "add")}
          addDisabled={minute.value >= 59}
          value={minute}
        />
        <SelectNumInput
          options={seconds}
          label={"seconds"}
          defaultValue={seconds[0]}
          onChange={(e: any) => handleTime(e, "second")}
          minusChange={() => handleAddOrMinus("second")}
          minusDisbled={second.value <= 0}
          addChange={() => handleAddOrMinus("second", "add")}
          addDisabled={second.value >= 59}
          value={second}
        />
      </div>
      <SelectAudio
        options={audioList}
        defaultValue={audioList[0]}
        onChange={(e: any) => handleSetAudio(e)}
        value={audio}
      />
      <Button
        className={cx("o__timermodal__btn", {
          disabled: hour.value <= 0 && minute.value <= 0 && second.value <= 0
        })}
        onClick={() => {
          const totalTime = handleTotalTime()
          timerEdit(totalTime)
          timerResetEdit(totalTime)
          timerAudioEdit(audio.value)
          handleClose()
        }}
        disabled={hour.value <= 0 && minute.value <= 0 && second.value <= 0}
      >
        edit timer
      </Button>
    </Modal>
  )
}

const mapStateToProps = (state: RootState) => ({
  milliseconds: state.time.timer.milliseconds
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  timerEdit: bindActionCreators(timerEdit, dispatch),
  timerResetEdit: bindActionCreators(timerResetEdit, dispatch),
  timerAudioEdit: bindActionCreators(timerAudioEdit, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerModal)
