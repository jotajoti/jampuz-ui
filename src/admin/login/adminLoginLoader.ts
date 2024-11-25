import {replace} from "react-router";

import {client, GetAdminLoginDocument} from "../../gql";

export const adminLoginLoader = async () => {
    const result = await client().query(GetAdminLoginDocument, {});

    if (result.error || result.data?.authenticatedAdmin) {
        return replace("/admin");
    }

    return result.data;
}
