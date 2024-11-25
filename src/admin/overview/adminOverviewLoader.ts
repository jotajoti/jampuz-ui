import {redirect} from "react-router";

import {AdminOverviewDocument, client} from "../../gql";

export const adminOverviewLoader = async () => {
    const result = await client().query(AdminOverviewDocument, {});

    if (result.error) {
        redirect("/");
    }

    return result.data;
}
