placeholder:

```jsx
import React, { useState } from "react"

import RequestModal from "./"

const [show, setShow] = useState(false)
const handleShow = () => {
  setShow(!show)
}
const handleClose = () => {
  setShow(false)
}
;<div>
  <button onClick={handleShow}>toggle request modal</button>
  <RequestModal isShow={show} handleClose={handleClose} />
</div>
```
