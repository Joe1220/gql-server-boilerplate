import React, { forwardRef, useEffect } from "react"

import { IAudio } from "./types"

const AudioComponent: React.FC<IAudio> = (
  { src = "/musics/beautiful_piano.mp3", onEnded },
  ref
) => {
  /** play audio from isPlaying status */
  /** audio load */
  useEffect(() => {
    if (ref.current) {
      ref.current.load()
    }
  }, [src])
  return (
    <audio onEnded={onEnded} ref={ref}>
      <source src={src} />
    </audio>
  )
}

export default forwardRef(AudioComponent)
