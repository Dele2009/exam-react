// useAxiosInterceptor.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isTokenExpired } from './helpers';

const useAxiosInterceptor = () => {
    const navigate = useNavigate();

    axios.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');

        if (token && isTokenExpired(token)) {
            localStorage.removeItem('token');
            navigate('/login');
        } else {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    });

    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );
};

export default useAxiosInterceptor;
