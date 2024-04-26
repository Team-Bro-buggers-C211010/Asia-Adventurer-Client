import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
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
            }
        ]
    },
]);
export default router;