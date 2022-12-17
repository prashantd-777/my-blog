import React, {useState} from "react";
import s from "./Sidebar.module.scss";
import Button from "../Button";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <aside className={`${s.sideMenuContainer}`}>
            <Button
                label={"Click"}
                classes={`${s.buttonContainer} ${show ? s.extendButton : s.defaultButton}`}
                onClick={toggleShow}
            />

            <ul className={`${s.listContainer} ${show ? s.extendListSize : s.defaultListSize}`}>
                <li>
                    <Link to={'/'}>
                        <i className={`fa fa-home me-2`}></i>
                        <span>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <i className={`fa fa-user me-2`}></i>
                        <span>
                            Profile
                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;