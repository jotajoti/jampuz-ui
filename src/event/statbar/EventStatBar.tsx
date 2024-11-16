import {i18n} from "@lingui/core";
import {Trans} from "@lingui/macro";

import {StatBar} from "../../components/StatBar.tsx";
import {FragmentType, StatBarFragmentDoc, useFragment} from "../../gql";

type EventStatBarProps = {
    statBarFragmentDoc: FragmentType<typeof StatBarFragmentDoc>
}

export const EventStatBar = ({statBarFragmentDoc}: EventStatBarProps) => {
    const statBarFragment = useFragment(StatBarFragmentDoc, statBarFragmentDoc);

    return (
        <StatBar config={{
            stats: [{
                title: <Trans>Participants</Trans>,
                value: i18n.number(statBarFragment!.participants.length),
            }, {
                title: <Trans>JID Codes</Trans>,
                value: i18n.number(statBarFragment!.jidCodeStats.count),
            }, {
                title: <Trans>Countries</Trans>,
                value: i18n.number(statBarFragment!.jidCodeStats.uniqueCountryCount),
            }]
        }}/>
    );
}
