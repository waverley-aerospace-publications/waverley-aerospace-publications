import { Brand } from './components/Brand';
import { useState } from 'react'
import wapLogo from './img/wap-logo.svg'
import './App.css'

function App() {
  const logo = wapLogo 

  return (
    <>    

      <div
        className='bg-gray-100 w-full px-5 py-2 border-t-4 border-blue-200 mt-2'
      >
        <div
          className='flex w-min mx-auto'
        >
          <div className='mr-8'><button className='capitalize font-header text-xs'>home</button></div>
          <div className='mr-8'><button className='capitalize font-header text-xs'>about</button></div>
          <div className='mr-8'><button className='capitalize font-header text-xs'>books</button></div>
          <div className='mr-8'><button className='capitalize font-header text-xs'>contact</button></div>
        </div>
      </div>

      <Brand logo={logo}  />

    </>

  )
}

export default App
