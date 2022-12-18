import s from "./home.module.scss";
import Carousel from "../../components/Carousel";
import Tabs from "../../components/Tabs";
import CardContainer from "../../components/CardContainer";
import Footer from "../../components/Footer";
import {connect} from "react-redux";
import {a__fetchPosts} from "../../redux/actions";
import React, {useEffect, useState} from "react";
import {s__getPosts} from "../../redux/selectors";
import Header from "../../components/Header";
import BackToTop from "../../components/BackToTop";
import HomeHeader from "../../components/HomeHeader";

const Home = ({
                  d__fetchPosts,
                  postsData = {}
              }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll, false)
    }, []);

    const handleScroll = () => {
        let headerElement = document.querySelector("#STICKY_HEADER");
        if (window.scrollY > 70) {
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

    useEffect(() => {
        d__fetchPosts()
    }, [])

    return (
        <>
            <Header
                handleToggleMenu={handleToggleMenu}
            >
                <HomeHeader />
            </Header>
            <BackToTop />
            <section className={`${s.homeContainer}`}>
                <Carousel />
                <Tabs />
                <CardContainer />
                <Footer />
            </section>
        </>
    )
}

const mapStateToProps = state => {
    return {
        // user: getUser(state),
        postsData: s__getPosts(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        d__fetchPosts: data => {
            dispatch(a__fetchPosts.request(data));
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
