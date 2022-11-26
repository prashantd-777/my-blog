import s from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={`${s.sidebarContainer}`}>
            <div className={`${s.sidebarItem}`}>
                <span className={`${s.sidebarTitle}`}>About me</span>
            </div>
            My Sidebar
        </div>
    )
}

export default Sidebar;