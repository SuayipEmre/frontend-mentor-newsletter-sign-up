import React from 'react'
import { ListIcon } from '../../svg'

const ListItem  = ({text}) => {
  return (
    <div className='flex gap-5 mb-2 md:mb-4  w-[80%] md:w-[100%]  '>
      <ListIcon />
        <p>{text}</p>
    </div>
  )
}

export default ListItem