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
import { useMounted } from "@casper124578/useful/hooks/useMounted";

const Component = () => {
  const mounted = useMounted();
  console.log("Mounted?", mounted);

  return <p>Hello world!</p>;
};
```

## Available hooks

- [`useDots.ts`](./docs/hooks/dots)
- [`useDownload.ts`](./docs/hooks/download)
- [`useEmitEvent.ts`](./docs/hooks/emit-event)
- [`useMounted.ts`](./docs/hooks/mounted)
- [`useNetworkStatus.ts`](./docs/hooks/network-status)
- [`usePortal.ts`](./docs/hooks/portal)
- [`useSearch.ts`](./docs/hooks/search)
- [`useSound.ts`](./docs/hooks/sound)
- [`useTabFocus.ts`](./docs/hooks/tab-focus)
- [`useViewport.ts`](./docs/hooks/viewport)
- [`useWindowEvent.ts`](./docs/hooks/window-event)
