import axios, { AxiosInstance } from "axios";
import { getEnvVariables } from "../helpers";

let { VITE_APP_COMPLEMENT_API_URL } = getEnvVariables();

const ComplementApi: AxiosInstance = axios.create({
  baseURL: VITE_APP_COMPLEMENT_API_URL,
});

// ZeldaApi.interceptors.request.use((config) => {
//     if(config.headers){
//         config.headers['x-token'] = localStorage.getItem('token');
//     }
//     return config;
// });

export default ComplementApi;
