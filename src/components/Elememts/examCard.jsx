import React from 'react';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam}) => {
    return (
        <Link to={`exams/${exam._id}`}>
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-bold text-gray-800">{exam.title}</h3>
            <p className="text-gray-600">Subject: {exam.subject}</p>
            <p className="text-gray-600">Questions: {exam.questionsLength}</p>
        </div>
        </Link>
    );
};

export default ExamCard;
