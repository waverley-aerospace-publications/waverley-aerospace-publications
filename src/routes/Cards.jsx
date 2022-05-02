import React from 'react'
import { Card } from '../components/Card'
import image1 from '../img/Page127.jpg'
import image2 from '../img/ConcordeLanding.png'

export default function Cards() {
  
  const bookCards = [
    {
      title: "Touchdown, Safely!",
      description: "A boffin's tale of all-weather, approach and landing research, and flight trials by R Bruce Lumsden, 1966-1986. Describing some of the contributions that RAE Bedford gave to aviation, this book is lavishly illustrated with close to 400 pictures and 280 diagrams.",
      price: 20,
    },
    {
      title: "Blind Landing - A History",
      description: "This book is a history of the development of Blind Landing for commercial and military aircraft and the ability to operate when the pilot has little or no visibility of the airfield runway. It describes the aircraft, the systems and the people involved from the earliest days.",
      price: 30,
    }
  ]  
  
  const images = [image1, image2]

  return (
      <div>
          {bookCards.map((card, index) => (
            <Card 
              key={`card ${index}: ${card.title}`}
              image={images[index]} 
              title={card.title} 
              description={card.description} 
              price={card.price}              
            />
          ))}
      </div>
  )
}
