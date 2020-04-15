import { useState, useRef, useEffect } from "react"
import { AudioHookParams } from "./types"

/** 음악을 선택할 수 있는 input, 음악을 재생하는 button */
export const useAudioHooks = ({ value, counting = 1, handleOnEndedEvent }: AudioHookParams) => {
  const [play, setPlay] = useState(false)
  const [count, setCount] = useState(counting)
  const _ref = useRef<HTMLAudioElement>(null)
  const handlePlay = (value?: boolean) => {
    if (value) {
      setPlay(value)
    } else {
      setPlay(!play)
    }
  }

  /** 해당 함수에서 count처리시 if문 동기화가 되지않는 문제로, useEffect에서 count처리 */
  const handleOnEnded = () => {
    if (_ref.current) {
      if (count - 1 <= 0) {
        /** _ref.current사용해도 되나, 하단 icon변경을 위해 play state 사용 */
        setPlay(false)
        /** 추가 event가 있을 시, 실행 */
        if (handleOnEndedEvent) {
          handleOnEndedEvent()
          return
        }
      } else {
        _ref.current.currentTime = 0
        _ref.current.play()
        setCount(count - 1)
      }
    } else {
      throw new Error("audio ref not existed")
    }
  }

  /** audio load */
  useEffect(() => {
    if (_ref.current) {
      _ref.current.load()
      setPlay(false)
    }
  }, [value])

  useEffect(() => {
    if (_ref.current) {
      if (play) {
        _ref.current.play()
        console.log("why?")
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
