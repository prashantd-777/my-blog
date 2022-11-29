import React, {useEffect, useRef} from "react";
import s from "./Sidebar.module.scss";

const Sidebar = ({
                     isMenuOpen = false,
                     handleToggleMenu,
                     handleLinkClick
                 }) => {

    const boxRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target) && isMenuOpen) {
                handleToggleMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen])

    return (
        <div className={`${s.sideMenuContainer} ${isMenuOpen === true ? ` ${s.active}` : ""}`} ref={boxRef}>
            <div className="overlay"></div>
            <div className={`inner-wrapper ${s.innerWrapper}`}>
                <span className={`text-white ${s.btnClose}`} onClick={handleToggleMenu}>
                    <i className='fa fa-close text-white fs-5' />
                </span>
                <div>
                    Blog Sidebar
                </div>
            </div>
        </div>
    );
}

export default Sidebar;