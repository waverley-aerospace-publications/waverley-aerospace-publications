import React from 'react'

export default function ContentBlock(props) {
  return (
    <div className='w-11/12 mx-auto'>
        {props.children}
    </div>
  )
}
