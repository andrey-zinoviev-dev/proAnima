// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Good.css";
import { faExclamation, faExclamationCircle, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Candle({ candle, setOrder }) {
    return (
        <article className="landing__goods-ul-li-article">
            <button className="landing__goods-ul-li-article-wrapper-info">
                <FontAwesomeIcon icon={faInfoCircle} />
            </button>
            <img className="landing__goods-ul-li-article-img" src={candle.cover}></img>

            <div className="landing__goods-ul-li-article-wrapper">
                <h3>{candle.name}</h3>
                {candle.type.includes("container") && <p>Объем <span style={{fontWeight: 500}}>{candle.size}</span></p>}
                {candle.type.includes("container") && candle.size === 190 && <div className="landing__goods-ul-li-article-wrapper-warning"><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> <p>У свечей этого бъема нет крышки</p></div>}
                {/* {candle.type.includes("container") && <ul className="landing__goods-ul-li-article-ul">
                    <li>
                        <p>250</p>
                    </li>
                    <li>
                        <p>190</p>
                    </li>
                </ul>} */}
                <button onClick={() => {
                    // setSelectedOrder(candle);
                    setOrder((prevValue) => {
                        return [...prevValue, {...candle, quantity: 1}];
                    })
                    // setOrder({...candle, quantity: 1});
                }}>Заказать</button>
            </div>
        </article>
    )
}