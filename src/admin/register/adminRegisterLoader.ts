import {client, GetAdminRegisterDocument} from "../../gql";
import {replace} from "react-router-dom";

export const adminRegisterLoader = async () => {
    const result = await client.query(GetAdminRegisterDocument, {});

    if (localStorage.getItem("token")) {
        return replace("/admin");
    }

    return result.data;
};