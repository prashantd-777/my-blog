import s from "./Header.module.scss";
import TopBar from "../TopBar";

const Header = ({
                    handleToggleMenu
                }) => {

    return (
        <header className={`${s.headerContainer}`}>
            <TopBar/>
        </header>
    )
}

export default Header;