import React, { useState } from 'react';
import { featuresProduct } from '../constant/assets';
import CmnHeading from './CmnHeading';
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import CmnButton from './CmnButton';

const OurProducts = () => {
    const [activeColors, setActiveColors] = useState({}); // Store active color index for each product
    const colors = [
        { bgColor: 'bg-red-600' },
        { bgColor: 'bg-red-800' },
    ];

    const [showAll, setShowAll] = useState(false);

    const handleViewAll = () => {
        setShowAll(true);
    };

    const handleHideAll = () => {
        setShowAll(false);
    };

    const displayedProducts = showAll ? featuresProduct : featuresProduct.slice(0, 8);

    const handleColorChange = (productIndex, colorIndex) => {
        setActiveColors(prevState => ({
            ...prevState,
            [productIndex]: colorIndex, // Set active color for specific product
        }));
    };

    return (
        <section className="w-full pb-[140px]">
            <div className="max-w-container mx-auto pb-8 md:pb-[59px]">
                <div className="mb-10 md:mb-[40px]">
                    <CmnHeading title="Our Products" mainTitle="Explore Our Products" />
                </div>
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-8 mb-10 md:mb-[50px] cursor-pointer">
                    {displayedProducts.map((item, productIndex) => (
                        <div key={productIndex} className="w-full sm:w-[48%] md:w-[32%] lg:w-[270px] h-auto relative">
                            <div className="relative mb-4 group">
                                <img src={item.image} alt="" className="w-full" />
                                <button className="cursor-pointer w-full h-10 bg-black absolute bottom-0 left-0 text-white flex gap-2 justify-center items-center text-xs leading-[18px] rounded-b-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <IoCartOutline className="text-2xl" />
                                    Add To Cart
                                </button>
                            </div>
                            <p className="py-1 px-3 bg-secondary rounded-[4px] w-fit text-xs text-[#F5F5F5] absolute top-2 left-2">
                                {item.discountPercent}
                            </p>
                            <div className="absolute top-2 right-2 flex flex-col gap-2">
                                <div className="cursor-pointer w-8 h-8 rounded-full bg-white text-base flex justify-center items-center">
                                    <FaRegHeart />
                                </div>
                                <div className="cursor-pointer w-8 h-8 rounded-full bg-white text-base flex justify-center items-center">
                                    <FaRegEye />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-sm md:text-base font-medium mb-2">{item.name}</h4>
                                <div className="flex gap-3 mb-2">
                                    <p className="text-sm md:text-base font-medium text-secondary">{item.discountPrice}</p>
                                    <del className="text-sm md:text-base font-medium text-[#7D8184]">{item.price}</del>
                                </div>
                                <div className="flex gap-2">
                                    <ul className="flex text-[#FFAD33] text-lg md:text-xl">
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                        <li><FaStar /></li>
                                    </ul>
                                    <p className="text-[#7D8184] text-xs md:text-sm font-semibold">{item.totalReviews}</p>
                                </div>
                                <ul className="mt-2 flex gap-2">
                                    {colors.map((color, colorIndex) => (
                                        <li
                                            key={colorIndex}
                                            className={`w-[20px] h-[20px] rounded-full ${activeColors[productIndex] === colorIndex ? 'border-[2px] border-black' : 'overflow-hidden'}`}
                                            onClick={() => handleColorChange(productIndex, colorIndex)}
                                        >
                                            <div className={`w-full h-full rounded-full ${color.bgColor} ${activeColors[productIndex] === colorIndex ? 'border border-white' : ''}`}></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                {showAll ? (
                    <div className="flex justify-center">
                        <CmnButton onClick={handleHideAll} title="Hide All Products" />
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <CmnButton onClick={handleViewAll} title="View All Products" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default OurProducts;
