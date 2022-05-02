import React from "react";
import wapLogo from '../img/wap-logo.svg'

export function Brand() {

  const logo = wapLogo 

  return (
    <div 
      className='p-5 mb-5 relative flex'
      style={{
        height: '190px'
      }}    
    >
        <h1 className='capitalize font-header text-4xl leading-snug sm:w-max mx-auto my-auto'>
          waverley aerospace publications
        </h1>
        <div 
            className='absolute' 
            style={{
                right: '1rem',
                // left: '25%',
                top: '2rem',
                bottom: '1rem',
                backgroundImage: `url(${logo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                zIndex: '-1',
                // height: '1000px',
                width: '95%',
                //   opacity: '0.8'
            }}
        ></div>
    </div>
  )
}
  