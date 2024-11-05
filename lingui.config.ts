import type {LinguiConfig} from "@lingui/conf";

const config: LinguiConfig = {
    locales: ["en", "da"],
    sourceLocale: "en",
    catalogs: [
        {
            path: "<rootDir>/src/i18n/locales/{locale}",
            include: ["src"],
        },
    ],
};

export default config;
