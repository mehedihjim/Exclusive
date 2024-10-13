import { useState } from 'react'
import logo from '../assets/Logo.png'
import { CgMenuLeft, CgMenuLeftAlt } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosHeartEmpty } from "react-icons/io";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const [profileSettings, setProfileSettings] = useState(false)

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
                        <div className="flex gap-4">
                            <NavLink to='wishlist' className='my-auto text-[26px]'>
                                <IoIosHeartEmpty />
                            </NavLink>
                            <NavLink to='cart' className='my-auto text-[26px] relative'>
                                <IoCartOutline />
                                <div className="absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full bg-secondary text-xs flex justify-center items-center text-white">2</div>
                            </NavLink>
                            <NavLink onClick={() => setProfileSettings(!profileSettings)} className='relative my-auto text-[22px] w-8 h-8 rounded-full bg-secondary text-white flex justify-center items-center'>
                                <BsPerson />
                                {profileSettings &&
                                    <ul className="absolute right-0 bottom-[-190px] bg-black/80 text-[#FAFAFA] pt-[18px] pr-[12px] pb-[10px] pl-[20px] w-[214px] text-sm leading-[21px] rounded-[4px] border border-slate-300 flex flex-col gap-[13px]">
                                        <li><Link>Manage My Account</Link></li>
                                        <li><Link>My Order</Link></li>
                                        <li><Link>My Cancellations</Link></li>
                                        <li><Link>My Reviews</Link></li>
                                        <li><Link>Logout</Link></li>
                                    </ul>
                                }
                            </NavLink>
                        </div>
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
                        <div className="flex space-x-6">
                            <div className="sm:w-[214px] w-[243px] h-[38px] relative">
                                <input className='w-full h-full bg-[#F5F5F5] text-[12px] py-[7px] pl-[20px] pr-[12px] rounded-[4px]' type="text" placeholder='What are you looking for?' />
                                <CiSearch className='text-2xl absolute right-[7px] top-[50%] -translate-y-[50%]' />
                            </div>
                            <div className="flex gap-3">
                                <NavLink to='wishlist' className='my-auto text-[26px]'>
                                    <IoIosHeartEmpty />
                                </NavLink>
                                <NavLink to='cart' className='my-auto text-[26px] relative'>
                                    <IoCartOutline />
                                    <div className="absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full bg-secondary text-xs flex justify-center items-center text-white">2</div>
                                </NavLink>
                                <NavLink onClick={() => setProfileSettings(!profileSettings)} className='relative my-auto text-[22px] w-8 h-8 rounded-full bg-secondary text-white flex justify-center items-center' className={({ profileSettings }) =>
                                    profileSettings ? "bg-transparent" : profileSettings ? "active" : ""
                                } >
                                    <BsPerson />
                                    {profileSettings &&
                                        <ul className="absolute right-0 top-[-190px] bg-black/80 text-[#FAFAFA] pt-[18px] pr-[12px] pb-[10px] pl-[20px] w-[214px] text-sm leading-[21px] rounded-[4px] border border-slate-300 flex flex-col gap-[13px]">
                                            <li><Link>Manage My Account</Link></li>
                                            <li><Link>My Order</Link></li>
                                            <li><Link>My Cancellations</Link></li>
                                            <li><Link>My Reviews</Link></li>
                                            <li><Link>Logout</Link></li>
                                        </ul>
                                    }
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar