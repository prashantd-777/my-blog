import s from "./Footer.module.scss";
import {RED_HEART} from "../../constant/cdnAssetPath";

const Footer = () => {

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
        <footer className={`${s.footerContainer}`}>
            <div className={"col-12 mt-3"}>
                <p className={`${s.copyRight}`}>© 2022 , made with
                    <span>{" "}
                        <img height="20px" alt="Heart" src={RED_HEART} />
                        {" "}
                            </span>by Prashant Dawkhar for a better web.
                </p>
            </div>

            {/*<div className={`${s.topNavWrapper}`}>*/}
            {/*    <div className={`container`}>*/}
            {/*        <div className={`${s.wrapperBlock}`}>*/}
            {/*            <div className={`${s.topNavLeft}`}>*/}
            {/*                <Hamburger*/}
            {/*                    handleToggleMenu={handleToggleMenu}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className={`${s.topNavRight}`}>*/}
            {/*                <ul className={`${s.iconList}`}>*/}
            {/*                    {SOCIAL_LIST.map(item => {*/}
            {/*                        return (*/}
            {/*                            <li key={item?.id}>*/}
            {/*                                <a className={getSocialColorName(item?.name)}>*/}
            {/*                                    {item?.icon}*/}
            {/*                                </a>*/}
            {/*                            </li>*/}
            {/*                        )*/}
            {/*                    })}*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </footer>
    )
}

export default Footer;