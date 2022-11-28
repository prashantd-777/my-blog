import s from "./Tabs.module.scss";
import {TABS_ITEMS} from "../../constant/tabsItems";

const Tabs = () => {
    return (
        <div className={`container ${s.tabsContainer} mt-5`}>
            <ul>
                {TABS_ITEMS.map(item => {
                    return (
                        <li key={item?.id}>
                            <button>
                                {item?.name}
                            </button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Tabs;