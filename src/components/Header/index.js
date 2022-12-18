import s from "./Header.module.scss";

const Header = ({
                    handleToggleMenu,
                    children
                }) => {

    return (
        <header className={`${s.headerContainer}`} id={"STICKY_HEADER"}>
            {children}
        </header>
    )
}

export default Header;