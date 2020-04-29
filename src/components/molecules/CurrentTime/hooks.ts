import { useState, useEffect } from "react"
import moment from "moment-timezone"

import { CurrentTimeHook } from "./types"

/** return current time's milliseconds */
export const useCurrentTime = ({
  zone = "Asia/Seoul",
  format = "hh",
  isShowMeridiem = false,
}: CurrentTimeHook) => {
  const getCurTime = moment().tz(zone)
  const timeFormat = () => getCurTime.format(format)
  const meridiemFormat = () => getCurTime.format("a")
  const dateFormat = () => getCurTime.format("YYYY년 MM월")
  const [curTime, setCurTime] = useState(timeFormat())
  const [curMeridiem, setCurMeridiem] = useState(meridiemFormat())
  const [curDate, setCurDate] = useState(dateFormat())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurTime(timeFormat())
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
