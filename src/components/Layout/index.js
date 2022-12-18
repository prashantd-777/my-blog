import Sidebar from "../Sidebar";
import {Outlet} from "react-router-dom";
import s from "./Layout.module.scss";

const Layout = ({
                }) => {
    return (
        <>
            <Sidebar />
            <section className={`${s.sectionContainer}`}>
                <Outlet />
                <footer>
                    Welcome to the footer
                </footer>
            </section>
        </>
    )
}

export default Layout;