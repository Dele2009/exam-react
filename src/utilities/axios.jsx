// services/axiosInstance.js
import axios from 'axios';
import { isTokenExpired } from '../utilities/helpers';


const url = 'https://schoolsmartsapi.vercel.app'
// const url = 'http://localhost:5000'
const axiosInstance = axios.create({
  baseURL: url, // Replace with your API base URL
  timeout: 30000
});

// Request interceptor to add the token to every request
axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('User'));
  if (user && user.token) {
    if (isTokenExpired(user.token)) {
      localStorage.removeItem('User');
      window.location.href = '/login'; // Redirect to login if token is expired
    } else {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle token expiration on server response
// axiosInstance.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   if (error.response.status === 401) {
//     localStorage.removeItem('User');
//     window.location.href = '/login'; // Redirect to login if unauthorized
//   }
//   return Promise.reject(error);
// });

export default axiosInstance;
