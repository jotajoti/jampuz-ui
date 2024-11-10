import {i18n} from "@lingui/core";
import {detect, fromNavigator, fromStorage} from "@lingui/detect-locale";

export const locales = [
    "en",
    "da",
];

const DEFAULT_FALLBACK = () => "en";
export const detectLanguage = () => detect(fromStorage("lang"), fromNavigator(), DEFAULT_FALLBACK)!;

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export const dynamicActivate = async (locale: string) => {
    const {messages} = await import(`./locales/${locale}.ts`);
    i18n.load(locale, messages);
    i18n.activate(locale);
}
