import { categories } from "./utils";
import "./Categories.css";

export default function Categories() {
    return (
        <section className="categories">
            <h2>Что Вас может заинтересовать</h2>
            <ul className="categories__ul">
                {categories.map((category) => {
                    return <li className="categories__ul-li" key={category.name}>
                        <h3>{category.name}</h3>
                        <img className="categories__ul-li-img" src={category.cover} />
                    </li>
                })}
            </ul>
            {/* <div>
                <h3>Свечи</h3>
            </div>
            <div>
                <h3>Саше</h3>
            </div>
            <div>
                <h3>Подарочные упаковки</h3>
            </div> */}
        </section>
    )
}