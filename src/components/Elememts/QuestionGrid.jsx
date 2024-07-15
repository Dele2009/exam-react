import React from 'react';

const QuestionGrid = ({ questions, answers, currentQuestionIndex, onSelectQuestion }) => {
    return (
        <div className="grid grid-cols-5 gap-2">
            {questions.map((question, index) => (
                <div
                    key={index}
                    onClick={() => onSelectQuestion(index)}
                    className={`p-2 text-center rounded-lg cursor-pointer ${answers[index] ? 'bg-green-500 text-white' : 'bg-white text-gray-800'} ${index === currentQuestionIndex ? 'border-2 border-blue-500 ring-offset-2 ring-blue-400' : ''}`}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
};

export default QuestionGrid;
