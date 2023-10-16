import { createBrowserRouter } from "react-router-dom";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";
import App from "../App";

const routes = [
    {
        path: '/',
        element: <App />,
        children: userRoutes.concat(adminRoutes)
    }
]

const router = createBrowserRouter(routes)

export default router