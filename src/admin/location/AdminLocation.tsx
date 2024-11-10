import {useEffect} from "react";
import {Trans} from "@lingui/macro";
import {useLoaderData} from "react-router-dom";

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
        <Dashboard columns={3} widgets={[{
            key: "events",
            title: <Trans>Events</Trans>,
            content: <AdminLocationEventTable getAdminLocationEventsFragment={loaderData.location!}/>,
            span: 2,
        }, {
            key: "owners",
            title: <Trans>Owners</Trans>,
            content: <AdminLocationOwnerTable getAdminLocationOwnerFragment={loaderData.location!}/>,
        }]}/>
    )
}