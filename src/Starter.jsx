import welcomePic from "./assets/1.png";
import "./Starter.css";

export default function Starter() {
  return (
    <section className="start padding_large">
      <div className="start__text">
        <h1 className="start__headline">Волшебные свечи для волшебной <span>атмосферы</span></h1>
        <p>Свечи из натурального соевого воска с идеально подобранными ароматами подойдут как для него, так и для нее</p>
        <button className="start__order-btn">
          <p>Заказать</p>
            {/* <img src={arrowPng}></img> */}
        </button>
      </div>
      <img src={welcomePic} />
    </section>
  )
}