import {numberSort, stringSort, Table, TableDef} from "../components/table";
import {ArrayElement} from "../utils.ts";
import {GetEventQuery} from "../gql";

type ParticipantsTableProps = {
    data: GetEventQuery
}

export const ParticipantsTable = ({data}: ParticipantsTableProps) => {
    const participants = data!.event!.participants;
    const participantTable: TableDef<ArrayElement<typeof participants>> = {
        data: participants,
        defaultSortColumn: "jidCodes",
        rowClassNames: participant => participant.id === data.authenticatedParticipant?.id ? 'bg-accent text-accent-content' : '',
        columns: [{
            key: "name",
            header: "Name",
            getValue: participant => participant.name,
            sort: stringSort(participant => participant.name),
            sortAscendingDefault: true,
            extraClassNames: "w-11/12"
        }, {
            key: "jidCodes",
            header: "JID codes",
            getValue: participant => participant.jidCodeStats.uniqueCount,
            sort: numberSort(participant => participant.jidCodeStats.uniqueCount),
            sortAscendingDefault: false,
            extraClassNames: "text-right",
        }, {
            key: "countries",
            header: "Countries",
            getValue: participant => participant.jidCodeStats.uniqueCountryCount,
            sort: numberSort(participant => participant.jidCodeStats.uniqueCountryCount),
            sortAscendingDefault: false,
            extraClassNames: "text-right",
        }]
    }

    return <Table tableDef={participantTable}/>;
}
