Basic Usage:

```jsx
import { useState } from "react"
import TimerForm from "./"
import "src/styles/base/_fonts.scss"

const totalMilliseconds = 666666
;<TimerForm totalMilliseconds={totalMilliseconds} />

const [show, setShow] = useState(false)
const handleShow = () => {
  setShow(!show)
}
const handleClose = () => {
  setShow(false)
}
;<div>
  <button onClick={handleShow}>toggle timer modal</button>
  <TimerForm isShow={show} handleClose={handleClose} totalMilliseconds={totalMilliseconds} />
</div>
```
