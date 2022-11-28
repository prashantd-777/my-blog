import s from "./BackToTop.module.scss";

const BackToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <a
            id={"BACK_TO_TOP"}
            className={`${s.backToTopContainer}`}
           onClick={scrollToTop}
        >
            <svg className={`${s.iconArrowUp}`} viewBox="0 0 24 24">
                <title>Back to top</title>
                <path
                    d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"/>
            </svg>
        </a>
    )
}

export default BackToTop;