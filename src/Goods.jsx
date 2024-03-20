// import { goods } from "./utils";
import Good from "./Good";
export default function Goods() {
    return (
        <div className="landing__goods">
            <h2 className="landing__goods-headline">Какой аромат подходит Вам?</h2>
            <ul className="landing__goods-ul">
                {/* {goods.map((good) => {
                    return <li className="landing__goods-ul-li" key={good.name}>
                        <Good good={good} />
                    </li>
                })} */}
            </ul>
        </div>
    )
}