import {Trans} from "@lingui/macro";

import {StatBar} from "../components/StatBar.tsx";
import {GetEventQuery} from "../gql";

type EventStatBarProps = {
    data: GetEventQuery
}

export const EventStatBar = ({data}: EventStatBarProps) => {
    return (
        <StatBar config={{
            stats: [{
                title: <Trans>Participants</Trans>,
                value: data!.event!.participants.length
            }, {
                title: <Trans>JID Codes</Trans>,
                value: data!.event!.jidCodeStats.uniqueCount
            }, {
                title: <Trans>Countries</Trans>,
                value: data!.event!.jidCodeStats.uniqueCountryCount
            }]
        }}/>
    );
}
