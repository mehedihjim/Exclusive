import React from 'react'
import MusicalImage from '../assets/MusicalSale.png'
import { Link } from 'react-router-dom'
import MusicalSaleTimer from './MusicalSaleTimer'

const MusicalSale = () => {
    return (
        <section className='mb-[71px]'>
            <div className="max-w-container mx-auto bg-black pt-[37px] pb-[43px] px-6 lg:px-[56px]">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
                        <p className='font-semibold text-base text-[#00FF66] mb-[20px] lg:mb-[32px]'>Musical Sale</p>
                        <h2 className='font-semibold text-3xl lg:text-5xl text-[#FAFAFA] mb-[20px] lg:mb-[32px]'>
                            Enhance Your Music Experience
                        </h2>
                        <div>
                            <MusicalSaleTimer />
                        </div>
                        <Link className='inline-block text-[#fafafa] w-fit rounded-[4px] py-3 px-8 lg:py-4 lg:px-12 bg-[#00FF66] mt-4 lg:mt-6'>
                            Buy Now!
                        </Link>
                    </div>
                    {/* Right Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={MusicalImage}
                            alt="Musical Sale"
                            className='w-3/4 lg:w-full drop-shadow-[2px_2px_50px_rgba(255,255,255,0.25)]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MusicalSale
