import Countdown from 'react-countdown';


const SaleTime = () => {

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{days}:{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div>
            <Countdown
                date={Date.now() + 2592000}
                renderer={renderer}
            />
        </div>
    )
}

export default SaleTime
