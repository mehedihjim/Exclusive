import React from 'react'
import Todays from '../components/Todays'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'

const Home = () => {
    return (
        <div>
            <Hero />
            <Todays />
            <CategoryList />
        </div>
    )
}

export default Home
