import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import { useLogin } from '../../../hooks'
import { Alert,AlertContainer } from '../../Elememts'
const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const handleChange = e => {
        const { name, value } = e.target
        setFormValues(prev => ({
            ...prev,
            [name]: value

        }))
    }



    const { isLoading, errors, handleErrors, login } = useLogin()
    useEffect(() => {
        console.log(formValues, errors)
    }, [formValues, errors])

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

            if (role === 'Admin' || role === 'Teacher') {
                setTimeout(() => {
                    navigate('/Dashboard');

                }, 5000)
            } else {
                setTimeout(() => {
                    navigate('/Students');
                }, 5000)
            }
        } catch (e) {
            console.error(e);
        }

        //   const {data} = await axios.post('/auth/sign-in', formValues)

        //   console.log(data)
        //   if(data.token) handleToken(data.token)



    }
    return (
        <div className="h-screen bg-gray-100 flex justify-center">

            {errors.length > 0 && (
                <AlertContainer>
                    {errors.map((error_Obj, index) => (
                        <Alert {...error_Obj} key={index} index={index} length={errors.length} onClick={() => setErrors(index)} />
                    ))}
                </AlertContainer>
            )}

            <div className="z-30 py-6 px-8 h-fit mt-32 w-10/12 md:w-1/3 bg-white rounded shadow-xl">
                <form onSubmit={HandleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-800 font-bold">Email / Usernsme:</label>
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
                        <label htmlFor="password" className="block text-gray-800 font-bold">Password:</label>
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
            </div>
        </div>
    )
}

export default Login