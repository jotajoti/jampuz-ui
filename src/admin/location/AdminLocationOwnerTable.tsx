import {Trans} from "@lingui/macro";

import {stringSort, Table, TableDef} from "../../components/table";
import {ArrayElement} from "../../utils";
import {FragmentType, GetAdminLocationOwnersFragmentDoc, useFragment} from "../../gql";

type AdminLocationOwnerTableProps = {
    getAdminLocationOwnerFragment: FragmentType<typeof GetAdminLocationOwnersFragmentDoc>
}

export const AdminLocationOwnerTable = ({getAdminLocationOwnerFragment}: AdminLocationOwnerTableProps) => {
    const getAdminLocationOwners = useFragment(GetAdminLocationOwnersFragmentDoc, getAdminLocationOwnerFragment);

    const owners = getAdminLocationOwners.owners!;
    const ownerTable: TableDef<ArrayElement<typeof owners>> = {
        data: owners,
        defaultSortColumn: "name",
        columns: [{
            key: "name",
            header: <Trans>Name</Trans>,
            getValue: owner => owner.name,
            sort: stringSort(owner => owner.name),
            sortAscendingDefault: true,
        }]
    };

    return (
        <Table tableDef={ownerTable}/>
    );
}