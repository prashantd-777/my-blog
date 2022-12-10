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

const routes = (
    <Router history={history}>
        <Routes>
            <Route exact path={"/"} element={<Layout/>}/>
            <Route exact path={"/dashboard"} element={
                <Auth>
                    <Dashboard />
                </Auth>
            }/>
            <Route exact path={"/login"} element={<Login/>}/>
            <Route exact path={"/register"} element={<Register/>}/>
        </Routes>
    </Router>
)

export default routes