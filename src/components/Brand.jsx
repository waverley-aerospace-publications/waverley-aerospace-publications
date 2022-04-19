import React from "react";

export function Brand({logo}) {
  return (
    <div className='p-5 relative'>
        <h1 className=' capitalize font-header text-4xl leading-snug'>
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
  