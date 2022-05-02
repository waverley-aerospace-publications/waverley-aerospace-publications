import { Navbar } from './components/Navbar';
import { Brand } from './components/Brand';
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';

function App() {  
  return (
    <>    
    <div className='flex flex-col'>
      <div className='flex-grow'>
        <Navbar  />
        <div className='max-w-3xl mx-auto font-body'>
          <Brand />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
    </>

  )
}

export default App
