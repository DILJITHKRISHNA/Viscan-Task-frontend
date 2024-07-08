import React, { useEffect, useState } from 'react'
import { GetCityDailyForcast } from '../Api/UserApi'

function DailyForcast({ searchData, lat, long }) {
    const [dailyForcast, SetDailyForcast] = useState([])
    const [day, setDay] = useState()

    useEffect(() => {

        const GetDailyForcast = async () => {
            try {
                console.log(searchData);
                const response = await GetCityDailyForcast(searchData)
                if (response.data.success) {
                    SetDailyForcast(response.data.data.list)

                }
            } catch (error) {

            }
        }
        GetDailyForcast()
    }, [searchData])

    const getDayOfWeek = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'short' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">7-Day Forecast</h2>
            {dailyForcast.map((data, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <ul>
                        <li className="text-gray-700 py-1">{getDayOfWeek(data.dt_txt)}: {data.main?.temp}°C, {data.weather[0]?.description}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default DailyForcast
