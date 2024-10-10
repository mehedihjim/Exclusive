import React from 'react'
import CmnHeading from './CmnHeading'
import { featuresProduct } from '../constant/assets'

const Features = () => {
    return (
        <section className='w-full pb-[59px]'>
            <div className="max-w-container mx-auto">
                <div className="mb-[40px]">
                    <CmnHeading title={'Features'} mainTitle={'Features Products'} />
                </div>
                {featuresProduct.map((item, index) => (
                    <div key={index} className="grid-rows-4">
                        <div className="w-[270px] h-auto">
                            <img src={item.image} alt="" className='w-full h-[250px]' />
                            <div className="mt-[16px]">
                                <h4 className='text-base font-medium'>{item.name}</h4>
                                <div className="flex gap-3">
                                    <p className='text-base font-medium text-secondary'>{item.discountPrice}</p>
                                    <del className='text-base font-medium text-[#7D8184]'>{item.price}</del>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
