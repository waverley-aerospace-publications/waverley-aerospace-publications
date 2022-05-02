import { Navbar } from './components/Navbar';
import { Brand } from './components/Brand';
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {  
  return (
    <>    
      <Navbar  />
      <div className='max-w-3xl mx-auto font-body'>
        <Brand />
        <Outlet />
      </div>
    </>

  )
}

export default App
