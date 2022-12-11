import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../Pages/dashboard";
import Login from "../Pages/login";
import Register from "../Pages/register";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const routes = (

    <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Layout/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
        <Route element={<PublicRoute/>}>
            <Route exact path={"/login"} element={<Login/>}/>
            <Route exact path={"/register"} element={<Register/>}/>
        </Route>
    </Routes>
)

export default routes