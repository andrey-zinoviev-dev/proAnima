import React from "react";
import Starter from "./Starter";
import Candles from "./Candles";
import Process from "./Process";
import FAQ from "./FAQ";
import LastAction from "./LastAction";
import OrderForm from "./OrderForm";
import Notification from "./Nofitifaction";
import { AnimatePresence } from "framer-motion";
export default function Landing({ order, setOrder, orderClicked, setOrderClicked }) {
    //states
    // const [orderClicked, setOrderClicked] = React.useState(false);
    // const [order, setOrder] = React.useState([]);
    // const [selectedOrder, setSelectedOrder] = React.useState(null);
        
    // React.useEffect(() => {
    //         // console.log(order);
    //     setSelectedOrder(order[order.length - 1]);
    //     const timeout = setTimeout(() => {
    //         setSelectedOrder(null);
    //     }, 3000);
    
    //     return () => {
    //         clearTimeout(timeout);
    //     }
    // }, [order.length]);
    return (
        <>
            <Starter 
            // setOrderClicked={() => {
            //     setOrderClicked(true);
            // }} 
            />
            <Candles setOrder={setOrder}/>
            <Process />
            <FAQ />
            <LastAction />
        </>
    )
}