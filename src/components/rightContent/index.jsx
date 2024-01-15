import React from 'react'
import { useMediaQuery } from 'react-responsive';
import {  SignUpDesktop, SignUpMobile} from '../svg';

const RightContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 1280 })
  
  
  return (
    <div className='w-[100%] xl:w-[40%]  flex items-center justify-center xl:block order-1 xl:order-2'>

        {
          isMobile ?  <SignUpMobile /> : <SignUpDesktop />
        }
    </div>
  )
}

export default RightContent