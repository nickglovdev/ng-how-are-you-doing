import React from "react";
import "./Emotion.css"

const EmotionCard = (props) => {
    return (
        <section className="formEntry">
            <div className="dataManipulation">
                <div>
                    <span className="emotionTime">{props.card.date}</span>
                </div>
            </div>

            <div className="wordOfWisdom">
                <div>
                   {props.card.quote} - {props.card.author}
                </div>
            </div>

            <div className="scorePoints">
                <div>
                    <span className="totalPointsTitle">Total Points</span>: <span className="totalPoints">{props.card.totalPoints}</span>
                </div>
            </div>
            <div className="">
                <div>
                    <button className="formDelete" type="button" onClick={() => props.deleteEmotions(props.card.id)}>Delete</button>
                </div>
            </div>
        
        </section>
        
    )
}

export default EmotionCard