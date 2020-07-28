import React from "react";


const QuestionCard = (props) => {
    return (
        <fieldset>
            <label><h3>{props.question.cardSentence}</h3></label>
            <div>
                <select id="answers">
                <option value="0">0</option>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">5</option>
                <option value="0">6</option>
                <option value="0">7</option>
                <option value="0">8</option>
                <option value="0">9</option>
                <option value="0">10</option>
                </select>
            </div>
        </fieldset>
    )
}

export default QuestionCard