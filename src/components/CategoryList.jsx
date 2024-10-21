import React, { useRef } from 'react';
import CmnHeading from './CmnHeading';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { categorySlide } from '../constant/assets';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const CategoryList = () => {
    const sliderRef = useRef(null);

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="w-full pt-[80px] pb-[70px]">
            <div className="max-w-container mx-auto border-b border-slate-300 pb-[70px]">
                <div className="flex justify-between items-end">
                    <CmnHeading title={'Categories'} mainTitle={'Browse By Category'} />
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex justify-center items-center"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <Slider ref={sliderRef} {...settings} className="mt-[60px]">
                    {categorySlide.map((item, index) => (
                        <div key={index} className="px-2">
                            <Link
                                to=""
                                className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                            >
                                <item.icon className="text-[56px] mx-auto" />
                                <p className="text-base leading-6">{item.name}</p>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CategoryList;
