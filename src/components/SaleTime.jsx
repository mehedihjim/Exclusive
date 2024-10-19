import Countdown from 'react-countdown';


const SaleTime = () => {

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className='flex gap-4 items-end text-[32px] leading-7 text-secondary'><p className='flex flex-col gap-1 text-black font-bold'><span className='font-medium text-xs leading-4'>Days</span>{days}</p>:<p className='flex flex-col gap-1 text-black font-bold'><span className='font-medium text-xs leading-4'>Hours</span>{hours}</p>:<p className='flex flex-col gap-1 text-black font-bold'><span className='font-medium text-xs leading-4'>Minutes</span>{minutes}</p>:<p className='flex flex-col gap-1 text-black font-bold'><span className='font-medium text-xs leading-4'>Seconds</span>{seconds}</p></div>;
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

export default SaleTime
