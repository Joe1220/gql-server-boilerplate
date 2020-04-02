Base Select:

react-select library

```jsx
import Select from "./"
const textOptions = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "hamster", label: "Hamster" }
]

const customClick = event => {
  console.log("test")
}

;<div>
  <Select
    placeholder="test"
    options={textOptions}
    placeholder={"select your value"}
    onEnded={customClick}
  />
</div>
```
