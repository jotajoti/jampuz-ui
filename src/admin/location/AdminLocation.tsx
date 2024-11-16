import {useEffect} from "react";
import {t, Trans} from "@lingui/macro";
import {Link, Outlet, useLoaderData} from "react-router-dom";
import {PlusIcon} from "@heroicons/react/24/solid";

import {Dashboard} from "../../components/Dashboard.tsx";
import {GetAdminLocationQuery} from "../../gql";
import {AdminLocationEventTable} from "./AdminLocationEventTable.tsx";
import {AdminLocationOwnerTable} from "./AdminLocationOwnerTable.tsx";
import {useAdminContext} from "../adminContext.ts";

export const AdminLocation = () => {
    const {setNavigationCenter, setNavigationButtons} = useAdminContext();

    const loaderData = useLoaderData() as GetAdminLocationQuery;

    useEffect(() => {
        setNavigationCenter(<div className="text-lg">{loaderData.location?.name}</div>)
        setNavigationButtons([]);
    }, [setNavigationCenter, setNavigationButtons, loaderData]);

    return (
        <>
            <Dashboard columns={3} widgets={[{
                key: "events",
                title: <Trans>Events</Trans>,
                content: <AdminLocationEventTable locationId={loaderData.location!.id}
                                                  getAdminLocationEventsFragment={loaderData.location!}/>,
                span: 2,
            }, {
                key: "owners",
                title: <Trans>Owners</Trans>,
                content: <AdminLocationOwnerTable getAdminLocationOwnerFragment={loaderData.location!}/>,
            }]}/>

            <div className="toast mb-14">
                <div className="tooltip tooltip-left" data-tip={t`Add event`}>
                    <Link to={`/admin/locations/${loaderData.location?.id}/events/new`}
                          className="btn btn-primary btn-circle">
                        <PlusIcon className="size-7"/>
                    </Link>
                </div>
            </div>

            <Outlet/>
        </>
    )
}