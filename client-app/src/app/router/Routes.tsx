import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activity/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import ActivityDetails from "../../features/activity/details/ActivityDetails";
import TestError from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/activities',
                element: <ActivityDashboard />
            },
            {
                path: '/activities/:id',
                element: <ActivityDetails />
            },
            {
                path: '/create-activity',
                element: <ActivityForm key='create' />
            },
            {
                path: '/manage/:id',
                element: <ActivityForm key='manage' />
            },
            {
                path: '/errors',
                element: <TestError />
            },
            {
                path: '/not-found',
                element: <NotFound />
            },
            {
                path: '/server-error',
                element: <ServerError />
            },
            {
                path: '*',
                element: <Navigate replace to='/not-found' />
            }
        ]
    },
]

export const router = createBrowserRouter(routes);