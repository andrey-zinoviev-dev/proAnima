// import React from "react";
import "./Good.css";

export default function Candle({ candle }) {
    return (
        <article className="landing__goods-ul-li-article">
                <img className="landing__goods-ul-li-article-img" src={candle.cover}></img>

            <h3>{candle.name}</h3>
        </article>
    )
}