import classNames from 'classnames'
import React from 'react'
import { useIsSubmit, useUserEmail } from '../store/features/emailInput/hooks'
import Button from '../components/button'
import { setIsSubmit } from '../store/features/emailInput/actions'
import { useMediaQuery } from 'react-responsive'
import { SuccessIcon } from '../components/svg'

const MainLayout = ({ children }) => {
  const isSubmit = useIsSubmit()
  const usermail = useUserEmail()
  const isMobile = useMediaQuery({ maxWidth: 1280 })

  return (
    <div className={classNames('w-[375px] md:w-[1440px]  flex flex-col items-center  xl:items-start xl:flex-row xl:py-6 xl:rounded-[40px] bg-white', {
      'md:w-[375px] justify-center ': isSubmit,
      'justify-center': isMobile
    })}>
      {
        !isSubmit ?
          <>
            {children}
          </> :
          <div className='w-[85%] mx-12'>
            <SuccessIcon />

            <div className='my-8'>
              <h1 className='font-bold text-[30px]'>Thanks for subscribing!</h1>
              <p>A confirmation email has been sent to <span className='font-bold'>{usermail}</span> Please open it and click the button inside to confirm your subscription</p>
              <div className={classNames('',{
                'absolute bottom-10 left-5 right-5' : isMobile
              })}>
                <Button text='Dismiss message' handleSubmit={() => setIsSubmit(false)} />
              </div>
            </div>

          </div>
      }
    </div>
  )
}

export default MainLayout