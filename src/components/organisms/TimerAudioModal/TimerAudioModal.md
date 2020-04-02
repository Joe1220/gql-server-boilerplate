placeholder:

```jsx
import React, { useState } from "react"

import TimerAudioModal from "./"

const [show, setShow] = useState(false)
const handleShow = () => {
  setShow(!show)
}
const handleClose = () => {
  setShow(false)
}
;<div>
  <button onClick={handleShow}>toggle audio modal</button>
  <TimerAudioModal isShow={show} handleClose={handleClose} milliseconds={1000} />
</div>
```
