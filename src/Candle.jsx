// import React from "react";
import "./Good.css";

export default function Candle({ candle, setOrder }) {
    return (
        <article onClick={() => {
            // setOrder({...candle, quantity: 1})
        }} className="landing__goods-ul-li-article">
            <img className="landing__goods-ul-li-article-img" src={candle.cover}></img>

            <div className="landing__goods-ul-li-article-wrapper">
                <h3>{candle.name}</h3>
                {candle.type.includes("container") && <ul className="landing__goods-ul-li-article-ul">
                    <li>
                        <p>250</p>
                    </li>
                    <li>
                        <p>190</p>
                    </li>
                </ul>}
                <button onClick={() => {
                    setOrder({...candle, quantity: 1});
                }}>Заказать</button>
            </div>
        </article>
    )
}