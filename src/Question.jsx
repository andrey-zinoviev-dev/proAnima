import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Qusetion({ question }) {
    const [clickedQuestion, setClickedQuestion] = React.useState(false);

    return (
        <button className="faq__wrapper-ul-li-button ">
            <div onClick={() => {
                setClickedQuestion((prevValue) => {
                    return !prevValue;
                });
            }} className="faq__wrapper-ul-li-button-div">
                <h3>{question.q}</h3>
                <FontAwesomeIcon icon={clickedQuestion ? faXmark : faPlus} />
            </div>
            {clickedQuestion && <p>{question.a}</p>}
        </button>
    )
}