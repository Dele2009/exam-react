import { Link } from "react-router-dom"
function Errorpage() {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="mx-auto my-auto w-fit h-fit">
                <h1 className="text-black text-9xl mx-auto w-fit">
                    404
                </h1>
                <div className="flex items-center justify-center">
                <Link to='/' className="bg-emerald-700 rounded px-2 py-3 text-stone-50 mx-auto w-fit my-5">
                    Go back to homepage
                </Link>
                </div>
                
            </div>
        </div>
    )
}
export default Errorpage;