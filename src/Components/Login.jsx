import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import loginImg from '../assets/images/loginImg.avif'
import { useNavigate } from 'react-router-dom'
import { UserLogin } from '../Api/UserApi'

function Login() {
    const navigate = useNavigate()
    const [data, SetData] = useState({
        email: '',
        password: ''
    })

    const handleOnchange = (e) => {
        e.preventDefault()
        try {
            const { name, value } = e.target
            SetData({
                ...data,
                [name]: value
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await UserLogin(data)
            console.log(response);
            if (response.data.success) {
                localStorage.setItem('Usertoken', response.data.token)
                toast.success("Login Successfull!")
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {

        }
    }
    const handleClick = () => {
        try {
            navigate('/signup')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full h-screen flex sm:flex-row flex-col  items-start justify-start'>
            <h1 className='absolute font-extrabold p-6 text-4xl text-white'>ιηк</h1>
            <img src={loginImg} loop autoPlay muted className='sm:h-full sm:w-[30%] sm:object-cover' />
            <div className='w-full mt-[6rem]'>
                <div className='flex flex-col gap-10'>
                    <span className='flex flex-row sm:items-center sm:ml-[10rem] ml-[1rem]'>
                        <div className='w-24 border-b-2 border-gray-200'></div>
                        <span className='px-4 text-gray-500'>Sign in with email</span>
                        <div className='w-24 border-b-2 border-gray-200'></div>
                    </span>
                    <div className='flex flex-col sm:ml-[10rem] gap-2 ml-14'>
                        <label htmlFor="" className='font-semibold'>Email</label>
                        <input
                            type="text"
                            name='email'
                            placeholder='Email'
                            onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />
                        <label htmlFor="" className='font-semibold'>Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Password'
                            onChange={handleOnchange}
                            className='border-2 border-gray-200 sm:w-[22rem] w-[15rem] justify-center p-3 rounded-xl'
                        />
                    </div>
                    <div className='flex items-center gap-2 sm:ml-[10rem] ml-14 bg-[#6db6ff] border-2 hover:border-gray-500 sm:w-[22rem] w-[15rem] sm:justify-center p-2 rounded-full'>
                        <button className='w-[22rem] justify-center p-3 rounded-xl text-white font-bold' onClick={handleSubmit}>Sign In</button>
                    </div>
                    <span className='sm:ml-[14rem] ml-14'>Don't have an account? <button className='underline' onClick={handleClick}>Sign Up</button></span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
