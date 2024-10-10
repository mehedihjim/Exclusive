import React from 'react'
import CmnHeading from './CmnHeading'
import { featuresProduct } from '../constant/assets'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import CmnButton from './CmnButton';

const Features = () => {
    return (
        <section className='w-full'>
            <div className="max-w-container mx-auto border-b border-slate-300 pb-[59px]">
                <div className="mb-[40px]">
                    <CmnHeading title={'Features'} mainTitle={'Features Products'} />
                </div>
                <div className="flex justify-between rounded-[4px] overflow-hidden mb-[50px]">
                    {featuresProduct.map((item, index) => (
                        <div key={index} className="w-[270px] h-auto relative">
                            <img src={item.image} alt="" className='w-full h-[250px]' />
                            <p className='py-1 px-3 bg-secondary rounded-[4px] w-fit text-xs text-[#F5F5F5] absolute top-[12px] left-[12px]'>{item.discountPercent}</p>
                            <div className="absolute top-[12px] right-[12px] flex flex-col gap-[8px]">
                                <div className="w-[34px] h-[34px] rounded-full bg-white text-base flex justify-center items-center"><FaRegHeart /></div>
                                <div className="w-[34px] h-[34px] rounded-full bg-white text-base flex justify-center items-center"><FaRegEye /></div>
                            </div>
                            <div className="mt-[16px]">
                                <h4 className='text-base font-medium mb-2'>{item.name}</h4>
                                <div className="flex gap-3 mb-2">
                                    <p className='text-base font-medium text-secondary'>{item.discountPrice}</p>
                                    <del className='text-base font-medium text-[#7D8184]'>{item.price}</del>
                                </div>
                                <div className="flex gap-2">
                                    <ul className='flex text-[#FFAD33] text-xl'>
                                        <li><FaStar />
                                        </li>
                                        <li><FaStar />
                                        </li>
                                        <li><FaStar />
                                        </li>
                                        <li><FaStar />
                                        </li>
                                        <li><FaStar />
                                        </li>
                                    </ul>
                                    <p className='text-[#7D8184] text-sm font-semibold'>{item.totalReviews}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <CmnButton title={'View All Products'} />
                </div>

            </div>
        </section>
    )
}

export default Features
