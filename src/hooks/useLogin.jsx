import { useState,useEffect } from "react";
import axios from "../utilities/axios";
import { useAuthContent } from "./useAuth";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const { dispatch } = useAuthContent();
    const handleErrors = (data) =>{
        setErrors(data)
    }
    const login = async (formData) => {
        setIsLoading(true);
        // setErrors([]);
        try {
            const { data, status } = await axios.post('/auth/sign-in', formData);
            console.log("data-login", data);
            setIsLoading(false);
            if (data.error === true) {
                setErrors([{ message: data.message, error: data.error },...errors]);
            } else {
                setErrors([{ message: data.message, error: data.error },...errors]);

                localStorage.setItem('User', JSON.stringify(data));
                dispatch({ type: 'LOGIN', payload: data });
            }
            let role = data.role ? data.role : '';
            return { role, status };
        } catch (error) {
            setIsLoading(false);
            setErrors([{ message: error.response?.data?.message || 'Login failed', error: true },...errors]);
            throw error;
        }
    };

    return { isLoading, errors,handleErrors, login };
};
