import "./Process.css";
import process from "./assets/process.jpg";
import qrcode from "./assets/frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Process () {
    return (
        <section className="process">
            <div className="container">
                <div className="process__wrapper">
                    <img className="process__wrapper-img" src={process}></img>
                    <div className="process__wrapper-text">
                        <h2 className="process__headline">Как создаются свечи?</h2>
                        <p className="process__p">
                            В процессе создания наших свечей мы используем только высококачественные ингредиенты, что гарантирует их <span className="process__p-span">безупречное качество</span> и <span className="process__p-span">безопасность</span> для здоровья.
                        </p>
                        <p className="process__p">
                            Воск используется соевый-  это <span className="process__p-span">гипоаллергенный</span> и экологически чистый материал, который не выделяет вредных веществ.
                        </p>
                        <p className="process__p">
                            Натуральные масла, используемые в создании ароматов, <span className="process__p-span">успокаивают</span> нервную систему, создают уют дома, а также наполняют дом <span className="process__p-span" >приятным</span> ароматом. 
                        </p>
                        <a target="_blank" href="https://t.me/proanima_candles" className="process__button">
                            <p>Изучить</p>
                            <FontAwesomeIcon style={{rotate: "-45deg"}} icon={faArrowRight} />
                        </a>
                        <img id="qr-code" className="process__wrapper-text-qr" src={qrcode} />
                    </div>

                </div>

                {/* <h3>Процесс создания свечей</h3>
                <video className="process__video" src={video} controls muted></video> */}
            </div>
        </section>
    )
}