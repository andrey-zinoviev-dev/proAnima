import React from "react";
import arrowPng from "./assets/arrowWhite.png";
import Spline from '@splinetool/react-spline';
import "./landing.css";

export default function Landing() {
    return (
        <section className="landing">
            <div className="landing__side">
                <div>
                    <p>PRO</p>
                    <p>ANIMA</p>
                </div>
                <ul>
                    <li>ВК</li>
                    <li>ТГ</li>
                    <li>YT</li>
                </ul>
            </div>
            <div className="landing__content">
                <div className="landing__content-action">
                    <h1>Волшебные свечи для волшебной <span>атмосферы</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                    <button>
                        <p>Заказать</p>
                        <img src={arrowPng}></img>
                    </button>
                </div>
                <Spline scene="https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode" />
            </div>
        </section>
    )
}