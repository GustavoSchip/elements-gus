import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default {
    plugins: [require.resolve("@prettier/plugin-xml"), require.resolve("prettier-plugin-yaml")],
    overrides: [
        {
            files: ["*.xml", "*.index"],
            options: {
                parser: "xml",
                objectWrap: "collapse",
                printWidth: 9999
            }
        },
        {
            files: ["*.yml"],
            options: {
                objectWrap: "collapse",
                printWidth: 4
            }
        },
        {
            files: ["*.md"],
            options: {
                printWidth: 180
            }
        },
        {
            files: ["*.mjs"],
            options: {
                printWidth: 200
            }
        }
    ],

    printWidth: 160,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,
    requirePragma: false,
    bracketSameLine: true,
    bracketSpacing: true,
    trailingComma: "none",
    objectWrap: "preserve",
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf"
};
