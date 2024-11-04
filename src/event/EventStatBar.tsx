import {StatBar} from "../components/StatBar.tsx";
import {GetEventQuery} from "../gql";

type EventStatBarProps = {
    data: GetEventQuery
}

export const EventStatBar = ({data}: EventStatBarProps) => {
    return (
        <StatBar config={{
            stats: [{
                title: "Participants",
                value: data!.event!.participants.length
            }, {
                title: "JID Codes",
                value: data!.event!.jidCodeStats.uniqueCount
            }, {
                title: "Countries",
                value: data!.event!.jidCodeStats.uniqueCountryCount
            }]
        }}/>
    );
}
