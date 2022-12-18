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
import Layout from "../components/Layout";
import Logout from "../Pages/logout";

const routes = (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/logout" element={<Logout/>}/>

        <Route element={<ProtectedRoute/>}>
            <Route path="/user" element={<Layout/>}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<>Welcome to the profile</>} />
            </Route>
        </Route>
        <Route element={<PublicRoute/>}>
            <Route exact path={"/login"} element={<Login/>}/>
            <Route exact path={"/register"} element={<Register/>}/>
        </Route>
    </Routes>
)

export default routes;