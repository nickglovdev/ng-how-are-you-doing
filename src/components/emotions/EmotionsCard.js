import React from "react";
import "./Emotion.css"

const EmotionCard = (props) => {
    return (
        <section className="formEntry">
            <div className="dataManipulation">
                <div>
                    {props.card.date}
                    <button className="formDelete" type="button" onClick={() => props.deleteEmotions(props.card.id)}>Delete</button>
                </div>
            </div>

            <div className="wordOfWisdom">
                <div>
                   {props.card.quote} - {props.card.author}
                </div>
            </div>

            <div className="scorePoints">
                <div>
                    Total Points: {props.card.totalPoints}
                </div>
            </div>
        
        </section>
        
    )
}

export default EmotionCard