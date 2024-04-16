import { candles } from "./utils";
import Candle from "./Candle";
import "./Candles.css";

export default function Candles({setOrder}) {
    return (
        <section className="landing__candles">
            <div className="container">
                <h2 className="landing__candles-headline">Какой аромат подходит Вам?</h2>
                <div>
                    <h3>Контейнерные свечи</h3>
                    <ul className="landing__candles-ul">
                    {candles.filter((candle) => {
                        return candle.type.includes("container");
                    }).map((candle) => {
                        return <li className="landing__goods-ul-li" key={candle.name}>
                            <Candle setOrder={setOrder} candle={candle} />

                        </li>
                    })}
                </ul>
                </div>
                <div>
                    <h3>Формовые свечи</h3>
                    <ul className="landing__candles-ul">
                    {candles.filter((candle) => {
                        return candle.type.includes("form");
                    }).map((candle) => {
                        return <li className="landing__goods-ul-li" key={candle.name}>
                            <Candle setOrder={setOrder} candle={candle} />

                        </li>
                    })}
                </ul>
                </div>
            </div>
        </section>
    )
}