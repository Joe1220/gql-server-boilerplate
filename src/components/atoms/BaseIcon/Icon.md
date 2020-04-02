Basic Usage:

```jsx
import React from "react"
import Icon from "./"
;<div>
  <Icon icon="adjust" size="sm" />
  <Icon icon="adjust" />
  <Icon icon="adjust" size="lg" />
</div>
```

Event Icon:

```jsx
;<Icon icon="adjust" onClick={() => window.alert("test")} />
```

Warning:
사용 시 Icon컴포넌트 내부 사용할 icon의 객체 import, add필요
예시:

```jsx static
import { faCheckSquare, faAdjust } from "@fortawesome/free-solid-svg-icons"

library.add(faCheckSquare, faAdjust)
```

이후에 외부 file에서 string props로 사용 가능.

```jsx static
<Icon icon="adjust" />
```
