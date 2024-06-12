import React, { useState } from 'react'

const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const HandleSubmit = (e) => {
      e.preventDefault()
      
    }
    return (
        <div className="h-screen bg-gray-100 flex justify-center">
            <div className="py-6 px-8 h-fit mt-20 w-1/3 bg-white rounded shadow-xl">
                <form>
                    <div className="mb-6">
                        <label for="name" className="block text-gray-800 font-bold">Name:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 py-3 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />
                    </div>

                    <div>
                        <label for="email" className="block text-gray-800 font-bold">Email:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={formValues.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 py-3 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        />

                        <a href="#" className="text-sm font-thin text-gray-800 hover:underline mt-8 inline-block hover:text-indigo-600">Forget Password</a>
                    </div>
                    <button type='submit' className="cursor-pointer py-2 px-4 block mt-6 bg-emerald-700 text-white font-bold w-full text-center rounded">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login