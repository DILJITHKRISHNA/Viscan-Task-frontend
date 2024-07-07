const API_KEY = 'ae8b592a4d0736f1adb3f5f954ecd77f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORCAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
// const PAST_FORCAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall/timemachine';


export const getWeatherByCoords = async (latitude, longitude) => {
    const response = await fetch(`${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
};

export const getForecastByCity = async (city, days = 7) => {
    const response = await fetch(`${FORCAST_BASE_URL}?q=${city}&appid=${API_KEY}&cnt=${days}&units=metric`);
    console.log(response, "responsee in daily forcast");
    if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
    }
    return await response.json();
};
// export const getPastForcast = async () => {
//     try {
//         const { city, date } = req.query;
//         const cityResponse = await axios.get(`${BASE_URL}/weather`, {
//           params: { q: city, appid: API_KEY, units: 'metric' }
//         });
//         const { lat, lon } = cityResponse.data.coord;
    
//         const historicalData = [];
//         for (let i = 0; i < 7; i++) {
//           const dt = Math.floor(new Date(date).getTime() / 1000) - (i * 86400);
//           const historicalResponse = await axios.get(`${BASE_URL}/onecall/timemachine`, {
//             params: { lat, lon, dt, appid: API_KEY, units: 'metric' }
//           });
//           historicalData.push(historicalResponse.data);
//         }
//         return historicalData
    
//       } catch (error) {

//       }
// };
