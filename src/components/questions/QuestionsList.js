import React, { useState, useEffect } from 'react'
import QuestionsManager from '../../modules/QuestionsManager'
import QuestionCard from './QuestionsCard'

const QuestionsList = (props) => {
    const [questions, setQuestion] = useState([])
    const [number, setNumber] = useState({1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 10:"10"})

    const getQuestion = () => {
        return QuestionsManager.getAll()
            .then(allQuestions => {
                setQuestion(allQuestions)
            })
    }
    const fieldChange = evt => {
        const stateToChange = { ...number };
        stateToChange[evt.target.id] = evt.target.value;
        setNumber(stateToChange);
        console.log(stateToChange)
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <form>
            {questions.map(question => <QuestionCard
                key={question.id}
                question={question}
                fieldChange={fieldChange}
                {...props} />
            )}
        </form>
    )

}

export default QuestionsList