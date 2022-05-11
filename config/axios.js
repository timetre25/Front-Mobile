import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosInstance = axios.create({
    "baseURL" : "http://localhost:8000/api"
});



export default axiosInstance;