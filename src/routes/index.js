import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Dashboard from "../Pages/dashboard";
import Login from "../Pages/login";
import Register from "../Pages/register";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../Pages/home";

const routes = (

    <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
        <Route element={<PublicRoute/>}>
            <Route exact path={"/home"} element={<Home/>}/>
            <Route exact path={"/login"} element={<Login/>}/>
            <Route exact path={"/register"} element={<Register/>}/>
        </Route>
    </Routes>
)

export default routes;