import React from "react"
import classNames from "classnames/bind"

import styles from "./_TimeForm.scss"
import { CurrentTimeHook } from "./types"

import { useCurrentTime } from "./hooks"

const cx = classNames.bind(styles)

const CurrentTime: React.FC<CurrentTimeHook> = ({
  zone = "Asia/Seoul",
  size,
  format = "hh:mm:ss",
  isShowMeridiem = true,
  isShowDate = true,
}) => {
  const { curTime, curMeridiem, curDate } = useCurrentTime({ zone, format, isShowMeridiem })
  const secondsClass = cx("m__curtime__clock", size)
  const meridiemClass = cx("m__curtime__meridiem", size)
  return (
    <div className={styles["m__curtime__container"]}>
      <div>
        <span className={secondsClass}>{curTime}</span>
        {isShowMeridiem ? <span className={meridiemClass}>{curMeridiem}</span> : null}
      </div>
      {isShowDate ? <div className={meridiemClass}>{curDate}</div> : null}
    </div>
  )
}

export default CurrentTime
