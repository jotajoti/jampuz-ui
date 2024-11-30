import {t} from "@lingui/core/macro";

export const translateLanguage = (languageCode: string): string => {
    switch (languageCode.toUpperCase()) {
        case "DA":
            return t`Danish`;
        case "EN":
            return t`English`;
        default:
            return languageCode.toUpperCase();
    }
}
