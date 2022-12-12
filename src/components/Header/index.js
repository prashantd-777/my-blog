import s from "./Header.module.scss";
import {NAVBAR_LIST} from "../../constant/navbar";
import {Link} from "react-router-dom";

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
                                    <Link to={"/login"}>
                                        Login
                                    </Link>
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