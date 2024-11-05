import {useQuery} from "urql";
import {Trans} from "@lingui/macro";

import {FooterQueryDocument} from "../gql";
import {ThemeSelector} from "./ThemeSelector.tsx";

export const Footer = () => {
    const [{data}] = useQuery({
        query: FooterQueryDocument
    });

    const uiVersion =
        <a href={`https://github.com/jotajoti/jampuz-ui/releases/tag/v${APP_VERSION}`}
           target="_blank"
           className="link"
           rel="noopener noreferrer">
            {APP_VERSION}
        </a>

    const serverVersion =
        <a href={`https://github.com/jotajoti/jampuz-server/releases/tag/v${data?.serverVersion}`}
           target="_blank"
           className="link"
           rel="noopener noreferrer">
            {data?.serverVersion}
        </a>

    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="grid-flow-col items-center">
                © 2020-{new Date().getFullYear()}

                <ThemeSelector/>
            </aside>
            <nav className="grid-flow-col gap-4 place-self-center justify-self-end hidden md:block">
                <Trans>Client version: {uiVersion}</Trans> -
                <Trans>Server version: {serverVersion}</Trans>
            </nav>
        </footer>
    )
}
