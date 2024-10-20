import React from 'react';
import CmnHeading from './CmnHeading';
import { PiDeviceMobileSpeakerThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    return (
        <section className="w-full pt-[80px] pb-[70px]">
            <div className="max-w-container mx-auto border-b border-slate-300 pb-[70px]">
                <CmnHeading title={'Categories'} mainTitle={'Browse By Category'} />
                <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    <Link
                        to=""
                        className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                    >
                        <PiDeviceMobileSpeakerThin className="text-[56px] mx-auto" />
                        <p className="text-base leading-6">Phone</p>
                    </Link>
                    <Link
                        to=""
                        className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                    >
                        <PiDeviceMobileSpeakerThin className="text-[56px] mx-auto" />
                        <p className="text-base leading-6">Computers</p>
                    </Link>
                    <Link
                        to=""
                        className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                    >
                        <PiDeviceMobileSpeakerThin className="text-[56px] mx-auto" />
                        <p className="text-base leading-6">SmartWatch</p>
                    </Link>
                    <Link
                        to=""
                        className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                    >
                        <PiDeviceMobileSpeakerThin className="text-[56px] mx-auto" />
                        <p className="text-base leading-6">Camera</p>
                    </Link>
                    <Link
                        to=""
                        className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                    >
                        <PiDeviceMobileSpeakerThin className="text-[56px] mx-auto" />
                        <p className="text-base leading-6">Headphones</p>
                    </Link>
                    <Link
                        to=""
                        className="w-full h-[145px] border border-slate-400 rounded-[4px] hover:shadow-md hover:bg-secondary hover:text-white hover:border-secondary duration-300 flex flex-col gap-4 justify-center items-center"
                    >
                        <PiDeviceMobileSpeakerThin className="text-[56px] mx-auto" />
                        <p className="text-base leading-6">Gaming</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoryList;
