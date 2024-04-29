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
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/all-tourists-spot")
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch("http://localhost:5000/all-tourists-spot")
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>
            },
            {
                path: "/my-list",
                element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
            },
            {
                path: "/update-spots/:id",
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/all-tourists-spot/current-spot/${params.id}`)
            },
            {
                path: "/spot-details/:id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/all-tourists-spot/current-spot/${params.id}`)
            },
            {
                path: "/tourists-spot/:countryName",
                element: <PrivateRoutes><CountryPage></CountryPage></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/tourists-country/${params.countryName}`)
            }
        ]
    },
]);
export default router;