Basic Usage:

```jsx
import React, { useState } from "react"
import Audio from "./"
import { useAudioHooks } from "src/components/atoms/Audio/hooks"

const { _ref, play, handlePlay, handleOnEnded } = useAudioHooks({})

;<div>
  <button onClick={handlePlay}>play audio</button>
  <Audio isPlaying={play} src={"/musics/beautiful_piano.mp3"} ref={_ref} />
</div>
```
