import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default {
    plugins: [require.resolve("@prettier/plugin-xml"), require.resolve("prettier-plugin-yaml")]
};
