import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

// User routes
export const nonAuthProtectedRoutes = [
    {path: "/login", component: <Login/>},
    {path: "/register", component: <Register/>},
]

export const authProtectedRoutes = [
    {path: "/", component: <Home/>},
    {path: "/*", component: <Home/>},
]