import React, { useState, useEffect } from 'react';
import { ExamCard, LogoLoader, SpinningDots } from '../../Elememts';
import axios from '../../../utilities/axios';

const StudentExam = () => {
    const [exams, setExams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const { data } = await axios.get('/exam/get');
                setExams(data.Exams);
            } catch (error) {
                console.error('Error fetching exams:', error);
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
                {/* <LogoLoader /> */}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 py-6">
            <div className="w-full md:w-11/12">
                <h2 className="text-3xl mb-6 font-bold text-blue-600">Available Exams</h2>
                {exams.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-gray-700 mb-4">No exams available at the moment.</p>
                        <img src="/assets/empty-state.svg" alt="No exams" className="w-48 h-48" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-2 ">
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
