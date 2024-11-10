import {createBrowserRouter} from "react-router-dom";

import {Event, eventLoader, eventLogoutLoader, JoinEvent, joinEventAction, joinEventLoader} from "./event";
import {ErrorPage} from "./ErrorPage.tsx";
import {Landing, landingLoader} from "./landing";
import {
    Admin,
    AdminEvent,
    adminEventLoader,
    adminLoader,
    AdminLocation,
    adminLocationLoader,
    AdminLogin,
    adminLoginAction,
    adminLogoutLoader,
    AdminOverview,
    adminOverviewLoader
} from "./admin";

export const router = createBrowserRouter([{
    path: "/",
    element: <Landing/>,
    loader: landingLoader,
}, {
    path: "/:eventCode",
    element: <Event/>,
    errorElement: <ErrorPage/>,
    loader: eventLoader,
    children: [{
        path: "join",
        element: <JoinEvent/>,
        action: joinEventAction,
        loader: joinEventLoader,
    }]
}, {
    path: "/:eventCode/logout",
    element: <div></div>,
    loader: eventLogoutLoader,
}, {
    path: "/admin",
    element: <Admin/>,
    errorElement: <ErrorPage/>,
    loader: adminLoader,
    children: [{
        index: true,
        element: <AdminOverview/>,
        loader: adminOverviewLoader,
    }, {
        path: "location/:locationId",
        element: <AdminLocation/>,
        loader: adminLocationLoader,
    }, {
        path: "event/:eventId",
        element: <AdminEvent/>,
        loader: adminEventLoader,
    }]
}, {
    path: "/admin/login",
    element: <AdminLogin/>,
    action: adminLoginAction,
}, {
    path: "/admin/logout",
    element: <div></div>,
    loader: adminLogoutLoader,
}]);
