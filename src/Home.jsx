// import React from "react";
import Header from './Header'
// import arrowPng from "./assets/arrowWhite.png";
// import Spline from '@splinetool/react-spline';
import "./Home.css";

// import { candles, goods } from "./utils";
// import Good from "./Good";
import Categories from "./Categories";
import Landing from "./landing";
import Starter from './Starter';
import Candles from './Candles';
export default function Home() {
    // const candlesRef = React.useRef();

    //states
    // const [candleIndex, setCandleIndex] = React.useState(0);

    // React.useEffect(() => {
    //     console.log(candleIndex);
    // }, [candleIndex]);

    return (
        <>
            <Header></Header>
            <main className="main">
                {/* <section className="main__side">
                    <ul className="main__side-ul">
                        <li className="main__side-ul-li">ВК</li>
                        <li className="main__side-ul-li">ТГ</li>
                        <li className="main__side-ul-li">YT</li>
                    </ul>
                </section> */}
                <Landing>
                    <Starter />
                    <Categories />
                    <Candles />
                </Landing>
                {/* <section className="landing"> */}
                {/* <div className="landing__side">
                    <div>
                        <p>PRO</p>
                        <p>ANIMA</p>
                    </div>
                    <ul>
                        <li>ВК</li>
                        <li>ТГ</li>
                        <li>YT</li>
                    </ul>
                </div> */}
                {/* <div className='landing__main'>
                    <div className="landing__content">
                        <div className='landing__content-action'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate, sed mollitia dolore est maxime sint, eveniet fuga illo excepturi ipsa laudantium optio assumenda labore facere quia nesciunt quae aperiam!</p>
                            <div className="landing__content-action-btns">
                                <button className="landing__content-action-btns-order">
                                    <a href="https://t.me/satibarber">
                                        <p>Заказать</p>
                                        <img src={arrowPng}></img>
                                    </a>

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
                       
                    </div>
                    <div className="landing__goods">
                        <h2 className="landing__goods-headline">Какой аромат подходит Вам?</h2>
                        <ul className="landing__goods-ul">
                            {goods.map((good) => {
                                return <li className="landing__goods-ul-li" key={good.name}>
                                    <Good good={good} />
                                </li>
                            })}
                        </ul>
                    </div>
                </div> */}
            {/* </section> */}
            </main>
        </>
        
    )
}