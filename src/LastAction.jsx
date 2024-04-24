import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LastAction.css";
import qrcode from "./assets/satiqrcode.png";

export default function LastAction() {
  return (
    <section className="lastAction">
      <div className="container">
        <div className="lastAction__wrapper">
          <div className="lastAction__wrapper-text">
            <h2>Не знаете, какой аромат Вам подойдет?</h2>
            <p>Мы сможем подобрать Вам аромат в чате в Телеграм.</p>
            <a target="_blank" href="https://t.me/sati_albertovna">
              <p>Связаться с нами</p>
              <FontAwesomeIcon style={{rotate: "-45deg"}} icon={faArrowRight} />
            </a>
          </div>
          <img className="lastAction__wrapper-qr-code" src={qrcode} />
        </div>
      </div>
    </section>
  )
}