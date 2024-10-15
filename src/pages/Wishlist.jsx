import React from 'react'
import SimpleCmnButton from '../components/SimpleCmnButton';

const Wishlist = () => {
    return (
        <div className='pt-[80px] pb-[140px]'>
            <div className="max-w-container mx-auto px-4 md:px-0">
                <div className="pb-[80px]">
                    <div className="flex justify-between mb-[60px]">
                        <h4 className='my-auto text-xl leading-[26px]'>Wishlist {'(4)'}</h4>
                        <SimpleCmnButton title={'Move All To Bag'} />
                    </div>
                    <div className="">
                        { }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
