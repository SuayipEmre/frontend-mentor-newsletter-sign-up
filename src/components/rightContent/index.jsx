import React from 'react'
import { useMediaQuery } from 'react-responsive';

const RightContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  
  
  return (
    <div className='w-[100%] md:w-[40%] order-1 md:order-2'>
      {
        isMobile ? <img
        className='w-[100%] md:w-[80%]'
        src='../../src/assets/images/illustration-sign-up-mobile.svg' /> : 
        <img
      className='w-[100%] md:w-[80%]'
      src='../../src/assets/images/illustration-sign-up-desktop.svg' />
      }
    </div>
  )
}

export default RightContent