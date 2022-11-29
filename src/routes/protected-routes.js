import {Navigate} from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = false
    if (!isAuthenticated) {
        // user is not authenticated
        return <Navigate to="/landing" replace />;
    }
    return children;
};