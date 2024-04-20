// import React from "react";
import Header from './Header'
// import arrowPng from "./assets/arrowWhite.png";
// import Spline from '@splinetool/react-spline';
import "./Home.css";

// import { candles, goods } from "./utils";
// import Good from "./Good";
// import Categories from "./Categories";
// import Landing from "./landing";
// import Starter from './Starter';
// import Candles from './Candles';
// import Process from './Process';
// import Footer from './Footer';
// import Reviews from './Reviews';
// import LastAction from './LastAction';
// import FAQ from './FAQ';
// import OrderForm from './OrderForm';
// import Notification from "./Nofitifaction";

// import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Home({ order, setOrderClicked}) {
    // const candlesRef = React.useRef();

    return (
        <>
            <Header order={order} setOrderClicked={setOrderClicked}></Header>
                <main className="main">
                    <Outlet></Outlet>
                </main>
                {/* <Landing>
                    
                    <Starter setOrderClicked={() => {
                        setOrderClicked(true);
                    }} />
                    <Candles setOrder={setOrder}/>
                    <Process />
                    <FAQ />
                    <LastAction />
                    <AnimatePresence>
                        {orderClicked && <OrderForm order={order} setOrder={setOrder} setOrderClicked={setOrderClicked}></OrderForm>}
                        {selectedOrder && <Notification selectedOrder={selectedOrder}></Notification>}
                    </AnimatePresence>
                </Landing> */}

        </>
        
    )
}