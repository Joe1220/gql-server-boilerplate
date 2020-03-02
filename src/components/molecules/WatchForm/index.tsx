import React from "react"
import classNames from "classnames/bind"

import styles from "./_WatchForm.scss"
import { handleTimerNum } from "src/store/modules/time/utils"

const cx = classNames.bind(styles)

type IProps = {
  milliseconds: number
  /** small일 경우 labs에서 사용될 작은 형태 */
  size?: string
}

const WatchForm: React.FC<IProps> = ({ milliseconds, size = "" }) => {
  let changedTime = handleTimerNum(milliseconds)
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
      <span className={millisecondsClass}>:{msecs}</span>
    </span>
  )
}

export default WatchForm
