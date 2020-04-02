import React from "react"
import classNames from "classnames/bind"

import styles from "./_TimeForm.scss"
import { handleTimeAdjust } from "src/store/modules/time/utils"
import { ITimeFormProps } from "./types"

const cx = classNames.bind(styles)

const TimeForm: React.FC<ITimeFormProps> = ({ milliseconds = 0, size = "", isShowMs = true }) => {
  let changedTime = handleTimeAdjust(milliseconds)
  let hours = changedTime.hours
  let mins = changedTime.mins
  let secs = changedTime.secs
  let msecs = changedTime.msecs
  const secondsClass = cx("m__watch__clock", size)
  const millisecondsClass = cx("m__watch__milliseconds", size)
  return (
    <span className={styles["m__watch__container"]}>
      <span className={secondsClass}>
        {hours}:{mins}:{secs}
      </span>
      {isShowMs ? <span className={millisecondsClass}>:{msecs}</span> : null}
    </span>
  )
}

export default TimeForm
