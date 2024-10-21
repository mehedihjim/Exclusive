import { IoCartOutline } from 'react-icons/io5';
import SimpleCmnButton from '../components/SimpleCmnButton';
import { wishlistProducts } from '../constant/assets';
import { Link } from 'react-router-dom';
import CmnHeading from '../components/CmnHeading';

const Wishlist = () => {
    return (
        <div className='pt-[80px] pb-[140px]'>
            <div className="max-w-container mx-auto px-4 lg:px-0">
                <div className="pb-[80px]">
                    <div className="flex justify-between mb-[60px]">
                        <h4 className='my-auto text-xl leading-[26px]'>Wishlist {'(4)'}</h4>
                        <SimpleCmnButton title={'Move All To Bag'} />
                    </div>
                    <div className="flex justify-between">
                        {wishlistProducts.map((item) => (
                            <div className="w-[270px] rounded-[4px] overflow-hidden cursor-pointer">
                                <div className="relative mb-4 group">
                                    <img src={item.image} alt="" className='w-full' />
                                    <button className="cursor-pointer w-full h-10 bg-black absolute bottom-0 left-0 text-white flex gap-2 justify-center items-center text-xs leading-[18px] rounded-b-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"><IoCartOutline className='text-2xl' />Add To Cart</button>
                                </div>
                                <div className="text-base font-medium leading-6">
                                    <Link to='' className='mb-2'>{item.name}</Link>
                                    <div className="flex gap-3">
                                        <p className='text-secondary'>{item.price}</p>
                                        <del className='text-slate-400'>{item.price}</del>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-between items-center">
                        <CmnHeading title={'Just For You'} />
                        <SimpleCmnButton title={'See All'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
