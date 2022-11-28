import Header from "./components/Header";
import {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar";
import './App.scss';
import Carousel from "./components/Carousel";
import Tabs from "./components/Tabs";
import BackToTop from "./components/BackToTop";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll, false)
    }, []);

    const handleScroll = () => {
        let headerElement = document.querySelector("#STICKY_HEADER");
        if (window.scrollY > 150) {
            headerElement.classList.add("fixedDiv")
        } else {
            headerElement.classList.remove("fixedDiv")
        }

        let scrollToTopBtn = document.querySelector("#BACK_TO_TOP");
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("showBtn")
        } else {
            scrollToTopBtn.classList.remove("showBtn")
        }
    }

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <Header handleToggleMenu={handleToggleMenu} />
            <Sidebar
                isMenuOpen={isMenuOpen}
                handleToggleMenu={handleToggleMenu}
                handleLinkClick={handleLinkClick}
            />
            <BackToTop />
            <main>
                <section>
                    <Carousel />
                    <Tabs />
                    <CardContainer />
                    <Footer />
                </section>
            </main>
        </>
    );
}

export default App;
