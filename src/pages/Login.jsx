import SignIn from '../assets/Sign.png';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='pt-[60px] pb-[140px] flex flex-col lg:flex-row'>
            <div className="lg:w-1/2 w-full hidden lg:flex justify-center lg:justify-start">
                <img src={SignIn} alt="Signup Illustration" className='w-full lg:h-[781px] object-cover' />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-4 lg:px-0">
                <div className="w-full max-w-md">
                    <div className="mb-[48px] text-center lg:text-left">
                        <h1 className='text-4xl font-medium leading-7 mb-6'>Log in to Exclusive</h1>
                        <p className='text-base font-normal leading-6'>Enter your details below</p>
                    </div>
                    <div className="flex flex-col gap-[40px] mb-[40px]">
                        <input type="email" placeholder='Email or Phone Number' className='w-full outline-none text-base font-normal leading-6 border-b border-slate-300 pb-2' />
                        <input type="password" placeholder='Password' className='w-full outline-none text-base font-normal leading-6 border-b border-slate-300 pb-2' />
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                        <button className='w-fit py-[15px] px-[48px] border border-secondary font-medium text-base text-white leading-6 rounded-[4px] bg-secondary hover:bg-transparent hover:text-secondary duration-300 hover:shadow-md'>
                            Login
                        </button>
                        <Link to='' className='lg:text-center my-auto lg:border-b border-slate-300 text-secondary'>Forget Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
