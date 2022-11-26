import s from "./home.module.scss";
import Posts from "../../components/Posts";
import Sidebar from "../../components/Sidebar";

const Home = () => {
    return (
        <>
            <div className={`${s.homeContainer}`}>
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}

export default Home;