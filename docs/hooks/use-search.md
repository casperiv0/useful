# useSearch

search through an array with the provided key.

Returns an `onChange` function and `value` to bind to a input field.

Returns `filtered` with the filtered data.

## Example

```tsx
import { useSearch } from "@casperiv/useful/hooks/useSearch";

interface MyData {
  name: string;
  age: string;
}

const Component = () => {
  const { onChange, search, filtered } = useSearch<MyData>("name", myDataArr);

  return (
    <div>
      <input value={search} onChange={onChange} className="search-value" />

      <div className="my-results">
        {filtered.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
```
