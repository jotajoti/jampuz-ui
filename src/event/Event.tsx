import {Link, Outlet, useLoaderData, useRevalidator} from "react-router";
import {useSubscription} from "urql";
import {Trans} from "@lingui/react/macro";

import {Layout} from "../Layout.tsx";
import {EventSubscriptionDocument, GetEventQuery} from "../gql";
import {Dashboard} from "../components/Dashboard.tsx";
import {JidCodeHeader} from "./JidCodeHeader.tsx";
import {ParticipantsTable} from "./participants";
import {CountriesMap, CountriesTable} from "./countries";
import {EventStatBar} from "./statbar";
import {AuthenticatedButtons} from "./AuthenticatedButtons.tsx";
import {isAuthenticated} from "./authenticationUtils.ts";

export const Event = () => {
    const loaderData = useLoaderData() as GetEventQuery;
    const reValidator = useRevalidator();

    const reloadEvent = () => reValidator.revalidate();

    useSubscription({
        query: EventSubscriptionDocument,
        variables: {
            eventId: loaderData!.event!.id
        }
    }, () => reloadEvent());

    const navigationButtons = (
        isAuthenticated(loaderData)
            ? <AuthenticatedButtons data={loaderData} reloadEvent={reloadEvent}/>
            : <Link to={`/${loaderData.event?.code.value}/join`} className="btn btn-ghost"><Trans>Join</Trans></Link>
    );

    const locationName = loaderData!.event!.location.name;
    const eventYear = loaderData!.event!.year;
    return (
        <>
            <Layout
                navigationStart={
                    <a className="btn btn-ghost text-xl">
                        <Trans comment="Event title">{locationName} {eventYear}</Trans>
                    </a>
                }
                navigationCenter={
                    <div className="invisible md:visible">
                        <JidCodeHeader jidCode={loaderData!.event!.code!.value}/>
                    </div>
                }
                navigationEnd={navigationButtons}
                subNav={<EventStatBar statBarFragmentDoc={loaderData.event!}/>}
                getFooterFragment={loaderData}
            >

                <Dashboard columns={4} widgets={[{
                    key: "map",
                    title: <Trans>Map</Trans>,
                    content: maximized => <CountriesMap countriesFragment={loaderData.event!} maximized={maximized}/>
                }, {
                    key: "participantList",
                    title: <Trans>Participants</Trans>,
                    span: 2,
                    content: <ParticipantsTable
                        participantsFragmentDoc={loaderData.event!}
                        authenticatedParticipantId={loaderData.authenticatedParticipant?.id}
                    />
                }, {
                    key: "countriesList",
                    title: <Trans>Countries</Trans>,
                    content: <CountriesTable countriesFragmentDoc={loaderData.event!}/>
                }]}/>
            </Layout>
            <Outlet/>
        </>
    )
}
