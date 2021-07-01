# Changelog

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
