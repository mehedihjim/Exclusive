import React from 'react'
import BannerSlider from '../components/BannerSlider/BannerSlider'
import Todays from '../components/Todays'
import Features from '../components/Features'
import Hero from '../components/Hero'
import CategorySlide from '../components/CategorySlide'

const Home = () => {
    return (
        <div>
            <Hero />
            <Todays />
            <CategorySlide />
        </div>
    )
}

export default Home
