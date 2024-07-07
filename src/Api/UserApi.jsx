import axios from 'axios';

const UserApi = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function SignupUser(signupData) {
    console.log(signupData, "entered to SignupUser api");
    try {
        const res = await UserApi.post('/register', signupData)
        console.log(res, "res in apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function UserLogin(logindata) {
    console.log(logindata, "entered to UserLogin api");
    try {
        const res = await UserApi.post('/login', logindata)
        console.log(res, "res in apiiii");
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
    console.log(city, "entered to GetCityDailyForcast api");
    try {
        const res = await UserApi.get(`/weather/forecast/${city}`)
        console.log(res, "res in GetCityDailyForcast apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function AddtoFavorites(name, temp, desc, humidity) {
    console.log(name, temp, desc, humidity,"iiiiii");
    try {
        const res = await UserApi.post(`/favorites/${name}/${temp}/${desc}/${humidity}`)
        console.log(res, "res in AddtoFavorites apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function GetFavorites() {
    try {
        const res = await UserApi.get('/favorites')
        console.log(res, "res in GetFavorites apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}
export async function DeleteFav(id) {
    try {
        const res = await UserApi.get(`/delete/${id}`)
        console.log(res, "res in DeleteFav apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}