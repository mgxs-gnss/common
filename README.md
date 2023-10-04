# MGXS Common library

- Creates Material-UI default theme
- Spritesheet Loader Component

more to come

## Install on another React project

```sh
npm add @mgxs/common @emotion/react @emotion/styled @mui/material
```

## Usage

### Theme

On your `index.tsx` file from your React project add

```ts
import { Theme } from "@mgxs/common";
import ReactDOM from "react-dom/client";
import { App } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Theme>
    <App />
  </Theme>
);
```

### Loader

```ts
import { Loader } from "@mgxs/common";

const Page = () => {
  return <Loader scale={2} />;
};
```
