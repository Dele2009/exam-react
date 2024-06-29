import React, { useState, useEffect } from 'react';
import { ExamCard, TakeExam } from '../../Elememts';
import axios from '../../../utilities/axios';

const StudentExam = () => {
    const [exams, setExams] = useState([]);
    const [selectedExam, setSelectedExam] = useState(null);

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const { data } = await axios.get('/exam/get');
                console.log(data)
                setExams(data.Exams);
            } catch (error) {
                console.error('Error fetching exams:', error);
            }
        };
        fetchExams();
    }, []);

    const handleSelectExam = (exam) => {
        setSelectedExam(exam);
    };

    const handleBackToDashboard = () => {
        setSelectedExam(null);
    };

    return (
        <div className="flex flex-col items-center justify-center px-4">
            {!selectedExam ? (
                <div className="w-full md:w-8/12 lg:w-6/12">
                    <h2 className="text-2xl mb-4 font-bold text-blue-600">Available Exams</h2>
                    {exams.length === 0 ? (
                        <p className="text-gray-700">No exams available.</p>
                    ) : (
                        exams.map((exam, index) => (
                            <ExamCard key={index} exam={exam} onSelect={handleSelectExam} />
                        ))
                    )}
                </div>
            ) : (
                <div className="w-full">
                    <button
                        onClick={handleBackToDashboard}
                        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mb-4"
                    >
                        Back to Dashboard
                    </button>
                    <TakeExam exam={selectedExam} />
                </div>
            )}
        </div>
    );
};

export default StudentExam;
