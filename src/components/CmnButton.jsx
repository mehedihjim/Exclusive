import React from 'react'

const CmnButton = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className='py-4 px-12 text-base text-white font-medium bg-secondary rounded-[4px] hover:shadow-lg duration-300'>{title}</button>
    )
}

export default CmnButton
