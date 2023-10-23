import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import SurveyCompleted from "../pages/SurveyCompleted"

// User routes
export const nonAuthProtectedRoutes = [
    {path: "/login", component: <Login/>},
    {path: "/register", component: <Register/>},
]

export const authProtectedRoutes = [
    {path: "", component: <Home/>},
    {path: "/survey-submitted", component: <SurveyCompleted/>},
]