import {createBrowserRouter} from "react-router-dom";

import {Event} from "./event/Event";
import {ErrorPage} from "./ErrorPage.tsx";
import {Landing} from "./landing";

export const router = createBrowserRouter([{
    path: "/",
    element: <Landing/>
}, {
    path: "/:eventCode",
    element: <Event/>,
    errorElement: <ErrorPage/>
}]);
