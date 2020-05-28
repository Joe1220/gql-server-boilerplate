import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const _ToastifyContainer: React.FC = () => {
  return (
    <ToastContainer position="bottom-right" closeOnClick pauseOnFocusLoss draggable pauseOnHover />
  )
}

export default _ToastifyContainer
