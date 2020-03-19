import { useEffect, RefObject } from "react"

export const useOutsideClick = <T extends HTMLDivElement>(
  _event: any,
  _ref: RefObject<T | null>
) => {
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
  }, [])
}
