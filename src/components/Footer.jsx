import React from 'react'
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/Footer_Logo.png'
import QrCode from '../assets/QrCode.png'
import GooglePlay from '../assets/GooglePlay.png'
import AppStore from '../assets/AppStore.png'
import { AiOutlineSend } from "react-icons/ai";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";
import Mailto from "react-mailto-link";

const Footer = () => {

    const handleSubmit = () => {
        console.log('Subscription Done!')
    }

    return (
        <footer className='w-full bg-black pt-20 pb-6'>
            <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-12 md:justify-between">
                    {/* First Column */}
                    <div className="flex-1">
                        <Link to=''><img src={FooterLogo} alt="Footer Logo" /></Link>
                        <h3 className='font-medium text-xl text-[#FAFAFA] leading-7 mt-6'>Subscribe</h3>
                        <p className='font-normal text-base text-[#FAFAFA] leading-6 mt-4'>Get 10% off your first order</p>
                        <div className="w-full md:w-[217px] h-[48px] relative mt-4">
                            <input type="email" placeholder='Enter your email' className='w-full h-full border border-[#FAFAFA] rounded-[4px] bg-transparent py-3 pl-4 text-[#FAFAFA] text-base leading-6 outline-none' />
                            <AiOutlineSend onClick={handleSubmit} className='cursor-pointer text-2xl text-[#FAFAFA] absolute top-[50%] -translate-y-[50%] right-[15px]' />
                        </div>
                    </div>
                    {/* Support Column */}
                    <div className="flex-1">
                        <h3 className='font-medium text-xl text-[#FAFAFA] leading-7'>Support</h3>
                        <ul className='flex flex-col gap-4 mt-6'>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Mailto email="john.doe@example.com" obfuscated={true}>
                                <div>support@exclusive.com</div>
                            </Mailto></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><a href="tel:+88015-88888-9999">+88015-88888-9999</a></li>
                        </ul>
                    </div>
                    {/* Account Column */}
                    <div className="flex-1">
                        <h3 className='font-medium text-xl text-[#FAFAFA] leading-7'>Account</h3>
                        <ul className='flex flex-col gap-4 mt-6'>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>My Account</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Login / Register</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Cart</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Wishlist</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Shop</Link></li>
                        </ul>
                    </div>
                    {/* Quick Link Column */}
                    <div className="flex-1">
                        <h3 className='font-medium text-xl text-[#FAFAFA] leading-7'>Quick Link</h3>
                        <ul className='flex flex-col gap-4 mt-6'>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Privacy Policy</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Terms Of Use</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>FAQ</Link></li>
                            <li className='font-normal text-base text-[#FAFAFA] leading-6'><Link to=''>Contact</Link></li>
                        </ul>
                    </div>
                    {/* Download App Column */}
                    <div className="flex-1">
                        <h3 className='font-medium text-xl text-[#FAFAFA] leading-7'>Download App</h3>
                        <div className="mt-6">
                            <p className='font-medium text-xs text-[#FAFAFA] leading-[18px] mb-2'>Save $3 with App New User Only</p>
                            <div className="flex gap-2 mb-6">
                                <img src={QrCode} alt="QrCode" className="w-16 h-16 md:w-auto md:h-auto" />
                                <div className="flex flex-col justify-between">
                                    <Link to=''><img src={GooglePlay} alt="GooglePlay" /></Link>
                                    <Link to=''><img src={AppStore} alt="AppStore" /></Link>
                                </div>
                            </div>
                        </div>
                        <ul className='flex gap-6 mt-6 text-2xl text-white'>
                            <li><Link to=''><RiFacebookLine /></Link></li>
                            <li><Link to=''><RiTwitterLine /></Link></li>
                            <li><Link to=''><RiInstagramLine /></Link></li>
                            <li><Link to=''><RiLinkedinLine /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-white/30 pt-4 border-t border-slate-900 flex gap-[6px] mt-[76px] justify-center'><FaRegCopyright className='my-auto' /> Copyright Rimel 2022. All right reserved</p>
        </footer>
    )
}

export default Footer;
