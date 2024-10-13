import React from 'react'
import BannerSidebar from './BannerSidebar'
import BannerSlider from './BannerSlider/BannerSlider'

const Hero = () => {
    return (
        <div className="max-w-container mx-auto flex justify-between pb-[140px] ">
            <BannerSidebar />
            <BannerSlider />
        </div>
    )
}

export default Hero
