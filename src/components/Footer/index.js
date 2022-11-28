import s from "./Footer.module.scss";
import {RED_HEART} from "../../constant/cdnAssetPath";

const Footer = () => {
    return (
        <footer className={`${s.footerContainer}`}>
            <div className={"col-12 mt-5"}>
                <p className={`${s.copyRight}`}>© 2022 , made with
                    <span>{" "}
                        <img height="20px" alt="Heart" src={RED_HEART} />
                        {" "}
                            </span>by Prashant Dawkhar for a better web.
                </p>
            </div>
        </footer>
    )
}

export default Footer;