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
import Process from './Process';
import Footer from './Footer';
import Reviews from './Reviews';
import LastAction from './LastAction';
import FAQ from './FAQ';
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
            {/* <main className="main"> */}
                <Landing>
                    <Starter />
                    <Categories />
                    <Candles />
                    <Process />
                    <FAQ />
                    <Reviews />
                    <LastAction />
                    <Footer />
                </Landing>

            {/* </main> */}
        </>
        
    )
}