import React from "react";

export function Card({ image, pounds, bookCards }) {
    return (
        <div className=''>
            <div className='border-t-4 border-b-4 border-blue-200 relative pt-6 pb-5 mx-auto w-10/12'>
                <h2 className='w-max pr-2 absolute -top-3 bg-white'>
                    {bookCards[0].title}
                </h2>
                <div className=' w-full mx-auto'>
                    <img src={image} />
                </div>
                <div className='pt-6'>
                    <p>{bookCards[0].description}</p>
                </div>
                <h2 className='w-max pr-2 absolute -bottom-4 bg-white'>
                    {pounds}
                </h2>
            </div>
        </div>
  )
}
  