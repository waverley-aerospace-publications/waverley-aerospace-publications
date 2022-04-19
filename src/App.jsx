import { Navbar } from './components/Navbar';
import { Brand } from './components/Brand';
import wapLogo from './img/wap-logo.svg'
import './App.css'

function App() {
  const logo = wapLogo 

  const bookCards = [
    {
      title: "Touchdown, Safely!",
      description: "A boffin's tale of all-weather approch and landing research and flight trials by R Bruce Lumsden, 1966-1986. Describing some of the contributions that RAE Bedford gave to aviation, this book is lavishly illustrated with close to 400 pictures and 280 diagrams.",
      price: 20
    }
  ]

  return (
    <>    

      <Navbar  />
      <Brand logo={logo}  />

      <div>
        <h2>{bookCards[0].title}</h2>
        <h2>{bookCards[0].price}</h2>
        <p>{bookCards[0].description}</p>
      </div>

    </>

  )
}

export default App
