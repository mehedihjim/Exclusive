import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <TopBar />
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout