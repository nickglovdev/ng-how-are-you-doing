// import React, { useState, useEffect } from 'react'
// import QuestionsManager from '../../modules/QuestionsManager'
// import QuestionCard from './QuestionsCard'
// import PointsManager from '../../modules/PointsManager'
// import moment from 'moment';
// import EmotionManager from '../../modules/EmotionManager';

// // Setting up the field change of all of the dropdowns. They will go into a object.

// const EmotionEditForm = (props) => {
//     const [questions, setQuestion] = useState([])
//     const [number, setNumber] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "" })
//     const [isLoading, setIsLoading] = useState(false);
//     const [emotionCardInfo] = useState({ "totalPoints": 0, "date": "", "groupPointsId": 0 })

//     const fieldChange = evt => {
//         const stateToChange = { ...number }
//         stateToChange[evt.target.id] = evt.target.value;
//         setNumber(stateToChange);

//         const updateExistingPoints = evt => {
//             evt.preventDefault()
//             setIsLoading(true);
 
//             const editedpoints = {
//                 id: props.match.params.emotionsId,
//                 1: number[1],
//                 2: number[2],
//                 3: number[3],
//                 4: number[4],
//                 5: number[5],
//                 6: number[6],
//                 7: number[7],
//                 8: number[8],
//                 9: number[9],
//                 10: number[10],
//                 groupPointsId: parseInt(emotionCardInfo.groupPointsId)
//             };
//         }
 
//     }
// }

// export default EmotionEditForm