import {LoaderFunctionArgs, replace} from "react-router-dom";

export const eventLogoutLoader = async ({params}: LoaderFunctionArgs) => {
    localStorage.removeItem("token");

    return replace(`/${params.eventCode}`);
}
