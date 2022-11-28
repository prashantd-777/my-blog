import s from "./Header.module.scss";
import Hamburger from "../Hamburger";
import {SOCIAL_LIST} from "../../constant/social";
import TopBar from "../TopBar";

const Header = ({
                    handleToggleMenu
                }) => {

    const getSocialColorName = (key) => {
        switch (key) {
            case "TWITTER":
                return s.twitterBg;
            case "FACEBOOK":
                return s.facebookBg;
            case "INSTAGRAM":
                return s.instagramBg;
            case "LINKED_IN":
                return s.linkedInBg;
            default:
                return "";
        }
    }

    return (
        <header className={`${s.headerContainer}`}>
            <div className={`${s.topNavWrapper}`}>
                <div className={`container`}>
                    <div className={`${s.wrapperBlock}`}>
                        <div className={`${s.topNavLeft}`}>
                            <Hamburger
                                handleToggleMenu={handleToggleMenu}
                            />
                        </div>
                        <div className={`${s.topNavRight}`}>
                            <ul className={`${s.iconList}`}>
                                {SOCIAL_LIST.map(item => {
                                    return (
                                        <li key={item?.id}>
                                            <a className={getSocialColorName(item?.name)}>
                                                {item?.icon}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <TopBar/>
        </header>
    )
}

export default Header;