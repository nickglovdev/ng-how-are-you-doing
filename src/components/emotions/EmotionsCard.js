import React from "react";


const EmotionCard = (props) => {
    return (
        <section>
            <div className="dataManipulation">
                <div>
                    {props.card.date}
                </div>

                <div>
                    <button>Edit</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>

            <div className="wordOfWisdom">
                <div>
                    The day is not set
                </div>
            </div>

            <div className="scorePoints">
                <div>
                    {props.card.totalPoints}
                </div>
            </div>
        
        </section>
        
    )
}

export default EmotionCard