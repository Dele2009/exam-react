import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../../utilities/axios';
import { FaArrowLeft, FaArrowRight, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionGrid, SpinningDots , Modal,Alert, AlertContainer} from '../../Elememts';

import { useAuthContent } from '../../../hooks'



const TakeExam = () => {
    const { user } = useAuthContent();
    const { id } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [direction, setDirection] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [showExamInterface, setShowExamInterface] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const { data } = await axios.get(`/exam/${id}`, {
                    params: {_id: user.info._id}
                });
                setExam(data.Exam);
                setAnswers(Array(data.Exam.questions.length).fill(''));
                const totalDuration = parseInt(data.Exam.duration.hours) * 3600 + parseInt(data.Exam.duration.minutes) * 60;
                setTimeLeft(totalDuration);
            } catch (err) {
                console.log('Error fetching', err);
                setError(`${err.response.data.message}`);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 5000);
            }
        };

        fetchExam();
    }, [id]);

    const handleSubmit = async () => {
        try {
            setSubmitting(true)
            const { data } = await axios.post(`/exam/${id}/submit`, { answers, studentId: user.info._id });
            console.log('Submission response:', data);
            navigate(`/results/${data.resultId}`);
        } catch (error) {
            setErrors((prev) => ([{ message:error.message || 'Error submitting exam, try again' , error: true }, ...prev]))

            console.error('Error submitting exam:', error);
        }finally{
            setSubmitting(false)
        }
    };

    useEffect(() => {
        if (timeLeft > 0 && showExamInterface) {
            if (timeLeft === 0) handleSubmit()
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timeLeft, showExamInterface]);

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



    const handleStartExam = () => {
        setShowExamInterface(true);
    };

    const handleCancelExam = () => {
        navigate('/Dashboard'); // Redirect to dashboard or any other page
    };

    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <SpinningDots />
            </div>
        );
    }

    const removeError = (index)=>{
        setErrors((prevErrors) => prevErrors.filter((_, i) => i !== index))
    }

    if (error) {
        return (
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <h2 className='text-slate-700 font-bold font-sans text-3xl'>{error}</h2>
                <a onClick={handleCancelExam} className='underline text-green-700 mt-4 cursor-pointer'>
                    Back to dashboard
                </a>
            </div>
        );
    }

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}h : ${m.toString().padStart(2, '0')}m : ${s.toString().padStart(2, '0')}s`;
    };

    const questionVariants = {
        enter: (direction) => ({
            x: direction === 1 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        },
        exit: (direction) => ({
            x: direction === 1 ? "-100%" : "100%",
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        }),
    };

    if (!error && !showExamInterface) {
        return (
            <div className="w-full min-h-screen flex flex-col items-center justify-center px-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-8/12 lg:w-8/12 mb-6">
                    <h2 className="text-3xl mb-6 font-bold text-blue-600">Exam Details</h2>
                    <p className="mb-4"><strong>Title:</strong> {exam.title}</p>
                    <p className="mb-4"><strong>Subject:</strong> {exam.subject}</p>
                    <p className="mb-4"><strong>Duration:</strong> {exam.duration?.hours || '00'}h {exam.duration?.minutes || '00'}m</p>
                    <h2 className="text-3xl mb-6 font-bold text-blue-600">Student Details</h2>
                    {/* Assuming you have student details available in state or props */}
                    <p className="mb-4"><strong>Name:</strong> John Doe</p>
                    <p className="mb-4"><strong>Student ID:</strong> 123456</p>
                    
                    <div className="flex justify-between">
                        <button
                            onClick={handleStartExam}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        >
                            Start Exam
                        </button>
                        <button
                            onClick={handleCancelExam}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                        >
                            Cancel Exam
                        </button>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row gap-10 items-start justify-between px-12">
             {errors.length > 0 && (
                <AlertContainer>
                    {errors.map((error_Obj, index) => (
                        <Alert {...error_Obj} key={index} index={index} length={errors.length} onClick={() => removeError(index)} />
                    ))}
                </AlertContainer>
            )}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-8/12 lg:w-8/12 mb-6 overflow-hidden">
                <h2 className="text-3xl mb-6 font-bold text-blue-600">Take Exam: {exam.title}</h2>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg text-gray-600 font-medium">
                        <FaClock className="inline mr-2" /> {formatTime(timeLeft)}
                    </span>
                    <span className="text-lg text-gray-600 font-medium">
                        Question {currentQuestionIndex + 1} of {exam.questions.length}
                    </span>
                </div>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentQuestionIndex}
                        variants={questionVariants}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="mb-14"
                    >
                        {/* {exam.questions[currentQuestionIndex].image && ( */}
                        <img
                            src={exam.questions[currentQuestionIndex].image}
                            alt={`Question ${currentQuestionIndex + 1} Image`}
                            className={`${exam.questions[currentQuestionIndex].image ? 'block' : 'hidden'} w-full h-3/6 md:w-6/12 md:h-48  my-7 rounded-lg m-auto`}
                        />
                        {/* )} */}

                        <h4 className="text-xl font-semibold mb-4 text-gray-700">
                            {exam.questions[currentQuestionIndex].questionText}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exam.questions[currentQuestionIndex].options.map((option, index) => (
                                <label key={index} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
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
                        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:bg-gray-600"
                    >
                        <FaArrowLeft className="mr-2" /> Previous
                    </button>
                    <button
                        onClick={goToNextQuestion}
                        disabled={currentQuestionIndex === exam.questions.length - 1}
                        className="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:bg-gray-600"
                    >
                        Next <FaArrowRight className="ml-2" />
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

                <div className="mt-10">
                    <button
                        onClick={()=> setModalOpen(true)}
                        className="ml-auto flex items-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded disabled:opacity-50 disabled:bg-gray-600"
                    >
                        Submit Exam
                    </button>
                </div>
            </div>

            <Modal
                isOpen={modalOpen}
                title={'Exam submission request'}
                content={'You are requested submission of your exam, Do you confirm ?'}
                isLoading={submitting}
                onCancel={()=> setModalOpen(false)}
                onConfirm={handleSubmit}
            />
        </div>
    );
};

export default TakeExam;
