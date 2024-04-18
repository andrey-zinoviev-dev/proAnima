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
import Notification from "./Nofitifaction";



export default function Home() {
    // const candlesRef = React.useRef();

    //states
    const [orderClicked, setOrderClicked] = React.useState(false);
    const [order, setOrder] = React.useState([]);
    const [selectedOrder, setSelectedOrder] = React.useState(null);
    
    React.useEffect(() => {
        // console.log(order);
        setSelectedOrder(order[order.length - 1]);
        const timeout = setTimeout(() => {
            setSelectedOrder(null);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [order.length]);

    return (
        <>
            <Header order={order} setOrderClicked={setOrderClicked}></Header>
            {/* <main className="main"> */}
                <Landing>
                    <Starter setOrderClicked={() => {
                        setOrderClicked(true);
                    }} />
                    {/* <Categories /> */}
                    <Candles setOrder={setOrder}/>
                    <Process />
                    <FAQ />
                    {/* <Reviews /> */}
                    <LastAction />
                    {orderClicked && <OrderForm order={order} setOrderClicked={setOrderClicked}></OrderForm>}
                    {selectedOrder && <Notification selectedOrder={selectedOrder}></Notification>}
                    {/* {selectedOrder && <Cart selectedOrder={selectedOrder}></Cart>} */}
                    {/* <Footer /> */}
                </Landing>
                {/* {orderClicked && } */}
            {/* </main> */}
        </>
        
    )
}