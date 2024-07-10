import React, { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom"

import { useLogin } from '../../../hooks'
import { Alert, AlertContainer } from '../../Elememts'
import { FaEye, FaEyeSlash, FaLock , FaRegUser, FaUser} from 'react-icons/fa'
const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const [inputType, setInputType] = useState(true)
    // const navigate = useNavigate()
    const handleChange = e => {
        const { name, value } = e.target
        setFormValues(prev => ({
            ...prev,
            [name]: value

        }))
    }



    const { isLoading, errors, handleErrors, login } = useLogin()
    // useEffect(() => {
    //     console.log(formValues, errors)
    // }, [formValues, errors])

    const setErrors = (i) => {
        const newErr = Array.from(errors).filter((_, index) => index !== i)
        handleErrors(newErr)
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { role, status } = await login(formValues);
            console.log("formvalues", role, status);
            if (status < 299) {
                setFormValues({ email: '', password: '' });
            }

            // if (role === 'Admin' || role === 'Teacher') {
            //     setTimeout(() => {
            //         navigate('/Dashboard');

            //     }, 5000)
            // } else {
            //     setTimeout(() => {
            //         navigate('/Students');
            //     }, 5000)
            // }
        } catch (e) {
            console.error(e);
            setFormValues((prev) => ({ ...prev, password: '' }));
        }
    }


    return (
        <div className="h-screen w-full bg-gray-100 flex justify-center">

            {errors.length > 0 && (
                <AlertContainer>
                    {errors.map((error_Obj, index) => (
                        <Alert {...error_Obj} key={index} index={index} length={errors.length} onClick={() => setErrors(index)} />
                    ))}
                </AlertContainer>
            )}

            {/* <div className="z-30 py-6 px-8 h-fit mt-32 w-10/12 md:w-1/3 bg-white rounded shadow-xl">
                <form onSubmit={HandleSubmit}>
                    <div className="mb-6">
                        <label htmlhtmlFor="email" className="block text-gray-800 font-bold">Email / Username:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            required
                            value={formValues.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 py-3 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                    </div>

                    <div>
                        <label htmlhtmlFor="password" className="block text-gray-800 font-bold">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            required
                            value={formValues.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 py-3 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />

                        <a href="#" className="text-sm font-thin text-gray-800 hover:underline mt-8 inline-block hover:text-indigo-600">Forget Password</a>
                    </div>
                    <button type='submit' disabled={isLoading} className={`${isLoading ? 'text-stone-300' : 'text-white'} cursor-pointer py-2 px-4 block mt-6 bg-emerald-700 font-bold w-full text-center rounded`}>
                        {isLoading ? 'Loading....' : 'Login'}
                    </button>

                </form>
            </div> */}

            <div className="bg-white w-full dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block bg-emerald-600 lg:w-3/6" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
                        <div className="flex items-center h-full w-full px-20 bg-emerald-900 bg-opacity-90">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">SchoolSmarts</h2>

                                <p className="max-w-xl mt-3 text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                    autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                    molestiae
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <div className="flex justify-center mx-auto">
                                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                                </div>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form onSubmit={HandleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>

                                        <div class="relative flex items-center justify-between mt-4">
                                            <span class="absolute left-0" >
                                                <FaRegUser className="size-5 mt-2 mx-3 text-emerald-500" />
                                                
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
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                            <a href="#" className="text-sm text-gray-400 focus:text-emerald-500 hover:text-emerald-500 hover:underline">Forgot password?</a>
                                        </div>
                                        <div class="relative flex items-center justify-between mt-4">
                                            <span class="absolute left-0" >
                                                <FaLock className="size-5 mt-2 mx-3 text-emerald-500" />
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-emerald-300 dark:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg> */}
                                            </span>

                                            <input
                                                type={inputType ? 'password' : 'text'}
                                                name="password"
                                                id="password"
                                                required
                                                value={formValues.password}
                                                onChange={handleChange}
                                                placeholder="Your Password"
                                                className="w-full  px-10 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                            <span class="absolute right-0 cursor-pointer" onClick={() => setInputType(!inputType)}>
                                                {inputType ? <FaEyeSlash className="size-5 mt-2 mx-3 text-emerald-500" /> : <FaEye className="size-5 mt-2 mx-3 text-emerald-500" />}
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-emerald-300 dark:text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg> */}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button disabled={isLoading} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-emerald-600 disabled:bg-emerald-400 rounded-lg hover:bg-emerald-500 focus:outline-none focus:bg-emerald-400 focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
                                            {isLoading ? 'Loading....' : 'Sign in'}
                                        </button>
                                    </div>

                                </form>

                                {/* <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-emerald-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login