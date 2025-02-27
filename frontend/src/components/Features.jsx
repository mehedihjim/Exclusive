import React from 'react';
import CmnHeading from './CmnHeading';
import { featuresProduct } from '../constant/assets';
import { FaStar, FaRegHeart, FaRegEye } from "react-icons/fa";
import CmnButton from './CmnButton';

const Features = () => {
    return (
        <section className='w-full'>
            <div className="max-w-container mx-auto border-b border-slate-300 pb-8 md:pb-[59px]">
                <div className="mb-10 md:mb-[40px]">
                    <CmnHeading title={'Features'} mainTitle={'Features Products'} />
                </div>
                <div className="flex flex-wrap justify-between gap-4 mb-10 md:mb-[50px]">
                    {featuresProduct.map((item, index) => (
                        <div key={index} className="w-full sm:w-[48%] md:w-[32%] lg:w-[270px] h-auto relative">
                            <img src={item.image} alt="" className='w-full h-[200px] md:h-[250px] object-cover' />
                            <p className='py-1 px-3 bg-secondary rounded-[4px] w-fit text-xs text-[#F5F5F5] absolute top-2 left-2'>{item.discountPercent}</p>
                            <div className="absolute top-2 right-2 flex flex-col gap-2">
                                <div className="w-8 h-8 rounded-full bg-white text-base flex justify-center items-center"><FaRegHeart /></div>
                                <div className="w-8 h-8 rounded-full bg-white text-base flex justify-center items-center"><FaRegEye /></div>
                            </div>
                            <div className="mt-4">
                                <h4 className='text-sm md:text-base font-medium mb-2'>{item.name}</h4>
                                <div className="flex gap-3 mb-2">
                                    <p className='text-sm md:text-base font-medium text-secondary'>{item.discountPrice}</p>
                                    <del className='text-sm md:text-base font-medium text-[#7D8184]'>{item.price}</del>
                                </div>
                                <div className="flex gap-2">
                                    <ul className='flex text-[#FFAD33] text-lg md:text-xl'>
                                        {[...Array(5)].map((_, i) => (
                                            <li key={i}><FaStar /></li>
                                        ))}
                                    </ul>
                                    <p className='text-[#7D8184] text-xs md:text-sm font-semibold'>{item.totalReviews}</p>
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
    );
};

export default Features;