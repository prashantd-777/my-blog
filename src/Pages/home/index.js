import s from "./home.module.scss";
import Carousel from "../../components/Carousel";
import Tabs from "../../components/Tabs";
import CardContainer from "../../components/CardContainer";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <section className={`${s.homeContainer}`}>
                <Carousel />
                <Tabs />
                <CardContainer />
                <Footer />
            </section>
        </>
    )
}

export default Home;