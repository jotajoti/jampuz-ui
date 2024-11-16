import {t, Trans} from "@lingui/macro";

import {numberSort, stringSort, Table, TableDef} from "../../components/table";
import {ArrayElement} from "../../utils";
import {FragmentType, GetAdminLocationEventsFragmentDoc, useFragment} from "../../gql";
import {Link} from "react-router-dom";
import {RocketLaunchIcon, StopIcon} from "@heroicons/react/16/solid";

type AdminLocationEventTableProps = {
    getAdminLocationEventsFragment: FragmentType<typeof GetAdminLocationEventsFragmentDoc>
}

export const AdminLocationEventTable = ({getAdminLocationEventsFragment}: AdminLocationEventTableProps) => {
    const getAdminLocationEvents = useFragment(GetAdminLocationEventsFragmentDoc, getAdminLocationEventsFragment);

    const events = getAdminLocationEvents.events!;
    const eventTable: TableDef<ArrayElement<typeof events>> = {
        data: events,
        defaultSortColumn: "year",
        columns: [{
            key: "year",
            header: <Trans>Year</Trans>,
            getValue: event => (
                <Link to={`/admin/event/${event.id}`} className="link">{event.year}</Link>
            ),
            sort: numberSort(event => event.year),
            sortAscendingDefault: false,
        }, {
            key: "code",
            header: <Trans>JID code</Trans>,
            getValue: event => event.code.value,
            sort: stringSort(event => event.code.value),
            sortAscendingDefault: true,
        }, {
            key: "active",
            header: <Trans>Active</Trans>,
            getValue: event =>
                event.active
                    ? (
                        <div className="tooltip tooltip-right" data-tip={t`Active`}>
                            <RocketLaunchIcon className="size-4 fill-success" aria-label={t`Active`}/>
                        </div>
                    ) : (
                        <div className="tooltip tooltip-right" data-tip={t`Not active`}>
                            <StopIcon className="size-4 fill-error" aria-label={t`Not active`}/>
                        </div>
                    )
            ,
            sort: numberSort(event => event.active ? 1 : 0),
            sortAscendingDefault: true,
        }, {
            key: "participants",
            header: <Trans>Participants</Trans>,
            getValue: event => event.participants.length,
            sort: numberSort(event => event.participants.length),
            sortAscendingDefault: false,
        }, {
            key: "codeCount",
            header: <Trans># JID codes</Trans>,
            getValue: event => event.jidCodeStats.count,
            sort: numberSort(event => event.jidCodeStats.count),
            sortAscendingDefault: false,
        }]
    };

    return (
        <Table tableDef={eventTable}/>
    );
}