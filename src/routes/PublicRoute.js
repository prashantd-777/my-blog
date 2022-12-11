import {Navigate, Outlet } from "react-router-dom";
import {isAuthenticated} from "../redux/services/auth";

const PublicRoute = ({
                         redirectPath = '/',
                         restricted,
                         children,
}) => {
    if (isAuthenticated()) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default PublicRoute;