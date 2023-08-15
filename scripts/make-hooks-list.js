import { readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const HOOKS_PATH = resolve(process.cwd(), "src", "hooks");
const README_PATH = resolve(process.cwd(), "README.md");
const DOCS_README_PATH = resolve(process.cwd(), "docs", "README.md");
const EXPORT_CODE_PATH = resolve(process.cwd(), "src", "hooks", "index.ts");

let EXPORT_CODE = "";

let DOCS_README = `# Documentation

## Available hooks

`;

let DEFAULT_MARKDOWN = `# useful

List of useful React functions and hooks

## install

### npm

\`\`\`bash
npm install @casperiv/useful
\`\`\`

### Yarn

\`\`\`bash
yarn add @casperiv/useful
\`\`\`

## Usage

\`\`\`tsx
import { useMounted } from "@casperiv/useful/hooks/useMounted";

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
 * @param {boolean} isDocs
 */
function makeMarkdownURL(hook, isDocs) {
  const beatifiedName =
    hook
      .match(/[A-Z][a-z]+/g)
      ?.join("-")
      .toLowerCase() ?? hook;

  const fileName = `use-${beatifiedName}.md`;
  const baseDir = isDocs ? "./hooks/" : "./docs/hooks/";

  return `- [\`${hook}\`](${baseDir}${fileName})\n`;
}

/**
 * @param {string} hook
 */
function makeExportCode(hook) {
  const fileName = hook.replace(".ts", "");
  return `export { ${fileName} } from "./${fileName}.js";\n`;
}

for (const hook of hooks) {
  const md = makeMarkdownURL(hook);
  const docs = makeMarkdownURL(hook, true);

  let exportCode;
  if (!["index.ts"].includes(hook)) {
    exportCode = makeExportCode(hook);
  }

  DOCS_README += docs;
  DEFAULT_MARKDOWN += md;
  EXPORT_CODE += exportCode;
}

await Promise.all([
  writeFile(README_PATH, DEFAULT_MARKDOWN),
  writeFile(DOCS_README_PATH, DOCS_README),
  writeFile(EXPORT_CODE_PATH, EXPORT_CODE),
]);
