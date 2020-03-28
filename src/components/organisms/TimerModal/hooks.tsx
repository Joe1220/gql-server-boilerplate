import { useState } from "react"

import { TimerTime, CalType } from "src/store/modules/time/types"
import { handleNextVal } from "./utils"
import { SelectOption } from "src/components/atoms/Select/types"
import { handleTimerTime } from "src/store/modules/time/utils"
import { audioList } from "./datas"

export default () => {
  const [hour, setHour] = useState<SelectOption>({ label: "1", value: 1 })
  const [minute, setMinutes] = useState<SelectOption>({ label: "0", value: 0 })
  const [second, setSeconds] = useState<SelectOption>({ label: "0", value: 0 })
  const [audio, setAudio] = useState<SelectOption>(audioList[0])

  const handleTime = (selectedOption: SelectOption, timeType: TimerTime) => {
    if (timeType === "hour") {
      setHour(selectedOption)
    } else if (timeType === "minute") {
      setMinutes(selectedOption)
    } else {
      setSeconds(selectedOption)
    }
  }
  const handleAddOrMinus = (timeType: TimerTime, calType?: CalType) => {
    if (timeType === "hour") {
      const nextVal = handleNextVal(hour.value, calType)
      setHour({ label: String(nextVal), value: nextVal })
    } else if (timeType === "minute") {
      const nextVal = handleNextVal(minute.value, calType, 59)
      setMinutes({ label: String(nextVal), value: nextVal })
    } else if (timeType === "second") {
      const nextVal = handleNextVal(second.value, calType, 59)
      setSeconds({ label: String(nextVal), value: nextVal })
    } else {
      throw new Error("time type error")
    }
  }
  const handleTotalTime = () => {
    const totalHour = handleTimerTime(hour.value, "hour")
    const totalMinute = handleTimerTime(minute.value, "minute")
    const totalSecond = handleTimerTime(second.value, "second")

    return totalHour + totalMinute + totalSecond
  }
  const handleSetAudio = (audioSelect: SelectOption) => {
    setAudio(audioSelect)
  }
  return {
    hour,
    minute,
    second,
    handleTime,
    handleAddOrMinus,
    handleTotalTime,
    audio,
    handleSetAudio
  }
}
