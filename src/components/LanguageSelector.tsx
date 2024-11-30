import {useState} from "react";
import {t} from "@lingui/core/macro";
import {Trans} from "@lingui/react/macro";
import {detectLanguage, dynamicActivate, locales} from "../i18n";
import {translateLanguage} from "../utils/languages.tsx";

export const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(localStorage.getItem("lang"));

    const changeLanguage = async (language: string | null) => {
        if (language) {
            localStorage.setItem("lang", language);
            await dynamicActivate(language);
        } else {
            localStorage.removeItem("lang");
            await dynamicActivate(detectLanguage());
        }
        setSelectedLanguage(language);
    }

    return (
        <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button"><Trans>Language</Trans></div>
            <ul tabIndex={0}
                className="dropdown-content menu bg-neutral rounded-box z-[1] max-h-[calc(100vh-10rem)] w-80 overflow-y-auto p-2 shadow">
                <li>
                    <input
                        type="radio"
                        name="language-dropdown"
                        onChange={() => changeLanguage(null)}
                        checked={selectedLanguage === null}
                        className="theme-controller btn btn-sm btn-block btn-neutral justify-start"
                        aria-label={t`Auto`}/>
                </li>
                {locales.map((language, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            name="language-dropdown"
                            onChange={() => changeLanguage(language)}
                            checked={selectedLanguage === language}
                            className="theme-controller btn btn-sm btn-block btn-neutral justify-start"
                            aria-label={translateLanguage(language)}
                            value={translateLanguage(language)}/>
                    </li>
                ))}
            </ul>
        </div>
    );

}
