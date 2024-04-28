import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import Update from "../pages/Update/Update";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: "/add-tourists-spot",
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: "/my-list",
                element: <MyList></MyList>,
            },
            {
                path: "/update-spots/:id",
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/all-tourists-spot/current-spot/${params.id}`)
            }
        ]
    },
]);
export default router;