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
    const [selectedOrder, setSelectedOrder] = React.useState(null);
    
    React.useEffect(() => {
        console.log(selectedOrder);
    }, [selectedOrder]);

    return (
        <>
            <Header order={order}></Header>
            {/* <main className="main"> */}
                <Landing>
                    <Starter setOrderClicked={() => {
                        setOrderClicked(true);
                    }} />
                    <Categories />
                    <Candles setSelectedOrder={setSelectedOrder}/>
                    <Process />
                    <FAQ />
                    {/* <Reviews /> */}
                    <LastAction />
                    {orderClicked && <OrderForm></OrderForm>}
                    {/* {selectedOrder && <Cart selectedOrder={selectedOrder}></Cart>} */}
                    {/* <Footer /> */}
                </Landing>
                {/* {orderClicked && } */}
            {/* </main> */}
        </>
        
    )
}