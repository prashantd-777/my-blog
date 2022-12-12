import Slider from "react-slick";
import s from "./Slider.module.scss";
import {CAROUSEL_SETTING} from "../../constant/carouselSetting";
import Cards from "../Cards";
import {POST_DATA} from "../../constant/postData";
import {getCurrentTimezone} from "../../utils/helper";
import moment from "moment-timezone";

const Carousel = () => {
    const timezone = getCurrentTimezone();
    return (
        <div className={`container ${s.sliderContainer}`}>
            <Slider {...CAROUSEL_SETTING}>
                {POST_DATA.map(item => {
                    return (
                        <Cards
                            key={item?.id}
                            imgSrc={item?.img}
                            title={item?.title}
                            desc={item?.desc}
                            date={moment(item?.createdAt).tz(timezone).format("DD, MMMM YYYY")}
                            count={item?.count}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel;