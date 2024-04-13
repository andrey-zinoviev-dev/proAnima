import { questions } from "./utils"
import "./FAQ.css";
import Qusetion from "./Question";


export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <div className="faq__wrapper">
          <h2>Вопросы-ответы</h2>
          <ul className="faq__wrapper-ul">
            {questions.map((question) => {
              return <li className="faq__wrapper-ul-li" key={question.a}>
                {/* <button>{question.q}</button> */}
                <Qusetion question={question} />
                {/* <div className="faq__wrapper-ul-li-div">
                  <h3>{question.q}</h3>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <p>{question.a}</p> */}
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}