import "./Notification.css";
import { motion } from "framer-motion";
export default function Notification({ selectedOrder }) {

    return (
        <motion.section animate={{opacity: 1}} exit={{opacity: 0}} className="notification">
          <div className="container">
            <div className="notification__wrapper">
              <p>Товар добалвен в корзину</p>
              <div className="notification__order-div">
                <img src={selectedOrder.cover} />
                <p>{selectedOrder.name}</p>
              </div>
            </div>
          </div>
        </motion.section>
    )
}