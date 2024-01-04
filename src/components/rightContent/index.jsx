import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { ListIcon, SignUpDesktop, SignUpMobile, SuccessIcon } from '../svg';

const RightContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  
  
  return (
    <div className='w-[100%] md:w-[40%] order-1 md:order-2'>

      <div className='w-[100%] md:w-[80%]'>
        {
          isMobile ?  <SignUpMobile /> : <SignUpDesktop />
        }
      </div>
    </div>
  )
}

export default RightContent