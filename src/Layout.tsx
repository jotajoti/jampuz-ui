import {ReactNode} from "react";

import {NavigationBar} from "./components/NavigationBar.tsx";
import {Footer} from "./components/Footer.tsx";
import {FragmentType, GetFooterFragmentDoc} from "./gql";

type LayoutProps = {
    children: ReactNode
    navigationStart: ReactNode
    navigationCenter?: ReactNode
    navigationEnd?: ReactNode
    subNav?: ReactNode
    getFooterFragment: FragmentType<typeof GetFooterFragmentDoc>
}

export const Layout = (props: LayoutProps) => {
    const {children, navigationStart, navigationCenter, navigationEnd, subNav, getFooterFragment} = props;

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-base-100 bg-striped">
            <NavigationBar start={navigationStart} center={navigationCenter} end={navigationEnd}/>

            {subNav}

            <main className="flex flex-1 flex-col justify-between overflow-x-auto p-4">
                {children}
            </main>

            <Footer getFooterFragment={getFooterFragment}/>
        </div>
    );
}
