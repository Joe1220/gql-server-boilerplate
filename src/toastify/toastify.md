info:

```jsx
import ToastifyContainer from "./"
import { toast } from "react-toastify"

const _default = () => toast("Wow so easy !")
const _notify = () => toast.info("Wow so easy !")
const _warn = () => toast.warn("Wow so easy !")
const _success = () => toast.success("Wow so easy !")
const _error = () => toast.error("Wow so easy !")

;<div>
  <ToastifyContainer />
  <button onClick={_default}>default</button>
  <br />
  <button onClick={_notify}>info</button>
  <br />
  <button onClick={_warn}>warn</button>
  <br />
  <button onClick={_success}>success</button>
  <br />
  <button onClick={_error}>error</button>
</div>
```
