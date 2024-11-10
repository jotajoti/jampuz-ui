import {ActionFunctionArgs, redirect} from "react-router-dom";
import {client, GetAdminEventDocument} from "../../gql";

export const adminEventLoader = async ({params}: ActionFunctionArgs) => {

    const result = await client
        .query(GetAdminEventDocument, {
            eventId: params.eventId as string,
        });

    if (result.error || !result.data?.eventById) {
        redirect("/admin");
    }

    return result.data;
}
