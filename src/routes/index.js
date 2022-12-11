import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../Pages/dashboard";
import Login from "../Pages/login";
import Register from "../Pages/register";
import history from "../redux/store/history";
import Auth from "./Auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const routes = (
    <Router history={history}>
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PublicRoute />}>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/register"} element={<Register/>}/>
            </Route>
        </Routes>
    </Router>
)

export default routes