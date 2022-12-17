import {useEffect, useRef, useState} from "react";
import s from "./button-dropdown.module.scss";

const ButtonDropdown = ({
    label = null
                        }) => {
    const dropdownRef = useRef(null);
    const [showMenu, setShowMenu] = useState(false);

    const onClickOfDocument = (ref, event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setTimeout(() => {
                setShowMenu(false);
            }, 0)
        }
    }

    useEffect(() => {
        const onDocumentClick = onClickOfDocument.bind(null, dropdownRef)
        document.addEventListener("mousedown", onDocumentClick);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", onDocumentClick);
        };
    }, [dropdownRef])


    return (
        <div  ref={dropdownRef}>
            <button onClick={setShowMenu.bind(null, !showMenu)} className={`${s.buttonContainer}`}>
                {label}
            </button>
            {showMenu ? (
                <div className={`${s.menuBlock}`}>
                    <ul className={`${s.listContainer}`}>
                        <li>
                            <span className={`fa fa-user me-2`}></span>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <span className={`fa fa-gear me-2`}></span>
                            <a href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            ): null}
        </div>
    )
}

export default ButtonDropdown;