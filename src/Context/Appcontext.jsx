import React, { useContext, useState, useEffect, createContext, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isTokenExpired } from "../utilities/helpers";

export const AppContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}


const AppContextProvider = ({ children }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    useEffect(() => {
        console.log('Auth context', state);
    }, [state])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('User'))

        if (user) {
            if (user && isTokenExpired(user.token)) {
                localStorage.removeItem('User');
                dispatch({ type: 'LOGOUT' })
                navigate('/login');
                return;
            }
            dispatch({ type: 'LOGIN', payload: user })
        }
        // console.log('location is => ', location)
    }, [location])
    return (
        <>
            <AppContext.Provider value={{ ...state, dispatch }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider;