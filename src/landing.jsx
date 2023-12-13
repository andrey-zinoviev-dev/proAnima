// import React from "react";
import Header from './Header'
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
            <div className='landing__main'>
                <Header></Header>
                <div className="landing__content">
                    <div className='landing__content-action'>
                        <h1>Волшебные свечи для волшебной <span>атмосферы</span></h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                        <div>
                            <button>
                                <p>Заказать</p>
                                <img src={arrowPng}></img>
                            </button>
                            <div>
                                <button>
                                    <p>Назад</p>
                                </button>
                                <button>
                                    <p>Вперед</p>
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* <Spline scene='https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode' /> */}
                    <div className='landing__content-carousel'>
                        <ul className='landing__content-carousel-ul'>
                            <li key="0">
                                <Spline scene='https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode' />
                            </li>
                            <li key="1">
                                <Spline scene='https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode' />
                            </li>
                        </ul>
                        <div className='landing__content-carousel-stats'>
                            <p>
                                <span id='current-candle'>01</span>|<span>06</span>
                            </p>
                            {/* <div className=''>
                                <div></div>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="landing__content-action">
                        <div className='landing__content-action-text'>
                            <h1>Волшебные свечи для волшебной <span>атмосферы</span></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                            <button>
                                <p>Заказать</p>
                                <img src={arrowPng}></img>
                            </button>
                        </div>
                        <p className='landing__content-action-index'>01</p>
                        <Spline scene="https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode" />
                    </div>
                    <div className="landing__content-action">
                        <div>
                            <h1>Волшебные свечи для волшебной <span>атмосферы</span></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                            <button>
                                <p>Заказать</p>
                                <img src={arrowPng}></img>
                            </button>
                        </div>
                        <Spline scene="https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode" />
                    </div>
                    <div className="landing__content-action">
                        <div>
                            <h1>Волшебные свечи для волшебной <span>атмосферы</span></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                            <button>
                                <p>Заказать</p>
                                <img src={arrowPng}></img>
                            </button>
                        </div>
                        <Spline scene="https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode" />
                    </div>
                    <div className="landing__content-action">
                        <div>
                            <h1>Волшебные свечи для волшебной <span>атмосферы</span></h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                            <button>
                                <p>Заказать</p>
                                <img src={arrowPng}></img>
                            </button>
                        </div>
                        <Spline scene="https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}