import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header({ order, setOrderClicked }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <p className="header__logo">PROanima</p>
          <nav>
              <ul>
                  <li>Свечи</li>
                  <li>Процесс производства</li>
                  <li>Задать вопрос</li>
              </ul>
          </nav>
          <button className="header__cart-btn" onClick={() => {
              setOrderClicked(true);
          }}>
            <FontAwesomeIcon icon={faBagShopping} />
            <p>{order.length}</p>
          </button>
        </div>
      </div>
    </header>
  )
}