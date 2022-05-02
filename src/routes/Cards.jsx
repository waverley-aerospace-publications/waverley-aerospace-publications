import React from 'react'
import { Link } from 'react-router-dom'
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
          <div className='w-10/12 sm:w-11/12 mx-auto'>
            <p className='mb-3'>Welcome to Waverley Aerospace Publications. Below are the books currently available for purchase. <strong>Touchdown, Safely!</strong> is available immediately, whereas <strong>Blind Landing, A History</strong> is available for pre-order and will be posted week commencing 23rd May.</p>
            <p className='mb-3'>Both books can be bought together for the reduced price of £30. P&P is £5 per order.</p>
            <p className='mb-8'>This website is under development, and so we can not currently take payment here. However, if you'd like to email the author with a purchase order, payment can be made directly using PayPal. <Link to='/contact'>Please contact the author</Link> for details.</p>
          </div>
          <div className='grid md:grid-cols-2'>
            {bookCards.map((card, index) => (
              <div>
                <Card 
                  key={`card ${index}: ${card.title}`}
                  image={images[index]} 
                  title={card.title} 
                  description={card.description} 
                  price={card.price}              
                />
              </div>
            ))}
          </div>
      </div>
  )
}
