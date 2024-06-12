import { Outlet } from 'react-router-dom'
import Navbar from '../nav'

function Navroot({children}){
    return(
        <>
          <Navbar children={children}/>
          <Outlet/>
        </>
    )
}

export default Navroot