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

- [`useDots.ts`](./docs/hooks/dots.md)
- [`useDownload.ts`](./docs/hooks/download.md)
- [`useEmitEvent.ts`](./docs/hooks/emit-event.md)
- [`useMounted.ts`](./docs/hooks/mounted.md)
- [`useNetworkStatus.ts`](./docs/hooks/network-status.md)
- [`usePortal.ts`](./docs/hooks/portal.md)
- [`useSearch.ts`](./docs/hooks/search.md)
- [`useSound.ts`](./docs/hooks/sound.md)
- [`useTabFocus.ts`](./docs/hooks/tab-focus.md)
- [`useViewport.ts`](./docs/hooks/viewport.md)
- [`useWindowEvent.ts`](./docs/hooks/window-event.md)
