import React, { useContext, useState, useEffect, createContext, useReducer } from "react";

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
    const [user, setUser] = useState('')

    const handleToken = (token) => {
        setUser(token)
    }

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    useEffect(() => {
        console.log('Auth context', state);
    }, [state])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('User'))
        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])
    return (
        <>
            <AppContext.Provider value={{ ...state, dispatch }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider;