import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './BannerSlider.css'
import { bannerData } from '../../constant/assets'
import { Link } from "react-router-dom";

const BannerSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        appendDots: dots => (
            <div
                style={{
                    margin: "21px",
                    padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#ffffff50",
                    borderRadius: "100%",
                }}
            >
            </div>
        ),
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
