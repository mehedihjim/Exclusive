import React from 'react'

const CmnHeading = ({ title, mainTitle }) => {
    return (
        <div>
            <div className="flex gap-4 mb-6">
                <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></div>
                <h3 className='text-base text-[#DB4444] font-semibold my-auto'>{title}</h3>
            </div>
            <h2 className='text-4xl font-semibold'>{mainTitle}</h2>
        </div>
    )
}

export default CmnHeading
