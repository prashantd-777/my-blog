import s from "./Header.module.scss";
import {NAVBAR_LIST} from "../../constant/navbar";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../redux/services/auth";

const Header = ({
                    handleToggleMenu
                }) => {

    return (
        <header className={`${s.headerContainer}`} id={"STICKY_HEADER"}>
            <div className={`container`}>
                <div className={`${s.topBlock}`}>
                    <div className={`${s.topLeft}`}>
                        Prashant
                    </div>
                    <div className={`${s.topRight}`}>
                        <nav>
                            <ul>
                                {NAVBAR_LIST.map(item => {
                                    return (
                                        <li key={item?.id}>
                                            <Link to={item?.link}>{item?.name}</Link>
                                        </li>
                                    )
                                })}
                                <li>
                                    {isAuthenticated() ? (
                                        <Link to={"/login"}>
                                            User
                                        </Link>
                                    ): (
                                        <Link to={"/login"}>
                                            Login
                                        </Link>
                                    )}

                                </li>
                                <li>
                                    <a>
                                        <i className='fa fa-search text-white'></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;