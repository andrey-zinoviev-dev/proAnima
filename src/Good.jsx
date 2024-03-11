import React from "react";
import "./Good.css";

export default function Good({good}) {
    return (
        <article className="landing__goods-ul-li-article">
            <img className="landing__goods-ul-li-article-img" src={good.cover}></img>
            <h3>{good.name}</h3>
        </article>
    )
}