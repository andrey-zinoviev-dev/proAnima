import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <p className="header__logo">PROanima</p>
      <nav>
          <ul>
              <li>Свечи</li>
              <li>Процесс производства</li>
              <li>Задать вопрос</li>
          </ul>
      </nav>
    </header>
  )
}