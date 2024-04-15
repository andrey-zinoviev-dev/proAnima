import React from "react";
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
import Process from './Process';
import Footer from './Footer';
import Reviews from './Reviews';
import LastAction from './LastAction';
import FAQ from './FAQ';
import OrderForm from './OrderForm';
export default function Home() {
    // const candlesRef = React.useRef();

    //states
    const [orderClicked, setOrderClicked] = React.useState(false);
    const [order, setOrder] = React.useState([]);

    React.useEffect(() => {
        console.log(order);
    }, [order]);

    return (
        <>
            <Header></Header>
            {/* <main className="main"> */}
                <Landing>
                    <Starter setOrderClicked={() => {
                        setOrderClicked(true);
                    }} />
                    <Categories />
                    <Candles setOrder={(data) => {
                        setOrder((prevValue) => {
                            return [...prevValue, data];
                        })
                    }}/>
                    <Process />
                    <FAQ />
                    {/* <Reviews /> */}
                    <LastAction />
                    {orderClicked && <OrderForm order={order} setOrder={(element) => {
                        setOrder((prevValue) => {
                            return prevValue.filter((candle) => {
                                return candle.name !== element.name;
                            })
                        })
                    }} setOrderClicked={() => {
                        setOrderClicked(false);
                    }}></OrderForm>}
                    {/* <Footer /> */}
                </Landing>
                {/* {orderClicked && } */}
            {/* </main> */}
        </>
        
    )
}