import s from "./Header.module.scss";
import {NAVBAR_LIST} from "../../constant/navbar";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../redux/services/auth";
import ButtonDropdown from "../forms/button-dropdown";

const Header = ({
                    handleToggleMenu
                }) => {

    const renderLabel = () => {
        return (
            <>
                <img
                    src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                    alt="User avatar"
                />
                <span className={`fa fa-angle-down`} aria-hidden={true}></span>
            </>
        )
    }

    return (
        <header className={`${s.headerContainer}`} id={"STICKY_HEADER"}>
            <div className={`container`}>
                <div className={`${s.topBlock}`}>
                    <div className={`${s.topLeft}`}>
                        Prashant
                    </div>
                    <div className={`${s.topRight}`}>
                        <nav>
                            <ul className={`${s.navList}`}>
                                {NAVBAR_LIST.map(item => {
                                    return (
                                        <li key={item?.id} className={`${s.listRow}`}>
                                            <Link to={item?.link} className={`${s.listLink}`}>{item?.name}</Link>
                                        </li>
                                    )
                                })}
                                <li className={`position-relative ${s.listRow}`}>
                                    {isAuthenticated() ? (
                                        <a>
                                            <ButtonDropdown label={renderLabel()} />
                                        </a>
                                    ) : (
                                        <Link to={"/login"}>
                                            Login
                                        </Link>
                                    )}
                                </li>
                                {/*<li>*/}
                                {/*    <a>*/}
                                {/*        <i className='fa fa-search text-white'></i>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;