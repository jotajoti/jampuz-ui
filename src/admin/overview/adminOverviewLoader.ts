import {AdminOverviewDocument, client} from "../../gql";
import {redirect} from "react-router-dom";

export const adminOverviewLoader = async () => {
    const result = await client.query(AdminOverviewDocument, {});

    if (result.error) {
        redirect("/");
    }

    return result.data;
}
