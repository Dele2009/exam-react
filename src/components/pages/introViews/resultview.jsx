import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../utilities/axios';
import { FaCheckCircle, FaTimesCircle, FaUser, FaEnvelope, FaBook, FaClock, FaStar, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SpinningDots } from '../../Elememts';

const ResultsPage = () => {
    const { resultId } = useParams();
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCorrections, setShowCorrections] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResultData = async () => {
            try {
                const { data } = await axios.get(`exam/results/${resultId}`);
                setResult(data.result);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResultData();
    }, [resultId]);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <SpinningDots />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-red-500 text-lg">{error}</div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen overflow-y-scroll flex flex-col lg:flex-row justify-center items-start gap-10 px-4 py-8"
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-8/12 lg:w-5/12 mb-6 sticky top-6">
                <h2 className="text-3xl mb-6 font-bold text-blue-600">Exam Result</h2>
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                        <FaUser className="mr-2 text-emerald-700" /> Student Information
                    </h3>
                    <p className="text-lg text-gray-600 flex items-center">
                        <FaUser className="mr-2 text-gray-700" /> {result.student.firstName} {result.student.lastName}
                    </p>
                    <p className="text-lg text-gray-600 flex items-center">
                        <FaEnvelope className="mr-2 text-gray-700" /> {result.student.email}
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                        <FaBook className="mr-2 text-emerald-700" /> Exam Information
                    </h3>
                    <p className="text-lg text-gray-600 flex items-center">
                        <FaStar className="mr-2 text-gray-700" /> Title: {result.exam.title}
                    </p>
                    <p className="text-lg text-gray-600 flex items-center">
                        <FaBook className="mr-2 text-gray-700" /> Subject: {result.exam.subject}
                    </p>
                    <p className="text-lg text-gray-600 flex items-center">
                        <FaClock className="mr-2 text-gray-700" /> Duration: {result.exam.duration?.hours}h {result.exam.duration?.minutes}m
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                        <FaCheckCircle className="mr-2 text-emerald-700" /> Result
                    </h3>
                    <p className="text-lg text-gray-600 flex items-center">
                        <FaCheckCircle className="mr-2 text-gray-700" /> Score: {result.score} / {result.totalQuestions}
                    </p>
                </div>
                <button
                    className="ml-auto block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => setShowCorrections(!showCorrections)}
                >
                    {showCorrections ? 'Hide correction' : 'Show corrections'}
                </button>
            </div>
            {showCorrections &&
                <div className="mb-4 w-7/12">
                    <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
                        <FaQuestionCircle className="mr-2 text-emerald-700" /> Answers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {result.answers.map((answer, index) => (
                            <motion.div
                                key={index}
                                className={`p-4 border rounded-lg ${answer.isCorrect ? 'bg-green-200' : 'bg-red-200'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {answer.image && (
                                    <img
                                        src={answer.image}
                                        alt={`Question ${index + 1}`}
                                        className="w-full h-48 mb-4 rounded-2xl object-cover"
                                    />
                                )}
                                <p className="text-lg text-gray-600 mb-2">
                                    Question {index + 1}: {answer.questionText}
                                </p>
                                <p className="text-lg text-gray-600 flex items-center mb-2">
                                    Your Answer: {answer.selectedAnswer}{'  '}
                                    {answer.isCorrect ? (
                                        <FaCheckCircle className="inline ml-2 text-green-500" />
                                    ) : (
                                        <FaTimesCircle className="inline ml-2 text-red-500" />
                                    )}
                                </p>
                                {!answer.isCorrect && (
                                    <p className="text-lg text-gray-600 flex items-center">
                                        Correct Answer: {answer.correctAnswer} {'  '}
                                        <FaCheckCircle className="inline ml-2 text-green-500" />
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            }

        </motion.div>
    );
};

export default ResultsPage;
