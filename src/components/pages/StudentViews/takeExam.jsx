import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { QuestionGrid } from '../../Elememts';
import { useParams } from 'react-router-dom';
import axios from '../../../utilities/axios'

import {
    Spinner,
    BouncingDots,
    PulsingCircle,
    SpinningDots,
    GrowingBars,
    RotatingSquare,
    FadingCircle,
    SlidingBars,
} from '../../Elememts'

const TakeExam = () => {
    const { id } = useParams()
    const [exam, setExam] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [direction, setDirection] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const { data } = await axios.get(`/exam/${id}`);
                setExam(data.Exam);
                setAnswers(Array(data.Exam.questions.length).fill(''))
                const totalDuration = parseInt(data.Exam.duration.hours) * 3600 + parseInt(data.Exam.duration.minutes) * 60;
                setTimeLeft(totalDuration);
                setIsLoading(false);
            } catch (err) {
                console.log('Error fetching', err)
                setIsLoading(false);
            }
        };

        fetchExam();
    }, [id]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const handleAnswerChange = (event) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = event.target.value;
        setAnswers(updatedAnswers);
    };

    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setDirection(-1);
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const goToNextQuestion = () => {

        if (currentQuestionIndex < exam.questions.length - 1) {
            setDirection(1);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleSelectQuestion = (index) => {
        setCurrentQuestionIndex(index);
    };

    if (isLoading || exam.length == 0) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                {/* <h2 className="text-4xl text-emerald-600">
                    Loading........
                </h2> */}

                {/* <Spinner/> */}
                {/* <BouncingDots/> */}
                {/* <PulsingCircle/> */}
                <SpinningDots />

                {/* <SlidingBars/> */}
                {/* <FadingCircle/> */}

                {/* <GrowingBars/> */}
                {/* <RotatingSquare/> */}
            </div>
        )
    }

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
    };

    const questionVariants = {
        enter: (direction) => {
            return {
                x: direction === 1 ? "100%" : "-100%",
                opacity: 0,
            };
        },
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        },
        exit: (direction) => {
            return {
                x: direction === 1 ? "-100%" : "100%",
                opacity: 0,
                transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                },
            };
        },
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row gap-10 items-start justify-between px-4">
            <div className="bg-white p-12 rounded-lg shadow-md w-full md:w-8/12 lg:w-8/12 mb-6 overflow-hidden">
                <h2 className="text-2xl mb-10 font-bold text-blue-600">Take Exam: {exam.title}</h2>
                <AnimatePresence mode='wait' custom={direction}>
                    <motion.div
                        key={currentQuestionIndex}
                        variants={questionVariants}
                        custom={direction}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="mb-14"
                    >
                        <h4 className="text-lg font-medium mb-4 text-gray-700">Question {currentQuestionIndex + 1}</h4>
                        {exam.questions[currentQuestionIndex].image && (
                            <img
                                src={exam.questions[currentQuestionIndex].image}
                                alt={`Question ${currentQuestionIndex + 1} Image`}
                                className="w-7/12 h-48 my-7 rounded-lg m-auto"
                            />
                        )}
                        <h4 className="text-lg mb-6 capitalize text-gray-700">{exam.questions[currentQuestionIndex].questionText}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exam.questions[currentQuestionIndex].options.map((option, index) => (
                                <label key={index} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name={`question${currentQuestionIndex}`}
                                        value={option}
                                        checked={answers[currentQuestionIndex] === option}
                                        onChange={handleAnswerChange}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-between">
                    <button
                        onClick={goToPreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:bg-gray-600"
                    >
                        Previous Question
                    </button>
                    <button
                        onClick={goToNextQuestion}
                        disabled={currentQuestionIndex === exam.questions.length - 1}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:bg-gray-600"
                    >
                        Next Question
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 w-full md:w-4/12 p-6 rounded-lg shadow-md sticky top-3">
                <div className="flex justify-between mb-4">
                    <span className="text-xl text-slate-600 font-bold">{formatTime(timeLeft)}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className="text-gray-700">Question {currentQuestionIndex + 1} of {exam.questions.length}</span>
                    <span className="text-gray-700">{answers.filter(answer => answer !== '').length} answered</span>
                </div>
                <QuestionGrid
                    questions={exam.questions}
                    answers={answers}
                    currentQuestionIndex={currentQuestionIndex}
                    onSelectQuestion={handleSelectQuestion}
                />
            </div>
        </div>
    );
};

export default TakeExam;
