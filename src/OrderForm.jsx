import formPic from "./assets/IMG_3760.jpg";
// import good1 from "./assets/8.png";
import "./OrderForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus, faPaperPlane, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

export default function OrderForm({ order, setOrder, setOrderClicked }) {
    //state
    const [successfullOrder, setSuccessfullOrder] = React.useState(false);
    //refs
    const nameRef = React.useRef();
    const phoneRef = React.useRef();

    //functions
    function minusCandle(candle) {
        setOrder((prevValue) => {
            return prevValue.map((prevCandle) => {
                return prevCandle.name === candle.name ? {...prevCandle, quantity: prevCandle.quantity - 1} : prevCandle;
            })
        })
    }

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
                        {!successfullOrder ? <>
                            <h2>
                                Заказать свечи
                            </h2>
                            <ul className="order__wrapper-ul">
                                {order.length > 0 ? order.map((orderEl) => {
                                    return <li key={orderEl.name}>
                                        <img src={orderEl.cover}></img>
                                        <div className="order__wrapper-ul-qunatity-div">
                                            <button  onClick={() => {
                                                setOrder((prevValue) => {
                                                    return prevValue.map((prevCandle) => {
                                                        return prevCandle.name === orderEl.name ? {...prevCandle, quantity: prevCandle.quantity + 1} : prevCandle;
                                                    })
                                                })
                                            }}>
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                            <span>{orderEl.quantity}</span>
                                            <button disabled={orderEl.quantity < 2 ? true : false} className={orderEl.quantity < 2 && "disabled-btn" } onClick={() => {
                                                minusCandle(orderEl);
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
                                })
                                :
                                <li id="empty-cart" key="no_candles-in-order">
                                    <h3>Ваша корзина пуста...</h3>
                                    <p>Но Вы можете выбрать себе что-то</p>
                                </li>
                            }
                            </ul>
                            <form onSubmit={(evt) => {
                                evt.preventDefault();
                                // console.log(order);
                                const styledOrder = order.map((orderEl) => {
                                    return `Название- ${orderEl.name}, количество- ${orderEl.quantity}, тип- ${orderEl.type.includes("container") ? "контейнер" : orderEl.type.includes("form") ? "формовая" : "саше"}, цена- ${orderEl.quantity * orderEl.price}`
                                });
                                // console.log(styledOrder);
                                return fetch(`https://api.telegram.org/bot7106049110:AAEKohoCZ__Id52zJvLJ3M36PSspj8jMaCQ/sendMessage`, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        chat_id: 923058386,
                                        parse_mode: "html",
                                            text: `Новая заявка: Имя- ${nameRef.current.value}, телефон: ${phoneRef.current.value}. Что заказали: ${styledOrder.join(",")}`
                                    }),
                                })
                                .then((data) => {
                                    setSuccessfullOrder(true);
                                    setOrder([]);
                                })
                            }} className="order__form">
                                <input name="name" ref={nameRef} placeholder="Имя"></input>
                                <input name="phone" ref={phoneRef} placeholder="Телефон"></input>
                                <button>Отправить заказ</button>
                            </form>
                        </>
                        :
                        <>
                            <h2 style={{textAlign: "left"}}>Ваша заявка отправлена!</h2>
                            <div className="order__wrapper-success-text">
                                <p>Спасибо за заказ</p>
                                <a href="https://t.me/sati_albertovna">
                                    <p>Ссылка для связи со мной</p>
                                    <FontAwesomeIcon icon={faArrowRight} style={{rotate: "-45deg"}} />
                                </a>
                            </div>
                            <div className="order__wrapper-success-social">
                                <p>Подпишитесь на мои соцсети, чтобы быть в курсе всех новостей и новинок</p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faVk} />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                </ul>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}