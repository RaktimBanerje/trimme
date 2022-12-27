import axios from 'axios';

// Create axios instance
export const axiosInstance = axios.create({
  withCredentials: 'include',
  baseURL: "https://digitalplutform.com/server/public/api",
});
