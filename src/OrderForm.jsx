import formPic from "./assets/IMG_3760.jpg";
import "./OrderForm.css";

export default function OrderForm({order}) {
    return (
        <section className="order">
            <div className="container">
                <div className="order__wrapper">
                    <img src={formPic} />
                    <form>
                        <h2>
                            Заказать свечи
                        </h2>
                        
                        <input name="name" placeholder="Имя"></input>
                        <input name="phone" placeholder="Телефон"></input>
                        <button>Отправить заявку</button>
                    </form>
                </div>
            </div>
        </section>
    )
}