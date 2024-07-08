import axios from 'axios';

const UserApi = axios.create({
    baseURL: import.meta.env.FRONTEND_URL
})

export async function SignupUser(signupData) {
    try {
        const res = await UserApi.post('/register', signupData)
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function UserLogin(logindata) {
    try {
        const res = await UserApi.post('/login', logindata)
        return res
    } catch (error) {
        console.log(error);
    }
}
export async function GetCityWeather(city) {
    try {
        const res = await UserApi.get(`/weather/current/${city}`)
        return res
    } catch (error) {
        console.log(error);
    }
}
export async function GetCityDailyForcast(city) {
    try {
        const res = await UserApi.get(`/weather/forecast/${city}`)
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function AddtoFavorites(name, temp, desc, humidity) {
    try {
        const res = await UserApi.post(`/favorites/${name}/${temp}/${desc}/${humidity}`)
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function GetFavorites() {
    try {
        const res = await UserApi.get('/favorites')
        return res
    } catch (error) {
        console.log(error);
    }
}
export async function DeleteFav(id) {
    try {
        const res = await UserApi.get(`/delete/${id}`)
        return res
    } catch (error) {
        console.log(error);
    }
}
// export async function GetPastForcast(city) {
//     console.log(city, "city");
//     try {
//         const res = await UserApi.get(`/weather/historical/${city}`)
//         console.log(res, "res in GetPastForcast apiiii");
//         return res
//     } catch (error) {
//         console.log(error);
//     }
// }