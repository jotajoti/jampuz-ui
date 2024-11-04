import {useQuery} from "urql";

import {FooterQueryDocument} from "../gql";
import {ThemeSelector} from "./ThemeSelector.tsx";

export const Footer = () => {
    const [{data}] = useQuery({
        query: FooterQueryDocument
    });

    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="grid-flow-col items-center">
                © 2020-{new Date().getFullYear()}

                <ThemeSelector/>
            </aside>
            <nav className="grid-flow-col gap-4 place-self-center justify-self-end hidden md:block">
                Client version: {APP_VERSION} -
                Server version: {data?.serverVersion}
            </nav>
        </footer>
    )
}
