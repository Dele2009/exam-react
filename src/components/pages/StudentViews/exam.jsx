import React, { useState, useEffect } from 'react';
import { ExamCard, SpinningDots } from '../../Elememts';
import axios from '../../../utilities/axios';
import {useAuthContent} from '../../../hooks'
import noDtaImg from '../../../assets/empty-state.svg'
const StudentExam = () => {
    const {user} = useAuthContent()
    const [exams, setExams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    // console.log('exams com', user)


    useEffect(() => {
        const fetchExams = async () => {
            try {
                const { data } = await axios.get('/exam/get', {
                    params: { student: user.info._id }
                });
                setExams(data.Exams);
            } catch (error) {
                console.error('Error fetching exams:', error);
                setError(error.message)
            }finally{
                setTimeout(()=>{
                    setIsLoading(false);
                },5000)
            }
        };
        fetchExams();
    }, []);

    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <SpinningDots />
            </div>
        );
    }

    // if(error){
    //     return(
    //         <div className='w-full h-full flex justify-center items-center'>
    //            <h2  className='text-slate-700 font-bold font-sans text-3xl'>Request Timeout, try again</h2>
    //         </div>
    //     )
    // }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-6">
            <div className="w-full md:w-11/12">
                <h2 className="text-3xl mb-6 font-bold text-blue-600">Available Exams</h2>
                {exams.length === 0 ? (
                    <div className="flex flex-col items-center justify-center pt-10">
                        <img src={noDtaImg} alt="No exams" className="size-72" />
                        <p className="text-gray-700 mb-4 text-xl">No exams available for you at the moment !!!.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-2 ">
                        {exams.map((exam, index) => (
                           <ExamCard key={index} exam={exam} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentExam;
