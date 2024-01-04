import React from 'react'
import { Formik } from 'formik'
import emailInputSchema from '../../../schemas/emailInputSchema'
import { setIsSubmit, setUserEmail } from '../../../store/features/emailInput/actions'
import Button from '../../button'
import classNames from 'classnames'


const intialFormValue = {
    usermail: ''
}

const MailInput = () => {

    
    const handleFormSubmit = (value, actions) => {
        const { usermail } = value
        setUserEmail(usermail)
        setIsSubmit(true)
        actions.resetForm()

    }
    return (
        <Formik validationSchema={emailInputSchema} initialValues={intialFormValue} onSubmit={handleFormSubmit} >
            {
                ({ values, errors, handleChange, handleSubmit }) => (
                    <div className='w-[300px] md:w-[400px]'>
                        <div className='flex items-center justify-between mb-2'>
                            <span className='text-[12px] font-[600] text-[#242742] '>Email Address</span>

                            <p className='text-red-500 text-[12px] '>
                                {errors && errors.usermail}
                            </p>
                        </div>
                        <input
                         className={classNames('border border-[#9294a0] w-full bg-transparent placeholder:text-sm h-12 px-4 rounded-lg outline-none',{
                            'bg-[#FFE4E1] border-[#FF6257]' : errors.usermail
                         })}
                            value={values.usermail}
                            onChange={handleChange('usermail')}
                            type="email"
                            placeholder='email@company.com'
                        />


                       <Button text='Subscribe to monthly newsletter' handleSubmit={handleSubmit} />
                    </div>
                )
            }
        </Formik>
    )
}


export default MailInput