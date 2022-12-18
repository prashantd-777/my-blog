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
                    <Link to={'/'} title={"Home"}>
                        <i className={`fa fa-home me-2`}></i>
                        <span>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/user/profile'} title={"Profile"}>
                        <i className={`fa fa-user me-2`}></i>
                        <span>
                            Profile
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={'/logout'} title={"Logout"}>
                        <i className={`fa fa-gear me-2`}></i>
                        <span>
                            Logout
                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;