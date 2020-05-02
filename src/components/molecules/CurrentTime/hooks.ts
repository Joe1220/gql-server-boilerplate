import { useState, useEffect } from "react"
import moment from "moment-timezone"

import { CurrentTimeHook } from "./types"

/** return current time's milliseconds */
export const useCurrentTime = ({
  zone = "Asia/Seoul",
  format = "hh",
  isShowMeridiem = false,
}: CurrentTimeHook) => {
  let getCurTime = moment().tz(zone)
  let timeUpdate = () => {
    getCurTime = moment().tz(zone)
    return getCurTime.format(format)
  }
  const meridiemFormat = () => getCurTime.format("a")
  const dateFormat = () => getCurTime.format("YYYY-MM-DD ddd")
  const [curTime, setCurTime] = useState(timeUpdate())
  const [curMeridiem, setCurMeridiem] = useState(meridiemFormat())
  const [curDate, setCurDate] = useState(dateFormat())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurTime(timeUpdate())
      if (isShowMeridiem) {
        setCurMeridiem(meridiemFormat())
        setCurDate(dateFormat())
      }
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  })
  return { curTime, curMeridiem, curDate }
}
