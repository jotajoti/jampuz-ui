import {createBrowserRouter, redirect} from "react-router";

import {Event, eventLoader, eventLogoutLoader, JoinEvent, joinEventAction, joinEventLoader} from "./event";
import {ErrorPage} from "./ErrorPage.tsx";
import {Landing, landingLoader} from "./landing";
import {
    AddOwner,
    addOwnerAction,
    Admin,
    AdminCreateLocation,
    adminCreateLocationAction,
    AdminEvent,
    adminEventLoader,
    adminLoader,
    AdminLocation,
    adminLocationLoader,
    AdminLogin,
    adminLoginAction,
    adminLoginLoader,
    adminLogoutLoader,
    AdminOverview,
    adminOverviewLoader
} from "./admin";
import {AdminRegister, adminRegisterAction, adminRegisterLoader} from "./admin/register";
import {AdminCreateEvent, adminCreateEventAction} from "./admin/event/new";

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
        loader: () => redirect("/admin/locations"),
    }, {
        path: "locations",
        element: <AdminOverview/>,
        loader: adminOverviewLoader,
        children: [{
            path: "new",
            element: <AdminCreateLocation/>,
            action: adminCreateLocationAction,
        }]
    }, {
        path: "locations/:locationId",
        element: <AdminLocation/>,
        loader: adminLocationLoader,
        children: [{
            path: "events/addowner",
            element: <AddOwner/>,
            action: addOwnerAction,
        }, {
            path: "events/new",
            element: <AdminCreateEvent/>,
            action: adminCreateEventAction,
        }],
    }, {
        path: "locations/:locationId/events/:eventId",
        element: <AdminEvent/>,
        loader: adminEventLoader,
    }]
}, {
    path: "/admin/login",
    element: <AdminLogin/>,
    action: adminLoginAction,
    loader: adminLoginLoader,
}, {
    path: "/admin/logout",
    element: <div></div>,
    loader: adminLogoutLoader,
}, {
    path: "/admin/register",
    element: <AdminRegister/>,
    action: adminRegisterAction,
    loader: adminRegisterLoader,
}]);
