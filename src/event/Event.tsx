import {useParams} from "react-router-dom";
import {useQuery} from "urql";

import {Layout} from "../Layout.tsx";
import {GetEventDocument} from "../gql";
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

    const navigationButtons = (
        <>
            {data?.authenticatedParticipant?.event.id === data!.event!.id
                ? <AddJidCodeButton eventId={data!.event!.id} reloadEvent={reloadEvent}/>
                : <JoinEventButton data={data!} reloadEvent={reloadEvent}/>
            }
        </>
    );

    return (
        <Layout
            navigationStart={<a className="btn btn-ghost text-xl">{data?.event?.location.name} {data?.event?.year}</a>}
            navigationCenter={<JidCodeHeader jidCode={data!.event!.code!.value}/>}
            navigationEnd={navigationButtons}
            subNav={<EventStatBar data={data!}/>}
        >

            <Dashboard columns={4} widgets={[{
                key: "map",
                title: "Map",
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
                title: "Participants",
                span: 2,
                content: <ParticipantsTable data={data!}/>
            }, {
                key: "countriesList",
                title: "Countries",
                content: <CountriesTable data={data!}/>
            }]}/>
        </Layout>
    )
}
