import {Link, useLoaderData} from "react-router";
import {GetAdminEventQuery} from "../../gql";
import {useAdminContext} from "../adminContext.ts";
import {useEffect} from "react";
import {Trans} from "@lingui/macro";

export const AdminEvent = () => {
    const {setNavigationCenter, setNavigationButtons} = useAdminContext();

    const {eventById} = useLoaderData() as GetAdminEventQuery;

    useEffect(() => {
        const locationName = eventById!.location.name;
        const eventYear = eventById!.year;

        setNavigationCenter(
            <div className="text-lg">
                <Trans comment="Event title">{locationName} {eventYear}</Trans>
            </div>
        );

        setNavigationButtons([
            <Link to={`/${eventById!.code.value}`} className="btn btn-ghost"><Trans>Go to event</Trans></Link>
        ]);
    }, [setNavigationCenter, setNavigationButtons, eventById]);

    return (
        <div>
            TODO
        </div>
    )
}