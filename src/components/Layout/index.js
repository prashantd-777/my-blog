import React from "react";
import Sidebar from "../Sidebar";
import {Outlet} from "react-router-dom";
import s from "./Layout.module.scss";
import Footer from "../Footer";
import Header from "../Header";
import DashboardHeader from "../DashboardHeader";

const Layout = ({
                }) => {
    return (
        <>
            <Header>
                <DashboardHeader />
            </Header>
            <Sidebar />
            <section className={`${s.sectionContainer}`}>
                <Outlet />
            </section>
            <Footer />
        </>
    )
}

export default Layout;