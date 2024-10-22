import Countdown from 'react-countdown';

const MusicalSaleTimer = () => {

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className="flex gap-6 mb-[40px]">
                <div className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full ">
                    <p className='leading-5 font-semibold text-base'>{days}</p>
                    <p className='leading-[18px] font-normal text-xs'>Days</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full ">
                    <p className='leading-5 font-semibold text-base'>{hours}</p>
                    <p className='leading-[18px] font-normal text-xs'>Hours</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full ">
                    <p className='leading-5 font-semibold text-base'>{minutes}</p>
                    <p className='leading-[18px] font-normal text-xs'>Minutes</p>
                </div>
                <div className="flex flex-col justify-center items-center w-[62px] h-[62px] bg-white rounded-full ">
                    <p className='leading-5 font-semibold text-base'>{seconds}</p>
                    <p className='leading-[18px] font-normal text-xs'>Seconds</p>
                </div>
            </div>;
        }
    };

    return (
        <div>
            <Countdown
                date={Date.now() + 2591000000}
                renderer={renderer}
            />
        </div>
    )
}

export default MusicalSaleTimer
