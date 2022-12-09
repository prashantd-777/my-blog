import s from "./home.module.scss";
import Carousel from "../../components/Carousel";
import Tabs from "../../components/Tabs";
import CardContainer from "../../components/CardContainer";
import Footer from "../../components/Footer";
import {connect} from "react-redux";
import {a__fetchPosts} from "../../redux/actions";
import {useEffect} from "react";
import {s__getPosts} from "../../redux/selectors";

const Home = ({
                  d__fetchPosts,
                  postsData = {}
              }) => {

    console.log("postsData", postsData);

    useEffect(() => {
        d__fetchPosts()
    }, [])

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
