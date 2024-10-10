import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return (
        <section className='w-full bg-black text-white py-3'>
            <div className="max-w-container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm px-4 sm:px-0">
                <div className="mb-2 sm:mb-0"></div>
                <p className='text-center sm:text-left mb-2 sm:mb-0'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to='/' className='font-semibold'>Shop Now</Link>
                </p>
                <select className='bg-transparent border-none cursor-pointer'>
                    <option className='text-black' value="English">English</option>
                    <option className='text-black' value="Bengali">Bengali</option>
                    <option className='text-black' value="Arabic">Arabic</option>
                </select>
            </div>
        </section>
    )
}

export default TopBar
