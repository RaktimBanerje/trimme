import axios from 'axios';

// Create axios instance
export const axiosInstance = axios.create({
  withCredentials: 'include',
  baseURL: "http://127.0.0.1:8000/api",
});
