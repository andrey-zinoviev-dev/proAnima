import React from "react";
import Header from './Header'
// import arrowPng from "./assets/arrowWhite.png";
// import Spline from '@splinetool/react-spline';
import "./Home.css";
import OrderForm from './OrderForm';
import Notification from "./Nofitifaction";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Home({ order, orderClicked, setOrder, setOrderClicked}) {
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
                <main className="main">
                    <Outlet></Outlet>
                    <AnimatePresence>
                        {selectedOrder && <Notification selectedOrder={selectedOrder}></Notification>}
                        {orderClicked && <OrderForm order={order} setOrder={setOrder} setOrderClicked={setOrderClicked}></OrderForm>}
                    </AnimatePresence>
                </main>
        </>
        
    )
}