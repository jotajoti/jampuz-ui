import {LoaderFunctionArgs} from "react-router";
import {client, GetEventDetailsDocument} from "../../gql";

export const joinEventLoader = async ({params}: LoaderFunctionArgs) => {
    const result = await client().query(GetEventDetailsDocument, {
        eventCode: params.eventCode!
    });

    return result.data;
}
