Basic Usage:

```jsx
import React, { useState } from "react"
import Audio from "./"

const [play, setPlay] = useState(false)
const customClick = () => {
  console.log("w")
  setPlay(!play)
}

;<div>
  <button onClick={customClick}>play audio</button>
  <Audio isPlaying={play} src={"/musics/beautiful_piano.mp3"} />
</div>
```
