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

- [`useDots.ts`](./docs/hooks/use-dots.md)
- [`useDownload.ts`](./docs/hooks/use-download.md)
- [`useEmitEvent.ts`](./docs/hooks/use-emit-event.md)
- [`useEventListener.ts`](./docs/hooks/use-event-listener.md)
- [`useMounted.ts`](./docs/hooks/use-mounted.md)
- [`useNetworkStatus.ts`](./docs/hooks/use-network-status.md)
- [`usePortal.ts`](./docs/hooks/use-portal.md)
- [`useSearch.ts`](./docs/hooks/use-search.md)
- [`useSound.ts`](./docs/hooks/use-sound.md)
- [`useTabFocus.ts`](./docs/hooks/use-tab-focus.md)
- [`useViewport.ts`](./docs/hooks/use-viewport.md)
