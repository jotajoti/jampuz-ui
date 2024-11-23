import {AdminDocument, client} from "../gql";
import {replace} from "react-router";

export const adminLoader = async () => {
    const result = await client.query(AdminDocument, {}, {
        requestPolicy: 'network-only',
    });

    if (result.error || !result.data?.authenticatedAdmin) {
        return replace("/admin/login");
    }

    return result.data;
}