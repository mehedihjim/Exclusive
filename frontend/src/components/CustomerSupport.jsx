import delivery from '../assets/Services.png';
import callcenter from '../assets/Services-2.png';
import moneyback from '../assets/Services-3.png';

const CustomerSupport = () => {
    return (
        <section className='w-full pb-[140px]'>
            <div className="max-w-container mx-auto px-4 sm:px-6">
                <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-[88px] justify-center">
                    <div className="w-full text-center">
                        <img src={delivery} alt="Fast Delivery" className='w-20 mx-auto mb-6' />
                        <div className="">
                            <h3 className='font-semibold text-lg sm:text-xl leading-6 sm:leading-7 mb-2'>FREE AND FAST DELIVERY</h3>
                            <p className='font-normal text-sm leading-6 sm:leading-7'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <img src={callcenter} alt="Call Center Support" className='w-20 mx-auto mb-6' />
                        <div className="">
                            <h3 className='font-semibold text-lg sm:text-xl leading-6 sm:leading-7 mb-2'>24/7 CUSTOMER SUPPORT</h3>
                            <p className='font-normal text-sm leading-6 sm:leading-7'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className="w-full text-center">
                        <img src={moneyback} alt="Money Back Guarantee" className='w-20 mx-auto mb-6' />
                        <div className="">
                            <h3 className='font-semibold text-lg sm:text-xl leading-6 sm:leading-7 mb-2'>MONEY BACK GUARANTEE</h3>
                            <p className='font-normal text-sm leading-6 sm:leading-7'>We offer a 30-day money-back guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSupport;
