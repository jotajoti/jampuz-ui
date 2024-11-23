import {LoaderFunctionArgs, redirect} from "react-router";

import {client, GetEventDocument} from "../gql";

export const eventLoader = async ({params}: LoaderFunctionArgs) => {
    const result = await client.query(GetEventDocument, {
        code: params.eventCode!,
    });

    if (result.error || !result.data?.event) {
        redirect("/");
    }

    return result.data;
}
