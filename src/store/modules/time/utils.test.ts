import { numberDigit, handleTimerNum } from "./utils"

describe("about time calculate function", () => {
  it("digit function.(숫자앞자리 0 붙이기)", () => {
    expect(numberDigit(3, 2)).toBe("03")
  })
  it("milliseconds를 s, m, h로 변환", () => {
    const res = handleTimerNum(1200)
    expect(res).toMatchObject({ hours: "00", mins: "00", msecs: "20", secs: "01" })
  })
})
