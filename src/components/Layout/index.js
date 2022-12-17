import Sidebar from "../Sidebar";


const Layout = ({
    children
                }) => {
    return (
        <>
            <Sidebar isMenuOpen={true} />
            {children}
        </>
    )
}

export default Layout;