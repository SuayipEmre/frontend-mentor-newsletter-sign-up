import React from 'react'

const ListItem  = ({text}) => {
  return (
    <div className='flex gap-5 mb-2 md:mb-4  w-[80%] md:w-[100%]  '>
      <img src= '../../../../src/assets/images/icon-list.svg' alt="icon-list" />
        <p>{text}</p>
    </div>
  )
}

export default ListItem