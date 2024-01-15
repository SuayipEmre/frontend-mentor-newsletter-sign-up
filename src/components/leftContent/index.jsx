import React from 'react'
import ListItem from './listItems'
import MailInput from './mailInput'

const LeftContent = () => {



  return (
    <div className='w-[100%]  md:w-[60%] md:mx-0  flex flex-col items-center justify-center  order-2 xl:order-1  py-14'>

      <div className='flex flex-col items-center w-full md:w-[400px] '>
        
        <div className='w-[80%] md:w-full '>
          <h1 className='font-extrabold text-[30px] '>Stay Updated!</h1>
          <p className='my-4 md:w-[90%]'>Join 60.000+ product managers receiving monthly updates on : </p>
        </div>


        {/*List Items */}
        <div className='my-6  md:w-[400px] flex flex-col items-center md:block  '>
          <ListItem text='Product Discovery and building what matters' />
          <ListItem text='Measuring to ensure  updates are a success' />
          <ListItem text='And much more !' />
        </div>
        <MailInput />
      </div>

    </div>
  )
}

export default LeftContent