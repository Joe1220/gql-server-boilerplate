import { useEffect } from "react"

export const useOutsideClick = <T extends HTMLDivElement>(
  _ref: React.RefObject<T>,
  _event: any
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
  })
}
