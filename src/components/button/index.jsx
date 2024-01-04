import React from 'react'

const Button = ({handleSubmit, text}) => {
    return (
        <button
            type='submit'
            className='w-full bg-[#242742] h-12 text-white rounded-lg mt-6 hover:bg-[#FF6257]  hover:shadow-active '
            onClick={handleSubmit}>{text}</button>
    )
}

export default Button