


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLogin } from '../../../hooks';
import { Alert, AlertContainer, Logo } from '../../Elememts';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const [inputType, setInputType] = useState(true);
    const { isLoading, errors, handleErrors, login } = useLogin();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const setErrors = index => {
        const newErr = errors.filter((_, i) => i !== index);
        handleErrors(newErr);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const { status } = await login(formValues);
            if (status < 299) {
                setFormValues({ email: '', password: '' });
            }
        } catch (error) {
            console.error(error);
            setFormValues(prev => ({ ...prev, password: '' }));
        }
    };

    return (
        <div className="h-screen w-full bg-gray-100 flex justify-center">
            {errors.length > 0 && (
                <AlertContainer>
                    {errors.map((error, index) => (
                        <Alert {...error} key={index} length={errors.length} index={index} onClick={() => setErrors(index)} />
                    ))}
                </AlertContainer>
            )}

            <div className="bg-white w-full dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block bg-emerald-600 lg:w-3/6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
                        <div className="flex items-center h-full w-full px-20 bg-emerald-900 bg-opacity-90">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">Welcome to Tutor Tap - Your Learning Management Solution</h2>
                                <p className="max-w-xl mt-3 text-gray-300">
                                    Sign in to Tutor Tap to access a comprehensive suite of educational tools and resources designed to enhance learning experiences.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <div className="flex justify-center mx-auto">
                                    <Link to="/">
                                        <Logo className="w-auto h-32" />
                                    </Link>
                                </div>
                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <div className="relative flex items-center justify-between mt-4">
                                        <span className="absolute left-0">
                                            <FaUser className="size-5 mt-2 mx-3 text-emerald-500" />
                                        </span>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formValues.email}
                                            onChange={handleChange}
                                            placeholder="example@example.com"
                                            className="block w-full pl-10 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
                                                Password
                                            </label>
                                            <a
                                                href="#"
                                                className="text-sm text-gray-400 focus:text-emerald-500 hover:text-emerald-500 hover:underline"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <div className="relative flex items-center justify-between mt-4">
                                            <span className="absolute left-0">
                                                <FaLock className="size-5 mt-2 mx-3 text-emerald-500" />
                                            </span>
                                            <input
                                                type={inputType ? 'password' : 'text'}
                                                name="password"
                                                id="password"
                                                required
                                                value={formValues.password}
                                                onChange={handleChange}
                                                placeholder="Your Password"
                                                className="w-full px-10 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            <span
                                                className="absolute right-0 cursor-pointer"
                                                onClick={() => setInputType(!inputType)}
                                            >
                                                {inputType ? (
                                                    <FaEyeSlash className="size-5 mt-2 mx-3 text-emerald-500" />
                                                ) : (
                                                    <FaEye className="size-5 mt-2 mx-3 text-emerald-500" />
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            disabled={isLoading}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-emerald-700 disabled:bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:outline-none focus:bg-emerald-400 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
                                        >
                                            {isLoading ? 'Signing In....' : 'Sign in'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
