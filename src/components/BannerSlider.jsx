import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { bannerData } from '../constant/assets'
import { Link } from "react-router-dom";

const BannerSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='pt-[40px] pb-[140px] w-full'>
            <div className="max-w-container mx-auto slider-container">
                <Slider {...settings}>
                    {bannerData.map((item, index) => (
                        <div className="w-full h-[344px]">
                            <Link to={item.link}><img src={item.image} alt="" /></Link>
                        </div>
                    ))}
                </Slider>
            </div >
        </section >
    )
}

export default BannerSlider
