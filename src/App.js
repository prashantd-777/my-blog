import Header from "./components/Header";
import {useState} from "react";
import Sidebar from "./components/Sidebar";
import './App.scss';
import Carousel from "./components/Carousel";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <main>
                <section>
                    <Carousel />
                </section>
            </main>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
            <p>text</p>
        </>
    );
}

export default App;
