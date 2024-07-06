import React, { useState } from 'react'
import SkyBg from '../assets/images/sky.avif'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Profile() {
    const navigate = useNavigate()
    const selector = useSelector(state => state.user.userDetails)
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleLogout = () => {
        localStorage.removeItem('Usertoken')
        toast.success("Logging out Successfully!")
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
    return (
        <div className="relative inline-block text-left">
            <button
                onClick={handleOpen}
                className="text-white py-2 font-semibold"
            >
                {selector.name}
            </button>
            {isOpen && (
                <div className="absolute top-10 right-0 mt-2 w-80 p-4 bg-white border border-gray-200 shadow-lg z-10 rounded-xl">
                    <div className='flex flex-col items-start gap-3'>
                        <h6 className="text-lg text-gray-700 mb-6 font-mono font-bold underline">Your Profile</h6>
                        <img src={SkyBg} alt="" className='flex rounded-full w-12 h-12 ' />
                        <p className="text-sm text-gray-600 mb-1 font-bold">Name: <span className='text-black font-mono'>{selector.name}</span></p>
                        <p className="text-sm text-gray-600 mb-1 font-bold">Email: <span className='text-black font-mono'>{selector.email}</span></p>
                        <button className='bg-black p-1 rounded-lg font-bold' onClick={handleLogout}>Logout</button>
                    </div>

                </div>
            )}
            <ToastContainer />
        </div>
    )
}

export default Profile
