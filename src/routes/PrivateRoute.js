import {Route, Navigate} from "react-router-dom";
import {isAuthenticated} from "../redux/services/auth";

const PrivateRoute = ({element, children, ...rest}) => {
    if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
}

    return children;
};

export default PrivateRoute;