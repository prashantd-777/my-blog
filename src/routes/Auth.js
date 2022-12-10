import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {isAuthenticated} from "../redux/services/auth";

const Auth = ({

                  children
              }) => {
    console.log("isAuthenticated is::", isAuthenticated())
    if (!isAuthenticated()) {
        // user is not authenticated
        return <Navigate to="/login" replace/>;
    }
    return children;
};

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    null
)(Auth);