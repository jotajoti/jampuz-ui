import {useEffect} from "react";
import {Link, Outlet, useLoaderData} from "react-router-dom";
import {t, Trans} from "@lingui/macro";
import {PlusIcon} from "@heroicons/react/24/solid";

import {Dashboard} from "../../components/Dashboard.tsx";
import {AdminOverviewQuery} from "../../gql";
import {AdminLocationTable} from "../location";
import {useAdminContext} from "../adminContext.ts";

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

            <div className="toast mb-14">
                <div className="tooltip tooltip-left" data-tip={t`Add location`}>
                    <Link to="/admin/locations/new" className="btn btn-primary btn-circle">
                        <PlusIcon className="size-7"/>
                    </Link>
                </div>
            </div>

            <Outlet/>
        </div>
    );
}