import formPic from "./assets/IMG_3760.jpg";
// import good1 from "./assets/8.png";
import "./OrderForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function OrderForm({ order, setOrderClicked }) {
    return (
        <section className="order">
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
                                    <p>{orderEl.name}</p>
                                    <span>{order.quantity}</span>
                                    {/* <button onClick={() => {
                                        setOrder(orderEl)
                                    }}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button> */}
                                </li>
                            })}
                        </ul>
                        <form>
                            <input name="name" placeholder="Имя"></input>
                            <input name="phone" placeholder="Телефон"></input>
                            <button>Отправить заявку</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}