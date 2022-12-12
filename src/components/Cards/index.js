import s from "./Cards.module.scss";

const Cards = ({
                   imgSrc = "",
                   title = "",
                   desc = "",
                   date,
                   count = 0, addClass=""
               }) => {
    return (
        <div className={`${s.cardContainer} ${addClass}`}>
            <div className={`${s.cardThumbnail}`}>
                <img src={imgSrc} alt={""}/>
            </div>
            <div className={`card-content ${s.cardContent}`}>
                <h6 className={``}>
                    {title}
                </h6>
                {desc && (
                    <div className={`${s.cardDesc}`}>
                        {desc}
                    </div>
                )}
                <div className={`${s.cardFooter}`}>
                    <div className={"mr-3"}>
                        <i className='fa fa-calendar mr-2'></i>{" "}
                        {date}
                    </div>
                    <div>
                        <i className='fa fa-comment mr-2'></i>{" "}
                        {count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;