import React from 'react'

const SimpleCmnButton = ({ title }) => {
    return (
        <button className='py-4 px-12 text-base text-black border border-slate-300 font-medium bg-transparent rounded-[4px] hover:border-black/40 duration-300'>{title}</button>
    )
}

export default SimpleCmnButton
