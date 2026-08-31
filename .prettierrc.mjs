import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export default {
    plugins: [require.resolve("@prettier/plugin-xml"), require.resolve("prettier-plugin-yaml")],
    overrides: [
        { files: ["*.index"], options: { parser: "xml", xmlQuoteAttributes: "double", xmlSortAttributesByKey: true, xmlWhitespaceSensitivity: "ignore", printWidth: 9999 } },
        { files: ["*.xml"], options: { xmlQuoteAttributes: "double", xmlSortAttributesByKey: true, xmlWhitespaceSensitivity: "ignore", printWidth: 9999 } },
        { files: ["*.yml"], options: { yamlBlockStyle: "folded", yamlCollectionStyle: "block", yamlQuoteValues: true, printWidth: 4 } },
        { files: ["*.yaml"], options: { yamlBlockStyle: "folded", yamlCollectionStyle: "block", yamlQuoteValues: true, printWidth: 4 } },
        { files: ["*.md"], options: { printWidth: 180 } },
        { files: ["*.mjs"], options: { printWidth: 200 } }
    ],

    printWidth: 160,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,
    requirePragma: false,
    bracketSameLine: true,
    bracketSpacing: true,
    trailingComma: "none",
    objectWrap: "collapse",
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf"
};
