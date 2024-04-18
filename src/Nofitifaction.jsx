import "./Notification.css";

export default function Notification({ selectedOrder }) {
    return (
      <section className="notification">
        <div className="container">
          <div className="notification__wrapper">
            <p>Товар добалвен в корзину</p>
            <div className="notification__order-div">
              <img src={selectedOrder.cover} />
              <p>{selectedOrder.name}</p>
            </div>
          </div>
        </div>
      </section>
    )
}