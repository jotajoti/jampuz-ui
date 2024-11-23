import {useRouteError} from "react-router";

export const ErrorPage = () => {
    const routeError = useRouteError();

    return (
        <div>Blip blop error {JSON.stringify(routeError)}</div>
    )
}