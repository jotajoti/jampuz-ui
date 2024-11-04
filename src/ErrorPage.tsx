import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const routeError = useRouteError();

    return (
        <div>Blip blop error {JSON.stringify(routeError)}</div>
    )
}