import s from "./Hamburger.module.scss";

const Hamburger = ({
                       handleToggleMenu
                   }) => {
    return (
        <a className={`d-inline-block ${s.sideMenuBtn}`} id="SIDE_MENU_TOGGLE" onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </a>
    )
}

export default Hamburger;