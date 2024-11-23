import {replace} from "react-router";

import {client, GetAdminRegisterDocument} from "../../gql";

export const adminRegisterLoader = async () => {
    const result = await client.query(GetAdminRegisterDocument, {});

    if (result.error || result.data?.authenticatedAdmin) {
        return replace("/admin");
    }

    return result.data;
};