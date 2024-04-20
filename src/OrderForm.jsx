import formPic from "./assets/IMG_3760.jpg";
// import good1 from "./assets/8.png";
import "./OrderForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function OrderForm({ order, setOrder, setOrderClicked }) {
    // console.log(order);
    return (
        <motion.section animate={{opacity: 1, visibility: "visible"}} exit={{opacity: 0, visibility: "hidden"}} className="order">
            <div className="container">

                <div className="order__wrapper">
                    <button className="order__close" onClick={() => {
                        setOrderClicked(false);
                    }}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <img className="order__wrapper-cover" src={formPic} />
                    <div className="order__wrapper-content">
                        <h2>
                            Заказать свечи
                        </h2>
                        <ul className="order__wrapper-ul">
                            {order.map((orderEl) => {
                                return <li key={orderEl.name}>
                                    <img src={orderEl.cover}></img>
                                    <div className="order__wrapper-ul-qunatity-div">
                                        <button onClick={() => {
                                            setOrder((prevValue) => {
                                                return prevValue.map((prevCandle) => {
                                                    return prevCandle.name === orderEl.name ? {...prevCandle, quantity: prevCandle.quantity + 1} : prevCandle;
                                                })
                                            })
                                        }}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        <span>{orderEl.quantity}</span>
                                        <button onClick={() => {
                                            setOrder((prevValue) => {
                                                return prevValue.map((prevCandle) => {
                                                    return prevCandle.name === orderEl.name ? {...prevCandle, quantity: prevCandle.quantity - 1} : prevCandle;
                                                })
                                            })
                                        }}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                    </div>
                                    <p>{orderEl.name}</p>
                                    {/* <span>{order.quantity}</span> */}
                                    <button className="order__wrapper-ul-li-btn" onClick={() => {
                                        setOrder((prevValue) => {
                                            return prevValue.filter((cartEl) => {
                                                return cartEl.name !== orderEl.name;
                                            })
                                        })
                                        // setOrder(orderEl)
                                    }}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                    {/* <span><FontAwesomeIcon icon={faXmark} /></span> */}
                                </li>
                            })}
                        </ul>
                        <form>
                            <input name="name" placeholder="Имя"></input>
                            <input name="phone" placeholder="Телефон"></input>
                            <button>Отправить заказ</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}