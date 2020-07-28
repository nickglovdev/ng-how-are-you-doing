import React, { useState, useEffect } from 'react'
import QuestionsCard from "./QuestionsCard"
import QuestionsManager from '../../modules/QuestionsManager'
import QuestionCard from './QuestionsCard'

const QuestionsList = (props) => {
    const [questions, setQuestion] = useState([])

    const getQuestion = () => {
        return QuestionsManager.getAll()
            .then(allQuestions => {
                setQuestion(allQuestions)
            })
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <form>
            {questions.map(question => <QuestionCard
                key={question.id}
                question={question}
                {...props} />
            )}
        </form>
    )

}

export default QuestionsList