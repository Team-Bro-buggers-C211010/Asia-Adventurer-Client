import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import Update from "../pages/Update/Update";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import CountryPage from "../pages/CountryPage/CountryPage";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import ErrorPage from './../pages/ErrorPage/ErrorPage';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://asia-adventurer-server.vercel.app/all-tourists-spot"),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/register",
                element: <Register></Register>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch("https://asia-adventurer-server.vercel.app/all-tourists-spot"),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/my-list",
                element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/update-spots/:id",
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params}) => fetch(`https://asia-adventurer-server.vercel.app/all-tourists-spot/current-spot/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/spot-details/:id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://asia-adventurer-server.vercel.app/all-tourists-spot/current-spot/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/tourists-spot/:countryName",
                element: <PrivateRoutes><CountryPage></CountryPage></PrivateRoutes>,
                loader: ({params}) => fetch(`https://asia-adventurer-server.vercel.app/tourists-country/${params.countryName}`),
                errorElement: <ErrorPage></ErrorPage>,
            }
        ]
    },
]);
export default router;