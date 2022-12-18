import {useEffect} from "react";
import {connect} from "react-redux";
import {a__logout} from "../../redux/actions";

const Logout = ({
                    d__onLogout
                }) => {

    useEffect(() => {
        d__onLogout();
    }, []);

    return <></>
}

const mapDispatchToProps = (dispatch) => {
    return {
        d__onLogout: data => {
            dispatch(a__logout.request(data));
        },
    };
};


export default connect(null, mapDispatchToProps)(Logout);