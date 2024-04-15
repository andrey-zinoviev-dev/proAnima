// import React from "react";
import "./Good.css";

export default function Candle({ candle, setOrder }) {
    return (
        <article onClick={() => {
            setOrder({...candle, quantity: 1})
        }} className="landing__goods-ul-li-article">
                <img className="landing__goods-ul-li-article-img" src={candle.cover}></img>

            <h3>{candle.name}</h3>
        </article>
    )
}