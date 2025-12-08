import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPass from "../Pages/ForgetPass";
import AddService from "../Pages/AddService";
import MyServices from "../Pages/MyServices";
import UpdateServices from "../Pages/UpdateServices";
import MyOrders from "../Pages/MyOrders";
import FilteredCategoryPage from "../Components/FilteredCategoryPage";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/details/:myId",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: "/forget/:email",
                element: <ForgetPass></ForgetPass>
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/my-services",
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
            },
            {
                path: "/update-services/:id",
                element: <PrivateRoute><UpdateServices></UpdateServices></PrivateRoute>
            },
            {
                path: "/my-orders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },

        ]
    },

    {
        path: "*", // catch all unknown routes
        element: <NotFound />, // 404 page without navbar/footer
    },

]);
export default router;