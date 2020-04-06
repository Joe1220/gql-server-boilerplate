Basic Usage:

```jsx
import Modal from "./"
import React, { useState } from "react"
import Icon from "src/components/atoms/BaseIcon"
const [show, setShow] = useState(false)
const handleShow = () => {
  setShow(!show)
}
;<div>
  <button onClick={handleShow}>test button</button>
  <Modal isShow={show} handleClose={handleShow}>
    <Icon icon="window-close" onClick={handleShow} />
    <div>test</div>
  </Modal>
</div>
```
