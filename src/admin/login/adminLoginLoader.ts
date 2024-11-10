import {replace} from "react-router-dom";
import {client, GetAdminLoginDocument} from "../../gql";

export const adminLoginLoader = async () => {
    const result = await client.query(GetAdminLoginDocument, {});

    if (localStorage.getItem("token")) {
        return replace("/admin");
    }

    return result.data;
}
