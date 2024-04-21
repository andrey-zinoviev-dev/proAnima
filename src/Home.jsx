// import React from "react";
import Header from './Header'
// import arrowPng from "./assets/arrowWhite.png";
// import Spline from '@splinetool/react-spline';
import "./Home.css";
import OrderForm from './OrderForm';
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Home({ order, orderClicked, setOrder, setOrderClicked}) {
    return (
        <>
            <Header order={order} setOrderClicked={setOrderClicked}></Header>
                <main className="main">
                    <Outlet></Outlet>
                    <AnimatePresence>
                        {orderClicked && <OrderForm order={order} setOrder={setOrder} setOrderClicked={setOrderClicked}></OrderForm>}
                    </AnimatePresence>
                </main>
        </>
        
    )
}