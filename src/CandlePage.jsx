import { useLocation } from "react-router-dom"
import { fragrances } from "./utils";
import "./CandlePage.css";

export default function CandlePage() {
  const { state } = useLocation();
  const fragrance = fragrances.find((fragranceEl) => {
    return state.name.includes(fragranceEl.name);
  });

  // console.log(fragrance);

  return (
    <section className="candle">
      <div className="container">
        <div className="candle__wrapper">
          <img src={state.cover}></img>
          <div className="candle__wrapper-content">
            <div className="candle__wrapper-content-text">
              <h3 className="candle__wrapper-content-h3">{state.name}</h3>
              <p>{fragrance.description}</p>
              <p>Верхние ноты: {fragrance.upperNotes}</p>
              <p>Средние ноты: {fragrance.middleNotes}</p>
              <p>Базовые ноты: {fragrance.baseNotes}</p>
            </div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </section>
  )
}