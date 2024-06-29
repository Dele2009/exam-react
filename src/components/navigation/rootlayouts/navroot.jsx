import { Outlet } from 'react-router-dom'
import Navbar from '../nav'

function Navroot(){
    return(
        <>
          <Navbar/>
          <Outlet/>
        </>
    )
}

export default Navroot