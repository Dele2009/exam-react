import { useAuthContent } from "./useAuth"
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Modal } from "../components/Elememts";


export const useLogout = () => {
    const { dispatch } = useAuthContent();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);


    const logout = () => {
        localStorage.clear()

        dispatch({ type: 'LOGOUT' })
        navigate('/login')
        return;
    }

    const handleModalOpen = () => setModalOpen(true)

    const LogoutModal = () => {
        return (
            <>
                <Modal
                    isOpen={modalOpen}
                    title='Logout request confirmation'
                    content='You are requesting to logout of your currnt session, Note that this action will clear all current activities in the process'
                    onCancel={()=> setModalOpen(false)}
                    onConfirm={logout}
                />
            </>
        )
    }

    const authLogout = () => {
        localStorage.removeItem('User');
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
        return;
    }

    return { handleModalOpen, LogoutModal };
}
