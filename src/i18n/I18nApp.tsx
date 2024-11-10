import {i18n} from "@lingui/core";
import {I18nProvider} from "@lingui/react";
import {ReactNode, useEffect} from "react";
import {detectLanguage, dynamicActivate} from "./dynamicActivate.tsx";

type I18nAppProps = {
    children: ReactNode
}

export const I18nApp = ({children}: I18nAppProps) => {

    const language = detectLanguage();

    useEffect(() => {
        dynamicActivate(language);
    }, [language]);

    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    );
}
