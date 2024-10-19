import React from 'react'
import CmnHeading from './CmnHeading'
import { CategoryList } from '../constant/assets'

const CategorySlide = () => {
    return (
        <section className='w-full pt-[80px] pb-[70px]'>
            <div className="max-w-container mx-auto border-b border-slate-300 pb-8">
                <CmnHeading title={'Categories'} mainTitle={'Browse By Category'} />
            </div>
            <div className="flex justify-between">
                {CategoryList.map((item, index) => (
                    <div key={index} className="px-[56px] h-[145px] border border-slate-400">
                        <div className=""></div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategorySlide
