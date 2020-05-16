can move:

```jsx
import TextArea from "./"
;<div>
  <TextArea placeholder="test" onChange={() => null} />
</div>
```

fixed:

```jsx
import TextArea from "./"
;<div>
  <TextArea value="test" onChange={() => null} notResize />
</div>
```
