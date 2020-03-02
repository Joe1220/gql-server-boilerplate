/** n자리 숫자 앞에 0을 붙여 nn자리로 변경 */
export const numberDigit = (number: number, width: number = 2) => {
  let n = number + ""
  return n.length >= width ? n.slice(0, width) : new Array(width - n.length + 1).join("0") + n
}

/** timer의 각 숫자 자리 mileseconds, seconds, minutes, hour...
 * milliseconds * seconds * minutes * hours
 */

/** call delay(100) in saga file
 * number 100 is placed in ./config
 */
export const handleTimerNum = (milliseconds: number) => {
  // milliseconds 가 100으로 전환하면 힘드니, 1로 변환 후 계산
  if (milliseconds >= 0) {
    let hours = numberDigit(Math.floor((milliseconds / (1000 * 60 * 60)) % 24))
    let mins = numberDigit(Math.floor(milliseconds / (1000 * 60)) % 60)
    let secs = numberDigit(Math.floor(milliseconds / 1000) % 60)
    let msecs = numberDigit(Math.floor(milliseconds / 10) % 100)
    return {
      hours,
      mins,
      secs,
      msecs
    }
  } else {
    return {
      hours: 0,
      mins: 0,
      secs: 0,
      msecs: 0
    }
  }
}

/** labs 리스트를 asc, desc정렬 */
export const handleSort = (list: number[], isAsc = true) => {
  let result = []
  for (let i = 0; i < list.length; i++) {
    result.push({ index: i + 1, value: list[i] })
  }
  if (!isAsc) {
    return result
  } else {
    return [...result].reverse()
  }
}
