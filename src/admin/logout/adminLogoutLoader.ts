import {replace} from "react-router-dom";

export const adminLogoutLoader = async () => {
    localStorage.removeItem("token");

    return replace(`/admin`);
}
