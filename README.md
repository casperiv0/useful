# useful

List of useful React functions and hooks

## install

### npm

```bash
npm install @casper124578/useful
```

### Yarn

```bash
yarn add @casper124578/useful
```

## Usage

```tsx
import { useMounted } from "@casper124578/useful/useMounted";

const Component = () => {
  const mounted = useMounted();
  console.log("Mounted?", mounted);

  return <p>Hello world!</p>;
};
```
