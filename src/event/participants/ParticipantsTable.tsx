import {i18n} from "@lingui/core";
import {Trans} from "@lingui/macro";

import {numberSort, stringSort, Table, TableDef} from "../../components/table";
import {ArrayElement} from "../../utils";
import {FragmentType, ParticipantsFragmentDoc, useFragment} from "../../gql";

type ParticipantsTableProps = {
    authenticatedParticipantId?: string
    participantsFragmentDoc: FragmentType<typeof ParticipantsFragmentDoc>
}

export const ParticipantsTable = ({participantsFragmentDoc, authenticatedParticipantId}: ParticipantsTableProps) => {
    const participantsFragment = useFragment(ParticipantsFragmentDoc, participantsFragmentDoc)

    const participants = participantsFragment.participants!;
    const participantTable: TableDef<ArrayElement<typeof participants>> = {
        data: participants,
        defaultSortColumn: "jidCodes",
        rowClassNames: participant => participant.id === authenticatedParticipantId ? 'bg-accent text-accent-content' : '',
        columns: [{
            key: "name",
            header: <Trans>Name</Trans>,
            getValue: participant => participant.name,
            sort: stringSort(participant => participant.name),
            sortAscendingDefault: true,
            extraClassNames: "w-11/12"
        }, {
            key: "jidCodes",
            header: <Trans>JID Codes</Trans>,
            getValue: participant => i18n.number(participant.jidCodeStats.uniqueCount),
            sort: numberSort(participant => participant.jidCodeStats.uniqueCount),
            sortAscendingDefault: false,
            extraClassNames: "text-right",
        }, {
            key: "countries",
            header: <Trans>Countries</Trans>,
            getValue: participant => i18n.number(participant.jidCodeStats.uniqueCountryCount),
            sort: numberSort(participant => participant.jidCodeStats.uniqueCountryCount),
            sortAscendingDefault: false,
            extraClassNames: "text-right",
        }]
    }

    return <Table tableDef={participantTable}/>;
}
