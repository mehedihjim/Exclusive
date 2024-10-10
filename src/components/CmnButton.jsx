import React from 'react'

const CmnButton = ({ title }) => {
    return (
        <button className='py-4 px-12 text-base text-white font-medium bg-secondary rounded-[4px] hover:shadow-lg duration-300'>{title}</button>
    )
}

export default CmnButton
