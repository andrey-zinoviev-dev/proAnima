import { categories } from "./utils";

export default function Categories() {
    return (
        <section>
            <h2>Что Вас может заинтересовать</h2>
            <ul>
                {categories.map((category) => {
                    return <li key={category.name}>
                        <h3>{category.name}</h3>
                        <img src={category.cover} />
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