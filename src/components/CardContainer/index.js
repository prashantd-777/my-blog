import {POST_DATA} from "../../constant/postData";
import Cards from "../Cards";

const CardContainer = () => {
    return (
        <div className={"container"}>
            <div className={"row w-100 d-flex flex-wrap justify-content-between flex-row"}>
                {POST_DATA.map(item => {
                    return (
                        <div className={"col-md-4"} key={item?.id}>
                            <Cards
                                imgSrc={item?.img}
                                title={item?.title}
                                desc={item?.desc}
                                date={item?.createdAt}
                                count={item?.count}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardContainer;