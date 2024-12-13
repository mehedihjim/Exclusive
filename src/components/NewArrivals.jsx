import React from 'react';
import CmnHeading from './CmnHeading';
import Playstation from '../assets/PlaySation.png';
import women from '../assets/WomensCollection.png';
import speakers from '../assets/Speakers.png';
import perfumes from '../assets/Perfume.png';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    return (
        <section className='w-full pb-[140px]'>
            <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 md:mb-[40px]">
                    <CmnHeading title="Featured" mainTitle="New Arrival" />
                </div>
                <div className="flex flex-col lg:flex-row gap-[30px]">
                    <Link to='/sign-up' className="w-full lg:w-1/2 h-[400px] md:h-[600px] rounded-[4px] overflow-hidden cursor-pointer relative">
                        <img src={Playstation} alt="playstation" className='w-full h-full object-cover' />
                        <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8">
                            <h3 className='font-semibold text-xl md:text-2xl text-[#FAFAFA] leading-6 tracking-[3%] mb-2 md:mb-4'>PlayStation 5</h3>
                            <p className='font-normal text-xs md:text-sm text-[#FAFAFA] leading-[18px] md:leading-[21px] w-[200px] md:w-[242px] mb-2 md:mb-4'>Black and White version of the PS5 coming out on sale.</p>
                            <Link to='/' className='font-medium text-sm md:text-base text-[#FAFAFA] leading-6 border-b border-white'>Shop Now</Link>
                        </div>
                    </Link>
                    <Link to='/sign-up' className="w-full lg:w-1/2 h-auto flex flex-col gap-[30px]">
                        <div className="w-full h-[200px] md:h-1/2 rounded-[4px] overflow-hidden cursor-pointer relative">
                            <img src={women} alt="women collection" className='w-full h-full object-cover' />
                            <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8">
                                <h3 className='font-semibold text-xl md:text-2xl text-[#FAFAFA] leading-6 tracking-[3%] mb-2 md:mb-4'>Women’s Collections</h3>
                                <p className='font-normal text-xs md:text-sm text-[#FAFAFA] leading-[18px] md:leading-[21px] w-[200px] md:w-[242px] mb-2 md:mb-4'>Featured woman collections that give you another vibe.</p>
                                <Link to='/' className='font-medium text-sm md:text-base text-[#FAFAFA] leading-6 border-b border-white'>Shop Now</Link>
                            </div>
                        </div>
                        <div className="w-full h-auto md:h-1/2 flex flex-col sm:flex-row gap-[30px]">
                            <Link to='/sign-up' className="w-full sm:w-1/2 h-[200px] md:h-full rounded-[4px] overflow-hidden cursor-pointer relative">
                                <img src={speakers} alt="speakers" className='w-full h-full object-cover' />
                                <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8">
                                    <h3 className='font-semibold text-xl md:text-2xl text-[#FAFAFA] leading-6 tracking-[3%] mb-2 md:mb-4'>Speakers</h3>
                                    <p className='font-normal text-xs md:text-sm text-[#FAFAFA] leading-[18px] md:leading-[21px] w-[200px] md:w-[242px] mb-2 md:mb-4'>Amazon wireless speakers</p>
                                    <Link to='/' className='font-medium text-sm md:text-base text-[#FAFAFA] leading-6 border-b border-white'>Shop Now</Link>
                                </div>
                            </Link>
                            <Link to='/sign-up' className="w-full sm:w-1/2 h-[200px] md:h-full rounded-[4px] overflow-hidden cursor-pointer relative">
                                <img src={perfumes} alt="perfumes" className='w-full h-full object-cover' />
                                <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8">
                                    <h3 className='font-semibold text-xl md:text-2xl text-[#FAFAFA] leading-6 tracking-[3%] mb-2 md:mb-4'>Perfume</h3>
                                    <p className='font-normal text-xs md:text-sm text-[#FAFAFA] leading-[18px] md:leading-[21px] w-[200px] md:w-[242px] mb-2 md:mb-4'>GUCCI INTENSE OUD EDP</p>
                                    <Link to='/' className='font-medium text-sm md:text-base text-[#FAFAFA] leading-6 border-b border-white'>Shop Now</Link>
                                </div>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NewArrivals;