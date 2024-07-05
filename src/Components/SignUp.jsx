import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import signUpImg from '../assets/images/SignUp.avif'
import { useNavigate } from 'react-router-dom'
function SignUp() {

    const navigate = useNavigate()
    const handleSubmit = () => {

    }
    const handleClick = () => {
        try {
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full h-screen flex sm:flex-row flex-col  items-start justify-start'>
            <h1 className='absolute font-extrabold p-6 text-4xl text-white'>ιηк</h1>
            <img src={signUpImg} loop autoPlay muted className='sm:h-full sm:w-[30%] sm:object-cover' />
            <div className='w-full mt-[6rem]'>
                <div className='flex flex-col gap-10'>
                    <span className='flex flex-row sm:items-center sm:ml-[10rem] ml-[1rem]'>
                        <div className='w-24 border-b-2 border-gray-200'></div>
                        <span className='px-4 text-gray-500'>Sign up with email</span>
                        <div className='w-24 border-b-2 border-gray-200'></div>
                    </span>
                    <div className='flex flex-col sm:ml-[10rem] gap-2 ml-14'>
                        <label htmlFor="" className='font-semibold'>Username</label>
                        <input
                            type="text"
                            name='email'
                            placeholder='Username'
                            // onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />

                        <label htmlFor="" className='font-semibold'>Email</label>
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            // onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />
                        <label htmlFor="" className='font-semibold'>Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            // onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />
                    </div>
                    <div className='flex items-center gap-2 sm:ml-[10rem] ml-14 bg-[#6db6ff] border-2 hover:border-gray-500 sm:w-[22rem] w-[15rem] sm:justify-center p-2 rounded-full'>
                        <button className='w-[22rem] justify-center p-3 rounded-xl text-white font-bold' onClick={handleSubmit}>Sign In</button>
                    </div>
                    <span className='sm:ml-[14rem] ml-14'>Already have an account? <button className='underline' onClick={handleClick}>Sign in</button></span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignUp
