import { SelectOption } from "src/components/atoms/Select/types"
import { CalType } from "src/store/modules/time/types"
/** react-select사용. */
/**  { value: "dog", label: "Dog" },. */
const timeDurations = (end: number): any => {
  let res: SelectOption[] = []
  for (let i = 0; i <= end; i++) {
    res.push({ label: i + "", value: i })
  }
  return res
}

export const makeTimes = () => {
  const hours = timeDurations(99)
  const minutes = timeDurations(59)
  const seconds = timeDurations(59)
  return { hours, minutes, seconds }
}

export const handleNextVal = (time: number, caltype: CalType = "minus", limitNum = 99) => {
  let res
  if (caltype === "minus") {
    res = time >= 0 ? time - 1 : 0
  } else {
    res = time < limitNum ? time + 1 : time
  }
  return res
}
