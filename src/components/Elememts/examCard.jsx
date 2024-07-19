import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaQuestionCircle } from 'react-icons/fa';

const ExamCard = ({ exam }) => {
    return (

        <div className="bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-800">{exam.title}</h3>
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                <p className="text-gray-600 flex items-center">
                    <FaBook className="mr-2" />
                    {exam.subject}
                </p>
                <p className="text-gray-600 flex items-center">
                    <FaQuestionCircle className="mr-2" />
                    {exam.questionsLength} Questions
                </p>
            </div>
            <Link to={`exams/${exam._id}`}>
                <button type='button' className="mt-6 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                    Take Exam
                </button>
            </Link>
        </div >

    );
};

export default ExamCard;
