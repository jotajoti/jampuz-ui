import {replace} from "react-router";

export const adminLogoutLoader = async () => {
    localStorage.removeItem("token");

    return replace(`/admin`);
}
