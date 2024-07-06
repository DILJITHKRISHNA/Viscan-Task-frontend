import axios from 'axios';

const UserApi = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function SignupUser(signupData) {
    console.log(signupData, "entered to SignupUser api");
    try {
        const res = await UserApi.post('/createuser', signupData)
        console.log(res, "res in apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}

export async function UserLogin(logindata) {
    console.log(logindata, "entered to UserLogin api");
    try {
        const res = await UserApi.post('/loginuser', logindata)
        console.log(res, "res in apiiii");
        return res
    } catch (error) {
        console.log(error);
    }
}