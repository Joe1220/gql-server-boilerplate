import { useState, useRef, useEffect } from "react"

/** 음악을 선택할 수 있는 input, 음악을 재생하는 button */
export const useAudioHooks = () => {
  const [play, setPlay] = useState(false)
  const [count, setCount] = useState(3)
  const _ref = useRef<HTMLAudioElement>(null)
  const handlePlay = () => {
    setPlay(!play)
  }

  /** 해당 함수에서 count처리시 if문 동기화가 되지않는 문제로, useEffect에서 count처리 */
  const handleOnEnded = () => {
    if (_ref.current) {
      if (count <= 0) {
        /** _ref.current사용해도 되나, 하단 icon변경을 위해 play state 사용 */
        setPlay(false)
      } else {
        _ref.current.currentTime = 0
        _ref.current.play()
      }
    } else {
      throw new Error("audio ref not existed")
    }
  }

  useEffect(() => {
    if (_ref.current) {
      if (play) {
        _ref.current.play()
        setCount(count - 1)
      } else {
        _ref.current.pause()
      }
    }
    return () => {
      if (_ref.current) {
        _ref.current.pause()
      }
    }
  }, [play])

  return { _ref, play, handlePlay, handleOnEnded }
}
