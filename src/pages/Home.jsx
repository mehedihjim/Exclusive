import React from 'react'
import Todays from '../components/Todays'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import BestSelling from '../components/BestSelling'
import MusicalSale from '../components/MusicalSale'
import OurProducts from '../components/OurProducts'
import NewArrivals from '../components/NewArrivals'
import CustomerSupport from '../components/CustomerSupport'

const Home = () => {
    return (
        <div>
            <Hero />
            <Todays />
            <CategoryList />
            <BestSelling />
            <MusicalSale />
            <OurProducts />
            <NewArrivals />
            <CustomerSupport />
        </div>
    )
}

export default Home
