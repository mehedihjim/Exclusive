import SignUp from '../assets/Sign.png';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    return (
        <div className='pt-[60px] pb-[140px] flex flex-col lg:flex-row'>
            <div className="lg:w-1/2 w-full hidden lg:flex justify-center lg:justify-start">
                <img src={SignUp} alt="Signup Illustration" className='w-full lg:h-[781px] object-cover' />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-4 lg:px-0">
                <div className="w-full max-w-md">
                    <div className="mb-[48px] text-center lg:text-left">
                        <h1 className='text-4xl font-medium leading-7 mb-6'>Create an account</h1>
                        <p className='text-base font-normal leading-6'>Enter your details below</p>
                    </div>
                    <div className="flex flex-col gap-[40px] mb-[40px]">
                        <input type="text" placeholder='Name' className='w-full outline-none text-base font-normal leading-6 border-b border-slate-300 pb-2' />
                        <input type="email" placeholder='Email or Phone Number' className='w-full outline-none text-base font-normal leading-6 border-b border-slate-300 pb-2' />
                        <input type="password" placeholder='Password' className='w-full outline-none text-base font-normal leading-6 border-b border-slate-300 pb-2' />
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className='w-full py-[15px] border border-secondary font-medium text-base text-white leading-6 rounded-[4px] bg-secondary hover:bg-transparent hover:text-secondary duration-300 hover:shadow-md'>
                            Create Account
                        </button>
                        <button className='flex justify-center gap-4 w-full py-[15px] border border-slate-300 font-medium text-base text-black leading-6 rounded-[4px] duration-300 hover:shadow-md'>
                            <FcGoogle className='my-auto text-2xl' />Sign up with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
