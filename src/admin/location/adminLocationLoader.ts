import {LoaderFunctionArgs, redirect} from "react-router";

import {client, GetAdminLocationDocument} from "../../gql";

export const adminLocationLoader = async ({params}: LoaderFunctionArgs) => {

    const result = await client().query(GetAdminLocationDocument, {
        locationId: params.locationId as string,
    });

    if (result.error || !result.data?.location) {
        redirect("/admin");
    }

    return result.data;
}
