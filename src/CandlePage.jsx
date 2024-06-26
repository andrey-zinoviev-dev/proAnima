import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { fragrances } from "./utils";
import "./CandlePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

export default function CandlePage({ setOrder }) {
  const { state } = useLocation();
  const fragrance = fragrances.find((fragranceEl) => {
    return state.name.includes(fragranceEl.name);
  });

  const navigate = useNavigate();
  // console.log(fragrance);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])

  return (
    <section className="candle">
      <div className="container">
        <Link to={-1} className="candle__back">
          <div>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <span>Назад</span>
        </Link>
        <div className="candle__wrapper">
          <img src={state.cover}></img>
          <div className="candle__wrapper-content">
            <div className="candle__wrapper-content-text">
              <h3 className="candle__wrapper-content-h3">{state.name}</h3>
              <p>{fragrance.description}</p>
              <ul>
                <li>
                  <p>Верхние ноты:</p>
                  <p>{fragrance.upperNotes}</p>
                </li>
                <li>
                  <p>Средние ноты:</p>
                  <p>{fragrance.middleNotes}</p>
                </li>
                <li>
                  <p>Базовые ноты:</p>
                  <p>{fragrance.baseNotes}</p>
                </li>
              </ul>
            </div>
            <p className="candle__wrapper-content-price">{state.price} &#8381;</p>
            <button className="candle__wrapper-content-btn" onClick={() => {
              setOrder((prevValue) => {
                return [...prevValue, {...state, quantity: 1}]
              })
            }}>Добавить в корзину</button>
            {/* <p>Каждая свеча отливается, варится</p> */}
            <p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon> Каждая свеча делается вручную и может чуточку отличаться от фото на сайте</p>
            {/* <div>
              <div>
                <FontAwesomeIcon icon={faTelegramPlane} />
              </div>
              <p>Оставайтесь с нами на связи, узнавайте о новинках свечей первыми!</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}