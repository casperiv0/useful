# useDownload

Returns a function that can be called to download a file to a user.

## Example

```tsx
import * as React from "react";
import { useDownload } from "@casper124578/useful/hooks/useDownload";

const Component = () => {
  const download = useDownload();

  function handleDownload() {
    const json = {
      hello: "world",
    };

    download({
      filname: "myfile.json",
      data: JSON.stringify(json, null, 2),
    });
  }

  return <button onClick={handleDownload}>Click me!</button>;
};
```
