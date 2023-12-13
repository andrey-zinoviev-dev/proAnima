import React from "react";
import Header from './Header'
import arrowPng from "./assets/arrowWhite.png";
import Spline from '@splinetool/react-spline';
import "./landing.css";

import { candles } from "./utils";

export default function Landing() {
    const candlesRef = React.useRef();

    //states
    const [candleIndex, setCandleIndex] = React.useState(0);

    React.useEffect(() => {
        console.log(candleIndex);
    }, [candleIndex]);

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
                        <div className="landing__content-action-btns">
                            <button className="landing__content-action-btns-order">
                                <p>Заказать</p>
                                <img src={arrowPng}></img>
                            </button>
                            <div className="landing__content-action-btns-nav">
                                <button style={{rotate: "-180deg"}} className="landing__content-action-btns-nav-prev" onClick={() => {
                                    candlesRef.current.scroll({top: 0, left: -candlesRef.current.clientWidth, behavior: "smooth"})
                                    setCandleIndex((prevValue) => {
                                        return prevValue === 0 ? 0 : prevValue - 1;
                                    })
                                }}>
                                    <img src={arrowPng}></img>
                                </button>
                                <button className="landing__content-action-btns-nav-next" onClick={() => {
                                    candlesRef.current.scroll({top: 0, left: candlesRef.current.clientWidth, behavior: "smooth"});
                                    setCandleIndex((prevValue) => {
                                        return prevValue === candles.length - 1 ? candles.length -1 : prevValue + 1;
                                    })
                                }}>
                                    <img src={arrowPng}></img>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='landing__content-carousel'>
                        <ul ref={candlesRef} className='landing__content-carousel-ul'>
                            {candles.map((candle, index) => {
                                return <li key={index}>
                                    <Spline scene='https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode' />
                                </li>
                            })}
                            {/* <li key="0">
                                <Spline scene='https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode' />
                            </li>
                            <li key="1">
                                <Spline scene='https://prod.spline.design/2ThHoVQiJBBz1cOY/scene.splinecode' />
                            </li> */}
                        </ul>
                        <div className='landing__content-carousel-stats'>
                            <p>
                                <span id='current-candle'>{candleIndex + 1}</span>|<span>{candles.length}</span>
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