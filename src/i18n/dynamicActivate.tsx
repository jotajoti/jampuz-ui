import {i18n} from "@lingui/core";

export const locales = [
    "en",
    "da",
]

export const defaultLocale = "en";

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export const dynamicActivate = async (locale: string) => {
    const {messages} = await import(`./locales/${locale}.ts`);
    i18n.load(locale, messages);
    i18n.activate(locale);
}
