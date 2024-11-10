import {useLoaderData} from "react-router-dom";
import {Trans} from "@lingui/macro";

import {Dashboard} from "../../components/Dashboard.tsx";
import {AdminOverviewQuery} from "../../gql";
import {AdminLocationTable} from "../location";
import {useAdminContext} from "../adminContext.ts";
import {useEffect} from "react";

export const AdminOverview = () => {
    const loaderData = useLoaderData() as AdminOverviewQuery;

    const {setNavigationCenter, setNavigationButtons} = useAdminContext();

    useEffect(() => {
        setNavigationCenter(null);
        setNavigationButtons([]);
    }, [setNavigationCenter, setNavigationButtons]);

    return (
        <div>
            <Dashboard columns={1} widgets={[{
                key: "locations",
                title: <Trans>Locations</Trans>,
                content: <AdminLocationTable getAdminLocationsFragment={loaderData}/>
            }]}/>
        </div>
    );
}