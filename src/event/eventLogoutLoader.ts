import {LoaderFunctionArgs, replace} from "react-router";

export const eventLogoutLoader = async ({params}: LoaderFunctionArgs) => {
    localStorage.removeItem("token");

    return replace(`/${params.eventCode}`);
}
