import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
            },
            {
                path: "/login",
            },
            {
                path: "/register",
            }
        ]
    },
]);
export default router;