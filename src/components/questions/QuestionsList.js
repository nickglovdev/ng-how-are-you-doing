import React, { useState, useEffect } from 'react'
import QuestionsManager from '../../modules/QuestionsManager'
import QuestionCard from './QuestionsCard'
import PointsManager from '../../modules/PointsManager'


const QuestionsList = (props) => {
    const [questions, setQuestion] = useState([])
    const [number, setNumber] = useState({ "1": "0", "2": "0", "3": "0", "4": "0", "5": "0", "6": "0", "7": "0", "8": "0", "9": "0", "10": "0" })
    const [isLoading, setIsLoading] = useState(false);

    const getQuestion = () => {
        return QuestionsManager.getAll()
            .then(allQuestions => {
                setQuestion(allQuestions)
            })
    }
    // Setting up the field change of all of the dropdowns. They will go into a object.
    const fieldChange = evt => {
        const stateToChange = { ...number };
        stateToChange[evt.target.id] = evt.target.value;
        setNumber(stateToChange);
        console.log(stateToChange)
    }

    // Creating new Card
    const buildingOutEmotionCard = evt => {
        evt.preventDefault();
        setIsLoading(true)  
        number[1] = parseInt(number[1])
        number[2] = parseInt(number[2])
        number[3] = parseInt(number[3])
        number[4] = parseInt(number[4])
        number[5] = parseInt(number[5])
        number[6] = parseInt(number[6])
        number[7] = parseInt(number[7])
        number[8] = parseInt(number[8])
        number[9] = parseInt(number[9])
        number[10] = parseInt(number[10])
        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
        console.log(sumValues(number))
        // console.log(Moment(new Date()).format("MM/DD/YYYY")).fromNow()
        PointsManager.post(number)
            .then(() => props.history.push("/emotionList"))
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div>
            <form>
                {questions.map(question => <QuestionCard
                    key={question.id}
                    question={question}
                    fieldChange={fieldChange}
                    {...props} />
                )}
            </form>
            <button type="button" disable={isLoading} onClick={buildingOutEmotionCard}>Submit</button>
        </div>
    )

}

export default QuestionsList