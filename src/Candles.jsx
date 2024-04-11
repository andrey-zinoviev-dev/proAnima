import { candles } from "./utils";
import Candle from "./Candle";
import "./Candles.css";

export default function Candles() {
    return (
        <section className="landing__candles">
            <div className="container">
                <h2 className="landing__candles-headline">Какой аромат подходит Вам?</h2>
                <ul className="landing__candles-ul">
                    {candles.map((candle) => {
                        return <li className="landing__goods-ul-li" key={candle.name}>
                            <Candle candle={candle} />

                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}