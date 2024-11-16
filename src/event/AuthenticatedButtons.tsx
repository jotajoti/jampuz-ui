import {ReactNode} from "react";
import {Link} from "react-router-dom";
import {Trans} from "@lingui/macro";
import {UserIcon} from "@heroicons/react/24/solid";

import {AddJidCodeButton} from "./AddJidCode.tsx";
import {GetEventQuery} from "../gql";
import {isAdminAuthenticated} from "./authenticationUtils.ts";

type AuthenticatedButtonsProps = {
    data: GetEventQuery
    reloadEvent: () => void
}

export const AuthenticatedButtons = ({data, reloadEvent}: AuthenticatedButtonsProps) => {
    const dropdownLinks: ReactNode[] = [];

    if (isAdminAuthenticated(data)) {
        dropdownLinks.push(
            <Link to={`/admin/locations/${data.event?.location.id}/events/${data.event?.id}`}>
                <Trans>Admin</Trans>
            </Link>
        );
    }

    dropdownLinks.push(
        <Link to={isAdminAuthenticated(data) ? "/admin/logout" : `/${data.event?.code.value}/logout`}>
            <Trans>Logout</Trans>
        </Link>
    );

    return (
        <>
            <AddJidCodeButton eventId={data.event!.id} reloadEvent={reloadEvent}/>

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                    <div className="bg-accent text-accent-content w-10 rounded-full">
                        <UserIcon className="size-6"/>
                    </div>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-[2] mt-3 w-52 p-2 shadow">
                    {dropdownLinks.map((dropdownLink, i) => (
                        <li key={i}>{dropdownLink}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}