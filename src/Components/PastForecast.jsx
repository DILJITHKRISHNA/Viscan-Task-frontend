import React, { useEffect } from 'react'
// import { GetPastForcast } from '../Api/UserApi';

function PastForecast({city}) {
    // useEffect(()=>{
    //     const pastData = async () => {
    //         try {
    //             const response = await GetPastForcast(city)
    //             console.log(response,"sssdeesedddydffssdsdddd");
    //         } catch (error) {
    //             console.log(error.message,"error in pasData");
    //         }
    //     }
    //     pastData()
    // },[])

    return (
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
    )
}

export default PastForecast
