import { useAuthContent } from "./useAuth"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
    const { dispatch } = useAuthContent()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()

        dispatch({ type: 'LOGOUT' })
        navigate('/login')
        return;
    }

    const authLogout = () =>{
        localStorage.removeItem('User');

        dispatch({ type: 'LOGOUT' })
        navigate('/login')
        return;
    }

    return { logout, authLogout };
}
