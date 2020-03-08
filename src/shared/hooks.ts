import { useEffect, useRef } from "react"

export const useOutsideClick = (_event: any) => {
  const _ref = useRef<HTMLDivElement>(null)
  const handleOutsideClick = (event: any) => {
    event.preventDefault()
    if (_ref.current && !_ref.current.contains(event.target)) {
      _event()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  })
  return { _ref }
}
