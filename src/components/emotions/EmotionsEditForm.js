import React, { useState, useEffect } from 'react'
import EmotionsCard from './EmotionsCard'
import PointsManager from '../../modules/PointsManager';
import EmotionManager from '../../modules/EmotionManager';
import QuestionsManager from '../../modules/QuestionsManager';
import moment from 'moment';


// Setting up the field change of all of the dropdowns. They will go into a object.

const EmotionEditForm = (props) => {
    const [points, setPoints] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""})
    const [isLoading, setIsLoading] = useState(false);
    const [cardForm, setCardForm] = useState({ "totalPoints": 0, "date": "", "pointsId": 0, "cardFormId": "" })

    const fieldChange = evt => {
        const stateToChange = { ...points }
        stateToChange[evt.target.id] = evt.target.value;
        setPoints(stateToChange);

        const updateExistingPoints = evt => {
            evt.preventDefault()
            setIsLoading(true);
 
            const editedpoints = {
                id: props.match.params.pointsId,
                points: parseInt(points.pointsId),
                cardFormId: parseInt(cardForm.pointsId)
            };
        }
 
    }

    
}

export default EmotionEditForm