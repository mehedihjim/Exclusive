import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { BannerSlides } from '../constents/assets'

const BannerSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='pt-[40px] pb-[140px] w-full'>
            <div className="max-w-container mx-auto slider-container">
                {BannerSlides}
                <Slider {...settings}>
                    <div className="w-full h-[344px]">
                        <Link></Link>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default BannerSlider
