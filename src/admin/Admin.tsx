import {ReactNode, useState} from "react";
import {Link, Outlet, useLoaderData} from "react-router";

import {Layout} from "../Layout.tsx";
import {DefaultNavTitle} from "../components/DefaultNavTitle.tsx";
import {AdminContext} from "./adminContext.ts";
import {AdminQuery} from "../gql";
import {UserIcon} from "@heroicons/react/24/solid";
import {Trans} from "@lingui/macro";
import {ArrowRightStartOnRectangleIcon, UserCircleIcon} from "@heroicons/react/24/outline";

export const Admin = () => {
    const [navigationCenter, setNavigationCenter] = useState<ReactNode | null>(null);
    const [navigationButtons, setNavigationButtons] = useState<ReactNode[]>([]);

    const loaderData = useLoaderData() as AdminQuery;

    const adminContext: AdminContext = {
        setNavigationCenter,
        setNavigationButtons,
        admin: loaderData.authenticatedAdmin!,
    };

    const navigationEnd = (
        <>
            {navigationButtons.map((navigationButton, i) => (
                <div key={i}>{navigationButton}</div>
            ))}

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                    <div className="bg-accent text-accent-content w-10 rounded-full">
                        <UserIcon className="size-6"/>
                    </div>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 text-base-content border rounded-box z-[2] mt-3 w-52 p-2 shadow">
                    <li>
                        <Link to="/admin/profile" className="flex">
                            <div className="grow"><Trans>Profile</Trans></div>
                            <UserCircleIcon className="size-5"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/logout" className="flex">
                            <div className="grow"><Trans>Logout</Trans></div>
                            <ArrowRightStartOnRectangleIcon className="size-5"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <Layout
            navigationStart={<DefaultNavTitle to="/admin"/>}
            navigationCenter={navigationCenter}
            navigationEnd={navigationEnd}
            getFooterFragment={loaderData}
        >
            <Outlet context={adminContext}/>
        </Layout>
    );
}

