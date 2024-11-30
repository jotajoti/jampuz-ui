import {Link} from "react-router";
import {Trans} from "@lingui/react/macro";

import {numberSort, stringSort, Table, TableDef} from "../../components/table";
import {ArrayElement} from "../../utils";
import {FragmentType, GetAdminLocationsFragmentDoc, useFragment} from "../../gql";

type AdminLocationTableProps = {
    getAdminLocationsFragment: FragmentType<typeof GetAdminLocationsFragmentDoc>
}

export const AdminLocationTable = ({getAdminLocationsFragment}: AdminLocationTableProps) => {
    const getAdminLocations = useFragment(GetAdminLocationsFragmentDoc, getAdminLocationsFragment);

    const locations = getAdminLocations.locations!;
    const locationTable: TableDef<ArrayElement<typeof locations>> = {
        data: locations,
        defaultSortColumn: "name",
        columns: [{
            key: "name",
            header: <Trans>Name</Trans>,
            getValue: location => (
                <Link className="link" to={`/admin/locations/${location.id}`}>{location.name}</Link>
            ),
            sort: stringSort(location => location.name),
            sortAscendingDefault: true,
        }, {
            key: "eventCount",
            header: <Trans>Event #</Trans>,
            getValue: location => location.events.length,
            sort: numberSort(location => location.events.length),
            sortAscendingDefault: false,
        }, {
            key: "latestEvent",
            header: <Trans>Latest Event</Trans>,
            getValue: location => (
                location.latestEvent &&
                <Link className="link" to={`/admin/locations/${location.id}/events/${location.latestEvent.id}`}>{location.latestEvent.year}</Link>
            ),
            sort: numberSort(location => location.latestEvent ? location.latestEvent.year : 0),
            sortAscendingDefault: false,
        }]
    }

    return (
        <Table tableDef={locationTable}/>
    );
}
