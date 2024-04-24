// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Good.css";
import { faExclamationCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Candle({ candle, setOrder }) {
    return (
        <article className="landing__goods-ul-li-article">
            {/* {candle.type.includes("container") && <button className="landing__goods-ul-li-article-wrapper-info">
                <FontAwesomeIcon icon={faInfoCircle} />
            </button>} */}
            <Link to={`/candles/${candle.name}`} state={candle}>
                <img loading="eager" className="landing__goods-ul-li-article-img" src={candle.cover}></img>
            </Link>

            <div className="landing__goods-ul-li-article-wrapper">
                <h3>{candle.name}</h3>
                {candle.size && <p>Объем <span style={{fontWeight: 500}}>{`${candle.size}`}</span></p>}
                <p style={{fontWeight: 700, letterSpacing: 1}}>{candle.price} &#8381;</p>
                <button onClick={() => {
                    // setSelectedOrder(candle);
                    setOrder((prevValue) => {
                        return [...prevValue, {...candle, quantity: 1}];
                    })
                }}>Заказать</button>
            </div>
        </article>
    )
}