import {useParams} from "react-router-dom";
import {useQuery, useSubscription} from "urql";
import {Trans} from "@lingui/macro";

import {Layout} from "../Layout.tsx";
import {EventSubscriptionDocument, GetEventDocument} from "../gql";
import {Dashboard} from "../components/Dashboard.tsx";
import {Map} from "../components/map";
import {JidCodeHeader} from "./JidCodeHeader.tsx";
import {ParticipantsTable} from "./ParticipantsTable.tsx";
import {CountriesTable} from "./CountriesTable.tsx";
import {EventStatBar} from "./EventStatBar.tsx";
import {AddJidCodeButton} from "./AddJidCode.tsx";
import {JoinEventButton} from "./JoinEvent.tsx";

export const Event = () => {
    const {eventCode} = useParams();

    const [{data}, reloadEvent] = useQuery({
        query: GetEventDocument,
        variables: {
            code: eventCode!,
        },
        requestPolicy: 'cache-first'
    });

    useSubscription({
        query: EventSubscriptionDocument,
        variables: {
            eventId: data!.event!.id
        }
    }, () => reloadEvent({requestPolicy: 'network-only'}));

    const navigationButtons = (
        <>
            {data?.authenticatedParticipant?.event.id === data!.event!.id
                ? <AddJidCodeButton eventId={data!.event!.id} reloadEvent={reloadEvent}/>
                : <JoinEventButton data={data!} reloadEvent={reloadEvent}/>
            }
        </>
    );

    const locationName = data!.event!.location.name;
    const eventYear = data!.event!.year;
    return (
        <Layout
            navigationStart={
                <a className="btn btn-ghost text-xl">
                    <Trans comment="Event title">{locationName} {eventYear}</Trans>
                </a>
            }
            navigationCenter={<JidCodeHeader jidCode={data!.event!.code!.value}/>}
            navigationEnd={navigationButtons}
            subNav={<EventStatBar data={data!}/>}
        >

            <Dashboard columns={4} widgets={[{
                key: "map",
                title: <Trans>Map</Trans>,
                content: maximized => (
                    <div>
                        <Map detailed={maximized} countries={data!.event!.jidCodeStats.countryStats.map(country => ({
                            code: country.country.toUpperCase(),
                            fill: "fill-accent",
                        }))}/>
                    </div>
                )
            }, {
                key: "participantList",
                title: <Trans>Participants</Trans>,
                span: 2,
                content: <ParticipantsTable data={data!}/>
            }, {
                key: "countriesList",
                title: <Trans>Countries</Trans>,
                content: <CountriesTable data={data!}/>
            }]}/>
        </Layout>
    )
}
