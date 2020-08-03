import React from "react";


const EmotionCard = (props) => {
    return (
        <section>
            <div className="dataManipulation">
                <div>
                    {props.card.date}
                </div>

                <div>
                    <button type="button" onClick={() =>props.history.push(`/emotions/${props.card.id}/edit`)}>Edit</button>
                </div>
                <div>
                    <button type="button" onClick={() => props.deleteFunction(props.card.id)}>Delete</button>
                </div>
            </div>

            <div className="wordOfWisdom">
                <div>
                   
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