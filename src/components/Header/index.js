import s from "./Header.module.scss";
import Hamburger from "../Hamburger";
import {SOCIAL_LIST} from "../../constant/social";
import TopBar from "../TopBar";
import {useEffect} from "react";

const Header = () => {

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll, false)
    }, []);

    const handleScroll = () => {
        let scrollToTopBtn = document.querySelector("#STICKY_HEADER");
        if (window.scrollY > 190) {
            scrollToTopBtn.classList.add("fixedDiv")
        } else {
            scrollToTopBtn.classList.remove("fixedDiv")
        }
    }

    const getSocialColorName = (key) => {
        switch (key) {
            case "TWITTER":
                return s.twitterBg;
            case "FACEBOOK":
                return s.facebookBg;
            case "INSTAGRAM":
                return s.instagramBg;
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
                            <Hamburger/>
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

            <div>

            </div>
        </header>
    )
}

export default Header;