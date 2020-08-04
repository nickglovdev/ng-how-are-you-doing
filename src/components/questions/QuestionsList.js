import React, { useState, useEffect } from 'react'
import QuestionsManager from '../../modules/QuestionsManager'
import QuestionCard from './QuestionsCard'
import PointsManager from '../../modules/PointsManager'
import moment from 'moment';
import EmotionManager from '../../modules/EmotionManager';


const QuestionsList = (props) => {
    const [questions, setQuestion] = useState([])
    const [quotes, setQuotes] = useState([])
    const [number, setNumber] = useState({ 1: "0", 2: "0", 3: "0", 4: "0", 5: "0", 6: "0", 7: 0, 8: "0", 9: "0", 10: "0" })
    const [emotionCardInfo] = useState({ "totalPoints": 0, "date": "", "userId": 0, "quote": "", "author": "" })

    const getQuestion = () => {
        return QuestionsManager.getAll()
            .then(allQuestions => {
                setQuestion(allQuestions)
            })
    }
    const getQuote = () => {
        return QuestionsManager.getQuote()
            .then(allQuotes => {
                setQuotes(allQuotes)
            })
    }
    
    // Setting up the field change of all of the dropdowns. They will go into a object.
    const fieldChange = evt => {
        const stateToChange = { ...number }
        stateToChange[evt.target.id] = evt.target.value;
        setNumber(stateToChange);
    
    }

    // Creating new Card
    const buildingOutEmotionCard = evt => {
        evt.preventDefault();
        
        // Turning all dropdown returns into int.
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

        // Calcuations for emotionCardInfo
        const dropdownCalculation = obj => Object.values(obj).reduce((a, b) => a + b);
        emotionCardInfo["totalPoints"] = dropdownCalculation(number)
        emotionCardInfo["date"] = (moment(new Date()).format("MM/DD/YYYY"))
        emotionCardInfo["userId"] = parseInt(localStorage.getItem('id'))
        emotionCardInfo["quote"] = quotes.content
        emotionCardInfo["author"] = quotes.author

       
        // Posting informatin about emotion cards
        EmotionManager.post(emotionCardInfo)
        .then(props.history.push("/emotions"))

        
    }

    useEffect(() => {
        getQuestion();
        getQuote()
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
            <button type="button" onClick={buildingOutEmotionCard}>Submit</button>
        </div>
    )

}

export default QuestionsList