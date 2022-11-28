import Slider from "react-slick";
import s from "./Slider.module.scss";
import {CAROUSEL_SETTING} from "../../constant/carouselSetting";

const Carousel = () => {
    return (
        <div className={`container ${s.sliderContainer}`}>
            <Slider {...CAROUSEL_SETTING}>
                <div>
                    <img src="https://3.bp.blogspot.com/-c70XNIpPFqc/V16cR5CkT_I/AAAAAAAAD70/1co8gEELWLk8HKQUYbz8pON53A0QxET_QCLcB/w255-h143-p/1.jpg" />
                </div>
                <div>
                    <img src="https://3.bp.blogspot.com/-c70XNIpPFqc/V16cR5CkT_I/AAAAAAAAD70/1co8gEELWLk8HKQUYbz8pON53A0QxET_QCLcB/w255-h143-p/1.jpg" />
                </div>
                <div>
                    <img src="https://3.bp.blogspot.com/-c70XNIpPFqc/V16cR5CkT_I/AAAAAAAAD70/1co8gEELWLk8HKQUYbz8pON53A0QxET_QCLcB/w255-h143-p/1.jpg" />
                </div>
                <div>
                    <img src="https://3.bp.blogspot.com/-c70XNIpPFqc/V16cR5CkT_I/AAAAAAAAD70/1co8gEELWLk8HKQUYbz8pON53A0QxET_QCLcB/w255-h143-p/1.jpg" />
                </div>
                <div>
                    <img src="https://3.bp.blogspot.com/-c70XNIpPFqc/V16cR5CkT_I/AAAAAAAAD70/1co8gEELWLk8HKQUYbz8pON53A0QxET_QCLcB/w255-h143-p/1.jpg" />
                </div>
                <div>
                    <img src="https://3.bp.blogspot.com/-c70XNIpPFqc/V16cR5CkT_I/AAAAAAAAD70/1co8gEELWLk8HKQUYbz8pON53A0QxET_QCLcB/w255-h143-p/1.jpg" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;