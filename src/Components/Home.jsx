import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiWeatherPartlySunny, TiWeatherSunny, TiWeatherDownpour } from 'react-icons/ti';
import userImg from '../assets/images/user.png'
import { FaRegHeart } from "react-icons/fa";
import Profile from './Profile';
import { toast, ToastContainer } from 'react-toastify';
import { getWeatherByCoords } from '../WeatherServices/Services';
import Favorites from './Favorites';
import { AddtoFavorites, GetCityWeather, GetFavorites } from '../Api/UserApi';
import DailyForcast from './DailyForcast';

function Home() {
    const [weatherData, setWeatherData] = useState(null);
    const [search, setSearch] = useState('');
    const [click, setClick] = useState(false)
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [wishlistData, SetWishlistData] = useState()

    // const [historicalData, setHistoricalData] = useState([]);


    const handleSearch = async () => {
        try {
            const response = await GetCityWeather(search)
            // const historicalResponse = await axios.get(`http://localhost:5000/api/historical?city=${search}&date=${new Date().toISOString().split('T')[0]}`);
            // setHistoricalData(historicalResponse.data);
            if (response) {
                setWeatherData(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setLat(latitude)
                    setLong(longitude)
                    const data = await getWeatherByCoords(latitude, longitude);
                    setWeatherData(data);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setWeatherData(null);
                }
            );
        } else {
            toast.success("Geolocation can't be loaded in your browser!");
        }
    }, [0]);

    const handleAddFav = async (name, temp, desc, humidity) => {
        try {
            const response = await AddtoFavorites(name, temp, desc, humidity)
            if (response.data.success) {
                setTimeout(() => {
                    toast.success("Added to Favorites")
                }, 2000);
                window.location.reload();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-screen lg:flex">
                    <div className="lg:w-2/3 bg-cover bg-center"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
                        <div className="p-6 flex flex-col h-full justify-between text-white bg-opacity-50">
                            <div>
                                <div className='flex flex-row items-center justify-between '>
                                    <h1 className="text-6xl font-bold">{weatherData?.main.temp}°C</h1>
                                    <span className='flex flex-col items-center gap-2 cursor-pointer'>
                                        <div className='flex sm:flex-row flex-col items-center gap-4'>
                                            <span className='flex flex-col sm:flex-row items-center justify-center gap-2'>
                                                <Favorites/>
                                                <h1 className='font-semibold hover:text-gray-300'>Wishlist</h1>
                                            </span>
                                            <img src={userImg} alt="" className='rounded-full w-8 h-8' />
                                            <Profile />
                                        </div>
                                    </span>
                                </div>
                                <p className="text-xl">{weatherData?.weather[0].description}</p>
                                <p className="mt-1">{new Date().toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="text-lg">City: {weatherData?.name}</p>
                                <p className="text-lg">Humidity: {weatherData?.main.humidity}%</p>
                                <p className="text-lg">Wind: {weatherData?.wind.speed}Km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 p-6">
                        <div className="flex flex-row items-center border justify-between border-gray-400 rounded-lg overflow-hidden mb-6">
                            <input
                                type="search"
                                placeholder="Search for a city"
                                className="p-3 text-gray-800 outline-none w-full"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <FaSearch
                                onClick={handleSearch}
                                className='absolute text-black cursor-pointer sm:ml-[25rem] ml-[17rem]'
                            />
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                            <div className='flex flex-row items-center justify-between'>
                                <TiWeatherPartlySunny className='text-yellow-500 text-6xl mb-2' />
                                <span className='flex flex-col cursor-pointer items-center' onClick={() => handleAddFav(weatherData?.name, weatherData?.main.temp, weatherData?.weather[0].description, weatherData?.main.humidity)}>
                                    <FaRegHeart className={`w-6 h-6 text-gray-500 hover:text-red-500 ${click === true ? 'text-red-500' : 'text-gray-500'} transition-transform transform hover:scale-125`} />
                                    <h1 className='font-semibold'>Add</h1>
                                </span>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
                            <div className="text-gray-700 mb-2">
                                <p>Location: <span className="font-bold">{weatherData?.name}</span></p>
                                <p>Temperature: <span className="font-bold">{weatherData?.main.temp}°C</span></p>
                                <p>Description: <span className="font-bold">{weatherData?.weather[0].description}</span></p>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <TiWeatherSunny className='text-yellow-500 text-4xl' />
                                <TiWeatherDownpour className='text-blue-500 text-4xl' />
                            </div>
                        </div>
                        <DailyForcast searchData={search} lat={lat} long={long} />
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
                <ToastContainer />
            </div>
        </>
    )
}

export default Home
