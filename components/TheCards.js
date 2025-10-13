'use client';
import { useState } from 'react';
import { cards as initialCards } from '../data/TheCardList';
import { Button } from "../components/ui/button";
import MyToggle from '../components/MyToggle';
import NavigationButtons from '../components/NavigationButtons';
import Image from 'next/image';
import '../styles/TheCards.css';


function TheCards () {
  // 1️ Crée une copie locale du tableau des cartes
  const [cardList, setCardList] = useState(
   initialCards.map(c => ({...c, active: false}))
  );
  
  const [filterButton, setFilterButton] = useState('All') 
  
//Verification the holy card exist 
  const toggleCard = (id) => {
   setCardList(prevCards => prevCards.map(card => card.id === id ?  
      { ...card, active: !card.active } : card))
  }

//   The function for remove the card
  const handleRemove = (id) => {
    setCardList(prevCards => prevCards.filter(card => card.id !== id));
  };

//   The function for filter cards 
  const filterCards = cardList.filter(card => {  
   if(filterButton === 'All') return true ; 
   if(filterButton === 'Active') return card.active
   if(filterButton === 'Inactive') return !card.active 
  }) ; 

  return (

    <section className ='section_content'>
      
      <NavigationButtons filterButton = {filterButton} setFilterButton = {setFilterButton} className='nav_btn'/>

      <div className='cards-styles'> 
        {filterCards.map((card) => (
          <div key={card.id} className='card_round'>
            <span style={{ display: 'flex', gap: 15 }}>
              <Image
                src={card.src}
                alt={card.alt}
                height={74}
                width={75}
              />
              <span style={{ position: 'relative', bottom: 20 }}>
                <h2>{card.title}</h2>
                <p style={{ position: 'relative', bottom: 14, fontSize: 17 }}>
                {card.description}</p>
              </span>
            </span>

            <span style={{ display: 'flex', justifyContent: 'space-between' }}>
            
              <Button variant="outline" onClick={() => handleRemove(card.id)}>
                Remove
              </Button>
              <MyToggle active = {card.active} 
              onToggle = {() => toggleCard(card.id)} 
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TheCards;
