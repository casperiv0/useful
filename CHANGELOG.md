# Changelog

## 2.0.6

- bump dependencies
- `react` & `react-dom` peerDeps only

## 2.0.5

- bump dependencies

## 2.0.4

- build(deps-dev): bump @types/react from 18.0.15 to 18.0.18 by @dependabot in https://github.com/Dev-CasperTheGhost/useful/pull/61
- build(deps-dev): bump eslint from 8.21.0 to 8.23.0 by @dependabot in https://github.com/Dev-CasperTheGhost/useful/pull/60
- build(deps-dev): bump typescript from 4.7.4 to 4.8.2 by @dependabot in https://github.com/Dev-CasperTheGhost/useful/pull/59
- bump dependencies

## 2.0.3

- build(deps-dev): bump eslint from 8.18.0 to 8.20.0 by @dependabot in https://github.com/Dev-CasperTheGhost/useful/pull/58
- build(deps-dev): bump @types/react from 18.0.14 to 18.0.15 by @dependabot in https://github.com/Dev-CasperTheGhost/useful/pull/57
- bump dependencies

## 2.0.2

- Bump dependencies

## 2.0.1

- fix examples

## 2.0.0

- Bump dependencies

**BREAKING:**

- Replace `useWindowEvent` with [`useEventListener.ts`](./docs/hooks/use-event-listener.md)

## 1.6.0

- Support React 18

## 1.5.6

- Bump dependencies
- Minor code improvements

## 1.5.5

- Fix: export from `.js`

## 1.5.4

- Fix exported hooks from index

## 1.5.3

- Update documentation
- Update README.md

## 1.5.2

- Bump dependencies
- Minor code improvements

## 1.5.0

- Bump dependencies
- Add `useViewport` hook

## 1.4.6

- Bump dependencies

## 1.4.5

- Bump dependencies

## 1.4.4

## 1.4.3

- Bump dependencies

## 1.4.2

- Bump dependencies

## 1.4.0

- Add `useDownload` hook
- Bump dependencies

## 1.3.0

- Add `useTabFocus` hook

## 1.2.0

- [add docs](https://dev-caspertheghost.github.io/useful/)
- Export `useDots` in `hooks/index`
- Add event type for `useWindowEvent`

## 1.1.0

- Add `useDots` hook

## 1.0.1

- Bump dependencies

## 1.0.0

- Require node 12.20
- This package is now ESM only. Please [Read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- Bump dependencies

## 0.0.15

- Fix comments language
- Remove `removeComments` from tsconfig

## 0.0.14

- Bump dependencies

## 0.0.13

- Bump dependencies

## 0.0.12

- Fix allow setting type for `onChange` method (eg: `HTMLInputElement`, `HTMLTextAreaElement`)

**Example:**

```tsx
const Component = () => {
  const { search, onChange, filtered } = useSearch<any, HTMLTextAreaElement>("age", [
    { age: 1 },
    { age: 4 },
    { age: 22 },
  ]);

  console.log(filtered);

  return (
    <div>
      {/* this now works! */}
      <textarea value={search} onChange={onChange} />
    </div>
  );
};
```

## 0.0.11

- Bump dependencies
- Add `format` script
- Fix `React.useEffect` dependencies array

## 0.0.10

- Added [custom ESLint config](https://github.com/dev-caspertheghost/eslint-config)

## 0.0.9

- Added `useEmitEvent` hook

## 0.0.8

- Added `useWindowEvent` hook

## 0.0.7

- Added `useSound` hook
- Added examples for `useSearch` and `useMounted`

## 0.0.6

- version was skipped.

## 0.0.5

- Fixed imports

## 0.0.4

- Minor fixes
- Fixed imports

## 0.0.3

- Minor fixes

## 0.0.2

- Updated NPM info
- Updated README.md

## 0.0.1

- Added hooks: `usePortal`, `useNetworkStatus`, `useMounted`, `useSearch`
- Initial
