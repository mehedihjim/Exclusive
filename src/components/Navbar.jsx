import { useState } from 'react'
import logo from '../assets/Logo.png'
import { CgMenuLeft, CgMenuLeftAlt } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 pt-[40px] pb-[15px] bg-white border-b border-slate-300">
            <div className="max-w-container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div id='logo-img' className="flex items-center flex-shrink-0">
                        <Link to=''><img className='mr-2' src={logo} alt="logo" /></Link>
                    </div>
                    <ul id='menu-links' className='hidden lg:flex ml-14 gap-[48px] text-base'>
                        <li><NavLink to='' className={({ isActive }) =>
                            isActive ? "border-b border-black" : isActive ? "active" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to='contact' className={({ isActive }) =>
                            isActive ? "border-b border-black" : isActive ? "active" : ""
                        }>Contact</NavLink></li>
                        <li><NavLink to='about' className={({ isActive }) =>
                            isActive ? "border-b border-black" : isActive ? "active" : ""
                        }>About</NavLink></li>
                        <li><NavLink to='sign-up' className={({ isActive }) =>
                            isActive ? "border-b border-black" : isActive ? "active" : ""
                        }>Sign Up</NavLink></li>
                    </ul>
                    <div className="hidden lg:flex gap-7">
                        <div className="sm:w-[224px] w-[243px] h-[38px] relative">
                            <input className='w-full h-full bg-[#F5F5F5] text-[12px] py-[7px] pl-[20px] pr-[12px] rounded-[4px]' type="text" placeholder='What are you looking for?' />
                            <CiSearch className='text-2xl absolute right-[7px] top-[50%] -translate-y-[50%]' />
                        </div>
                        <Link to='cart' className='my-auto text-[32px]'>
                            <IoCartOutline />
                        </Link>
                    </div>
                    <div id='mobile-menu' className="lg:hidden md:flex flex-col justify-end text-[28px]">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <CgMenuLeft /> : <CgMenuLeftAlt />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-slate-200 w-full p-4 lg:hidden">
                        <ul className='mb-6'>
                            <li className='py-4 border-b border-black/20'><NavLink to='' className={({ isActive }) =>
                                isActive ? "font-semibold" : isActive ? "active" : ""
                            }>Home</NavLink></li>
                            <li className='py-4 border-b border-black/20'><NavLink to='contact' className={({ isActive }) =>
                                isActive ? "font-semibold" : isActive ? "active" : ""
                            }>Contact</NavLink></li>
                            <li className='py-4 border-b border-black/20'><NavLink to='about' className={({ isActive }) =>
                                isActive ? "font-semibold" : isActive ? "active" : ""
                            }>About</NavLink></li>
                            <li className='py-4 border-b border-black/20'><NavLink to='sign-up' className={({ isActive }) =>
                                isActive ? "font-semibold" : isActive ? "active" : ""
                            }>Sign Up</NavLink></li>
                        </ul>
                        <div className="flex justify-center space-x-6">
                            <div className="sm:w-[224px] w-[243px] h-[38px] relative">
                                <input className='w-full h-full bg-[#F5F5F5] text-[12px] py-[7px] pl-[20px] pr-[12px] rounded-[4px]' type="text" placeholder='What are you looking for?' />
                                <CiSearch className='text-2xl absolute right-[7px] top-[50%] -translate-y-[50%]' />
                            </div>
                            <Link to='cart' className='my-auto text-[32px]'>
                                <IoCartOutline />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar