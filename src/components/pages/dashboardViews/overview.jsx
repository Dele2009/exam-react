
import React,{useState, useEffect} from 'react'
import { useAuthContent } from '../../../hooks/useAuth'

const Overview = () => {
    const {user} = useAuthContent()
    const [timeOfDay, setTimeOfDay] = useState(null)
    useEffect(()=>{
        const Time = new Date().getHours()
        console.log(Time)
        if(Time < 12) setTimeOfDay('Good Morning')
        else if(Time > 11 && Time < 17) setTimeOfDay('Good Afternoon')
        else if(Time > 17) setTimeOfDay('Good Evening')
    },[timeOfDay])
    return (
        <>

            {/* <!-- Put your content inside of the <main/> tag --> */}
            <h1 className="text-2xl font-black text-gray-800">{`${timeOfDay}, ${user.info.firstName}!`}</h1>
            <p className="mb-6 text-gray-600">Here's your overview.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-8">
                <div className="h-56 w-72 rounded-xl bg-white p-10 shadow-md"></div>
                <div className="h-56 w-72 rounded-xl bg-white p-10 shadow-md"></div>
                <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
                <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
                <div className="h-56 w-full rounded-xl bg-white p-10 shadow-md"></div>
            </div>

        </>
    )
}

export default Overview;