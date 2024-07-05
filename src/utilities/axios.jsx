import axios from 'axios';
const url = 'https://schoolsmartsapi.vercel.app'
// const url = 'http://localhost:5000'
const instance = axios.create({
  baseURL: url, // Adjust the base URL as needed
  timeout: 10000
});

export default instance;