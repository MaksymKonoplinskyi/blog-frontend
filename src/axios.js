import axios from "axios";
// import 'dotenv/config'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
 
instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})
 
export default instance