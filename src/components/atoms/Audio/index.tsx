import React, { forwardRef } from "react"

import { IAudio } from "./types"

const AudioComponent: React.FC<IAudio> = (
  { src = "/musics/beautiful_piano.mp3", onEnded },
  ref
) => {
  /** play audio from isPlaying status */

  return (
    <audio onEnded={onEnded} ref={ref}>
      <source src={src} />
    </audio>
  )
}

export default forwardRef(AudioComponent)
