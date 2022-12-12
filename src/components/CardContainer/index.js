import Cards from "../Cards";
import {s__getPosts} from "../../redux/selectors";
import {connect} from "react-redux";
import moment from "moment-timezone";
import {getCurrentTimezone} from "../../utils/helper";

const DEFAULT_IMG = "https://4.bp.blogspot.com/-PA3iYOebqDw/XGR89PWknyI/AAAAAAAAGiQ/ZuBh9KsGGKcU2GABzFlDYAaxXtZFwU_wQCLcBGAs/w255-h143-p/1.jpg"

const CardContainer = ({
                           postsData = {}
                       }) => {
    const {
        posts = [],
    isLoading
    } = postsData;
    const timezone = getCurrentTimezone();
    console.log("dwecdw", timezone);
    return (
        <div className={"container"}>
            <div className={"row w-100 d-flex flex-wrap justify-content-between flex-row"}>
                {posts.map(item => {
                    return (
                        <div className={"col-md-4"} key={item?._id}>
                            <Cards
                                imgSrc={item?.photo || DEFAULT_IMG}
                                title={item?.title}
                                desc={item?.desc}
                                date={moment(item?.createdAt).tz(timezone).format("DD, MMMM YYYY")}
                                count={item?.count}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
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

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardContainer);
