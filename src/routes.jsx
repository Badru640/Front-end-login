import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { SingUp } from "./pages/singup";
import { Login } from "./pages/login";

export const route = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/singup",
        element: <SingUp/>
    },
])