import { containerCandles, smallContainerCandles, formCandles, sacheCandles } from "./utils";
import Candle from "./Candle";
import "./Candles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
export default function Candles({ setOrder }) {

    // const formCandles = candles.filter((candle) => {
    //     return candle.type.includes("form");
    // });
    
    // const sacheCandles = candles.filter((candle) => {
    //     return candle.type.includes("form");
    // });

    return (
        <section className="landing__candles">
            <div className="container">
                <h2 className="landing__candles-headline">Какой аромат подходит Вам?</h2>
                <div className="landing__candles-type">
                    <h3>Контейнерные свечи</h3>
                    <div className="landing__goods-ul-warning">
                        <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> <p>Свечи объемом 190мл без крышки</p>
                    </div>
                    <ul className="landing__candles-ul">
                        {containerCandles.map((candle) => {
                            return <li className="landing__goods-ul-li" key={candle.name}>
                                <Candle setOrder={setOrder} candle={candle} />

                            </li>
                        })}
                    </ul>
                    <ul className="landing__candles-ul">
                        {smallContainerCandles.map((candle) => {
                            return <li className="landing__goods-ul-li" key={candle.name}>
                                <Candle setOrder={setOrder} candle={candle} />

                            </li>
                        })}
                    </ul>
                </div>
                <div className="landing__candles-type">
                    <h3>Формовые свечи</h3>
                    <div className="landing__goods-ul-warning">
                        <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> 
                        <div className="landing__goods-ul-warning-wrapper">
                            <p>Формовые свечи можно сделать с любым из следующих ароматов, надо только выбрать форму:</p>
                        </div>
                    </div>
                    <ul className="landing__candles-ul">
                        {formCandles.map((candle) => {
                            return <li className="landing__goods-ul-li" key={candle.name}>
                                <Candle setOrder={setOrder}  candle={candle} />
                            </li>
                        })}
                    </ul>
                </div>
                <div className="landing__candles-type">
                    <h3>Саше</h3>
                    <div className="landing__goods-ul-warning">
                        <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> 
                        <div className="landing__goods-ul-warning-wrapper">
                            <p>Формовые свечи можно сделать с любым из следующих ароматов, надо только выбрать саше:</p>

                        </div>
                    </div>
                    <ul className="landing__candles-ul">
                        {sacheCandles.map((candle) => {
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