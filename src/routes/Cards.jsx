import React from 'react'
import { Card } from '../components/Card'
import image from '../img/Page127.jpg'

export default function Cards() {

    const bookCards = [
        {
        title: "Touchdown, Safely!",
        description: "A boffin's tale of all-weather, approach and landing research, and flight trials by R Bruce Lumsden, 1966-1986. Describing some of the contributions that RAE Bedford gave to aviation, this book is lavishly illustrated with close to 400 pictures and 280 diagrams.",
        price: 20
        }
  ]

  const pounds = new Intl.NumberFormat(`en-US`, {
    currency: `GBP`,
    style: 'currency',
  }).format(bookCards[0].price);

    return (
        <div>
            <Card image={image} pounds={pounds} bookCards={bookCards}/>
        </div>
  )
}
