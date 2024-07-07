import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegWindowClose } from 'react-icons/fa';
import { TiWeatherSunny, TiWeatherWindyCloudy } from 'react-icons/ti';
import { DeleteFav, GetFavorites } from '../Api/UserApi';
import { toast } from 'react-toastify';

function Favorites() {
    const [open, setOpen] = useState(false);
    const [wishlistData, SetWishlistData] = useState()


    const handleDrawer = () => {
        setOpen(!open);
    }

    const fetchWishlistData = async () => {
        try {
            const response = await GetFavorites();
            console.log(response, "wishlist data responseee");
            if (response.data.success) {
                SetWishlistData(response.data.favs);
            } else {
                console.log('Failed to fetch wishlist data');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect((e) => {
        fetchWishlistData();
    }, []);

    const handleDeleteFav = async (id) => {
        try {
            await DeleteFav(id);
            fetchWishlistData();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <button onClick={handleDrawer}>
                    <FaHeart className='w-6 h-6 mt-2 hover:text-red-500 transition-transform transform hover:scale-125' />
                </button>
                {open && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end backdrop-blur-sm overflow-visible">
                        <div className="bg-white w-80 p-4 h-full shadow-lg">


                            <div className="mb-0 flex flex-col items-center justify-between gap-10">
                                <div className='flex flex-row items-center gap-[10rem]'>
                                    <h5 className="text-black font-bold text-2xl underline underline-offset-4 font-mono">Favorites</h5>
                                    <FaRegWindowClose className='text-red-600 w-6 h-6' onClick={handleDrawer} />
                                </div>
                                {wishlistData.length === 0 ? (
                                    <p className='text-center text-xl font-semibold text-gray-500'>Your favorites list is empty</p>
                                ) : (
                                    <>
                                        {wishlistData.map((data, index) => (

                                            <div key={index} className='border-2 border-b-black w-72 h-36 flex flex-col'>
                                                <h1 className='p-2 font-bold text-lg text-amber-950 underline underline-offset-8'>{data?.place}</h1>
                                                {data.description === "overcast clouds" ? (
                                                    <>
                                                    <TiWeatherWindyCloudy className='absolute text-yellow-500 text-5xl ml-[14rem]' />
                                                    </>
                                                ):(
                                                    <>
                                                    <TiWeatherSunny className='absolute text-yellow-500 text-5xl ml-[14rem]' />
                                                    </>
                                                )}

                                                <div className='p-2'>
                                                    <h1 className='text-black text-md font-semibold'>Temperature: {data?.temperature}°C</h1>
                                                    <h1 className='text-black text-md font-semibold'>Description: {data?.description}</h1>
                                                    <h1 className='text-black text-md font-semibold'>Humidity:{data?.humidity}%</h1>
                                                </div>
                                                <button className='bg-red-600 font-semibold hover:transition-transform hover:transform hover:scale-105' onClick={() => handleDeleteFav(data?.id)}>Remove</button>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Favorites
