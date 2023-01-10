import axios from "axios";
import { REACT_APP_API_URI } from "@env"

// Set config defaults when creating the instance
const axiosInstance = axios.create({
    baseURL: REACT_APP_API_URI,
});
  
//   Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export default axiosInstance;