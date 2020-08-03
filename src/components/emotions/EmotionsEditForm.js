import React, { useState, useEffect } from 'react'
import EmotionsCard from './EmotionsCard'
import PointsManager from '../../modules/PointsManager';
import EmotionManager from '../../modules/EmotionManager';
import QuestionsManager from '../../modules/QuestionsManager';
import moment from 'moment';


// Setting up the field change of all of the dropdowns. They will go into a object.

const EmotionEditForm = (props) => {
    const [questions, setQuestion] = useState([])
    const [number, setNumber] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", numberId: "" })
    const [isLoading, setIsLoading] = useState(false);
    const [emotionCardInfo] = useState({ "totalPoints": 0, "date": "", "groupPointsId": 0 })

    const fieldChange = evt => {
        const stateToChange = { ...number }
        stateToChange[evt.target.id] = evt.target.value;
        setNumber(stateToChange);

        const updateExistingPoints = evt => {
            evt.preventDefault()
            setIsLoading(true);
 
            const editedpoints = {
                id: props.match.params.emotionsId,
                number: parseInt(number.numberId),
                groupPointsId: parseInt(emotionCardInfo.groupPointsId)
            };
        }
 
    }
}

export default EmotionEditForm