import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiWeatherPartlySunny, TiWeatherSunny, TiWeatherDownpour } from 'react-icons/ti';
import SkyBg from '../assets/images/sky.avif'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Profile from './Profile';
import { useSelector } from 'react-redux';

function Home() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('Poznan, Poland');
    const [temperature, setTemperature] = useState('14°C');
    const [description, setDescription] = useState('So Cloudy');
    const [humidity, setHumidity] = useState('48%');
    const [wind, setWind] = useState('5 km/h');
    const [isOpen, setIsOpen] = useState(false);


    const handleSearch = () => {
        
    };


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-screen lg:flex">
                    <div className="lg:w-2/3 bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                        <div className="p-6 flex flex-col h-full justify-between text-white bg-opacity-50">
                            <div>
                                <div className='flex flex-row items-center justify-between '>
                                    <h1 className="text-6xl font-bold">{temperature}</h1>
                                    <span className='flex flex-col items-center gap-2 cursor-pointer'>
                                        <div className='flex sm:flex-row flex-col items-center gap-4'>
                                            <FaHeart className='w-6 h-6 hover:text-red-500' />
                                            <h1>Wishlist</h1>
                                            <img src={SkyBg} alt="" className='rounded-full w-8 h-8' />
                                            <Profile />
                                        </div>
                                    </span>
                                </div>
                                <p className="text-xl">{description}</p>    
                                <p className="mt-1">{new Date().toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-lg">City: {location}</p>
                                <p className="text-lg">Humidity: {humidity}</p>
                                <p className="text-lg">Wind: {wind}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 p-6">
                        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden mb-6">
                            <input
                                type="search"
                                placeholder="Search for a city..."
                                className="p-3 text-gray-800 outline-none w-full"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <FaSearch
                                onClick={handleSearch}
                                className='p-3 text-gray-600 cursor-pointer'
                            />
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                            <div className='flex flex-row items-center justify-between'>
                                <TiWeatherPartlySunny className='text-yellow-500 text-6xl mb-2' />
                                <span className='flex flex-col cursor-pointer items-center'>
                                    <FaRegHeart className="w-6 h-6 text-gray-500 hover:text-red-500 transition-transform transform hover:scale-125"/>
                                    <h1 className='font-semibold'>Add</h1>
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
                            <div className="text-gray-700 mb-2">
                                <p>Location: <span className="font-bold">{location}</span></p>
                                <p>Temperature: <span className="font-bold">{temperature}</span></p>
                                <p>Description: <span className="font-bold">{description}</span></p>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <TiWeatherSunny className='text-yellow-500 text-4xl' />
                                <TiWeatherDownpour className='text-blue-500 text-4xl' />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">7-Day Forecast</h2>
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <ul>
                                    <li className="text-gray-700 py-1">Mon: 23°C, Sunny</li>
                                    <li className="text-gray-700 py-1">Tue: 21°C, Cloudy</li>
                                    <li className="text-gray-700 py-1">Wed: 20°C, Rainy</li>
                                    <li className="text-gray-700 py-1">Thu: 22°C, Partly Cloudy</li>
                                    <li className="text-gray-700 py-1">Fri: 24°C, Sunny</li>
                                    <li className="text-gray-700 py-1">Sat: 23°C, Cloudy</li>
                                    <li className="text-gray-700 py-1">Sun: 22°C, Rainy</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">Past 7-Day Forecast</h2>
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <ul>
                                    <li className="text-gray-700 py-1">Mon: 23°C, Sunny</li>
                                    <li className="text-gray-700 py-1">Tue: 21°C, Cloudy</li>
                                    <li className="text-gray-700 py-1">Wed: 20°C, Rainy</li>
                                    <li className="text-gray-700 py-1">Thu: 22°C, Partly Cloudy</li>
                                    <li className="text-gray-700 py-1">Fri: 24°C, Sunny</li>
                                    <li className="text-gray-700 py-1">Sat: 23°C, Cloudy</li>
                                    <li className="text-gray-700 py-1">Sun: 22°C, Rainy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
