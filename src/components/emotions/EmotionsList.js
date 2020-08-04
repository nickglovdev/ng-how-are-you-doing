import React, { useState, useEffect } from 'react';
import EmotionsCard from "./EmotionsCard"
import EmotionManager from '../../modules/EmotionManager';


const EmotionList = (props) => {
  const [cards, setCard] = useState([]);
  const currentUser = localStorage.getItem("id")
  const getEmotionCard = () => {
    console.log(props)
     EmotionManager.getEmotionById(currentUser).then(allEmotionCards => {
      setCard(allEmotionCards)
    });
  };

  // Group of Delete Functions that will delete out the tables for points and emotion cards.
    const deleteEmotions = id => {
      EmotionManager.delete(id)
        .then(() => EmotionManager.getAll()
          .then(setCard));
    };
    

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
          deleteEmotions={deleteEmotions}
          {...props} />)}
      
      </div>
      
    </div>
  );
};
export default EmotionList