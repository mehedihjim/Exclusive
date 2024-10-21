import React from 'react'
import Todays from '../components/Todays'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import BestSelling from '../components/BestSelling'

const Home = () => {
    return (
        <div>
            <Hero />
            <Todays />
            <CategoryList />
            <BestSelling />
        </div>
    )
}

export default Home
