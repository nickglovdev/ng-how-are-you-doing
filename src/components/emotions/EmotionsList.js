import React, { useState, useEffect } from 'react';
import EmotionsCard from "./EmotionsCard"
import EmotionManager from '../../modules/EmotionManager';

const EmotionList = (props) => {
  const [cards, setCard] = useState([]);

  const getEmotionCard = () => {
    return EmotionManager.getAll().then(allEmotionCards => {
      setCard(allEmotionCards)
    });
  };

//   const deleteTask = id => {
//     TaskManager.delete(id)
//       .then(() => TaskManager.getAll()
//         .then(setTask));
//   };

  useEffect(() => {
    getEmotionCard();
  }, []);



  return (
    <div>
        <h2>Emotion Cards</h2>
      <div className="container-cards">
        {cards.map(card => <EmotionsCard
          key={card.id}
          card={card}
        //   deleteTask={deleteTask}
          {...props} />)}

      </div>
    </div>
  );
};
export default EmotionList