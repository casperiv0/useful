import { readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const HOOKS_PATH = resolve(process.cwd(), "src", "hooks");
const README_PATH = resolve(process.cwd(), "README.md");

let DEFAULT_MARKDOWN = `# useful

List of useful React functions and hooks

## install

### npm

\`\`\`bash
npm install @casper124578/useful
\`\`\`

### Yarn

\`\`\`bash
yarn add @casper124578/useful
\`\`\`

## Usage

\`\`\`tsx
import { useMounted } from "@casper124578/useful/hooks/useMounted";

const Component = () => {
  const mounted = useMounted();
  console.log("Mounted?", mounted);

  return <p>Hello world!</p>;
};
\`\`\`

## Available hooks

`;

const hooks = (await readdir(HOOKS_PATH)).filter((v) => v !== "index.ts");

/**
 * @param {string} hook
 */
function makeMarkdownURL(hook) {
  const beatifiedName =
    hook
      .match(/[A-Z][a-z]+/g)
      ?.join("-")
      .toLowerCase() ?? hook;
  return `- [\`${hook}\`](./docs/hooks/${beatifiedName}.md)\n`;
}

for (const hook of hooks) {
  const md = makeMarkdownURL(hook);
  DEFAULT_MARKDOWN += md;
}

await writeFile(README_PATH, DEFAULT_MARKDOWN);
