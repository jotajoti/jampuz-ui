import {Trans} from "@lingui/macro";

import {ThemeSelector} from "./ThemeSelector.tsx";
import {FragmentType, GetFooterFragmentDoc, useFragment} from "../gql";
import {LanguageSelector} from "./LanguageSelector.tsx";

type FooterProps = {
    getFooterFragment: FragmentType<typeof GetFooterFragmentDoc>
}

export const Footer = ({getFooterFragment}: FooterProps) => {
    const getFooter = useFragment(GetFooterFragmentDoc, getFooterFragment);

    const uiVersion =
        <a href={`https://github.com/jotajoti/jampuz-ui/releases/tag/v${APP_VERSION}`}
           target="_blank"
           className="link"
           rel="noopener noreferrer">
            {APP_VERSION}
        </a>

    const serverVersion =
        <a href={`https://github.com/jotajoti/jampuz-server/releases/tag/v${getFooter?.serverVersion}`}
           target="_blank"
           className="link"
           rel="noopener noreferrer">
            {getFooter?.serverVersion}
        </a>

    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="grid-flow-col items-center">
                © 2020-{new Date().getFullYear()}

                <ThemeSelector/>
                <LanguageSelector/>
            </aside>
            <nav className="grid-flow-col gap-4 place-self-center justify-self-end hidden md:block">
                <Trans>Client version: {uiVersion}</Trans> -
                <Trans>Server version: {serverVersion}</Trans>
            </nav>
        </footer>
    )
}
