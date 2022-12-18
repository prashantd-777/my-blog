import s from "./DashboardHeader.module.scss";
import {Link} from "react-router-dom";


const DashboardHeader = () => {
    return (
        <div className={`container ${s.mainContainer}`}>
            <div className={`${s.topBlock}`}>
                <div className={`${s.topLeft}`}>
                    <Link to={"/"}>
                        Prashant
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;