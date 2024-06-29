import React from 'react';

const ExamCard = ({ exam, onSelect }) => {
    return (
        <div
            className="bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelect(exam)}
        >
            <h3 className="text-xl font-bold text-gray-800">{exam.title}</h3>
            <p className="text-gray-600">Subject: {exam.subject}</p>
            <p className="text-gray-600">Questions: {exam.questions.length}</p>
        </div>
    );
};

export default ExamCard;
