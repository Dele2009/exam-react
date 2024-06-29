import { useContext } from "react"
import { AppContext } from "../Context/Appcontext"

export const useAuthContent = () =>{
    const context =  useContext(AppContext)

    if(!context){
        throw Error('useAuthContent must be use in side the auth file')

    }

    return context
}