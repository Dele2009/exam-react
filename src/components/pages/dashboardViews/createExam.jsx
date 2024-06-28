import React, { useState, useEffect } from 'react';
import axios from '../../../utilities/axios';
import upload from '../../../assets/upload.svg';
import { useAuthContent } from '../../../hooks';
import { Alert } from '../../Elememts';

const CreateExam = () => {
  const { user } = useAuthContent();

  const getExamState = () => {
    const Data = {
      title: '',
      subject: '',
      questions: [],
      previews: {},
    };
    const ExamState = localStorage.getItem('ExamCreation');
    const Exam = ExamState ? JSON.parse(ExamState) : Data;

    return Exam;
  };

  const initialState = getExamState();

  const [title, setTitle] = useState(initialState.title);
  const [subject, setSubject] = useState(initialState.subject);
  const [questions, setQuestions] = useState(initialState.questions);
  const [error, setError] = useState([]);
  const [previews, setPreviews] = useState(initialState.previews);

  useEffect(() => {
    const Exam = {
      title,
      subject,
      questions,
      previews,
    };
    localStorage.setItem('ExamCreation', JSON.stringify(Exam));
  }, [title, subject, questions, previews]);
  useEffect(() => {
    console.log(error)
  }, [error]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleImageChange = (questionIndex, file) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].image = file;
    setQuestions(updatedQuestions);
    generatePreview(questionIndex, file);
  };

  const handleImagePreview = async (data) => {
    if (data) {
      const reader = new FileReader();

      const preview = await new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(data);
      });

      return preview;
    } else {
      return null;
    }
  };

  const generatePreview = async (index, file) => {
    const preview = await handleImagePreview(file);
    setPreviews((prev) => ({ ...prev, [index]: preview }));
  };

  const isQuestionComplete = (question) => {
    return (
      question.questionText.trim() !== '' &&
      question.options.every((option) => option.trim() !== '') &&
      question.correctAnswer.trim() !== ''
    );
  };

  const addQuestion = () => {
    if (questions.length > 0) {
      const currentQuestion = questions[questions.length - 1];
      if(!title || !subject){
        setError((prev) => ([...prev, { message: 'Title and subject must be include to proceed', error: true }]));
        return;

      }
      if (!isQuestionComplete(currentQuestion)) {
        setError((prev) => ([...prev, { message: 'Please complete the current question before adding a new one.', error: true }]));
        return;
      }
    }
    // setError([]);
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '', image: null }]);
  };

  const handleErrors = (i) => {
    const newErr = Array.from(error).filter((_, index) => index !== i)
    setError(newErr)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !subject){
      setError((prev) => ([...prev, { message: 'Title and subject must be include to proceed', error: true }]));
      return;

    }
    if (questions.some((question) => !isQuestionComplete(question))) {
      setError((prev) => ([...prev, { message: 'Please complete all questions before submitting.', error: true }]));
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subject', subject);

      questions.forEach((question, index) => {
        formData.append(`questions[${index}][questionText]`, question.questionText);
        formData.append(`questions[${index}][correctAnswer]`, question.correctAnswer);
        formData.append(`questions[${index}][image]`, question.image);
        question.options.forEach((option, optionIndex) => {
          formData.append(`questions[${index}][options][${optionIndex}]`, option);
        });
      });

      const { data } = await axios.post('/exams/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Exam created:', data);
      // Reset the form after successful submission
      setTitle('');
      setSubject('');
      setQuestions([]);
      setPreviews({});
      setError([]);
    } catch (err) {
      console.error(err);
      setError('Error creating exam. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse items-start gap-3 justify-center p-6 bg-gray-100">
      {error.length > 0 && (
        <div className="flex flex-col items-center justify-center gap-3 fixed z-50 top-5 right-4">
          {error.map((error_Obj, index) => (
            <Alert {...error_Obj} key={index} index={index} length={error.length} onClick={() => handleErrors(index)} />
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white z-30 p-8 rounded-lg shadow-lg w-full md:w-7/12 lg:w-8/12 mb-6">

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Your Exam</h2>
        {/* {error && <p className="text-red-600 mb-4">{error}</p>} */}
        {questions.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
            <h2 className="text-2xl text-gray-600">Start Creating Your Exam Now!</h2>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Exam Title"
                className="block border border-gray-300 p-3 rounded-lg w-full mb-4 md:mb-0"
              />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="block border border-gray-300 p-3 rounded-lg w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions.map((question, questionIndex) => (
                <div key={questionIndex} className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                  <h4 className="text-lg font-medium mb-4 text-gray-700">Question {questionIndex + 1}</h4>
                  <label
                    htmlFor={`questionImage${questionIndex}`}
                    className="w-full mb-6 h-48 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center cursor-pointer overflow-hidden"
                  >
                    <img
                      src={previews[questionIndex] ? previews[questionIndex] : upload}
                      alt=""
                      className={`${previews[questionIndex] ? 'w-full h-full object-cover' : 'w-1/2 h-1/2'}`}
                    />
                  </label>
                  <input
                    type="file"
                    id={`questionImage${questionIndex}`}
                    accept="image/*"
                    onChange={(e) => handleImageChange(questionIndex, e.target.files[0])}
                    className="hidden"
                  />
                  <input
                    type="text"
                    value={question.questionText}
                    onChange={(e) => handleQuestionChange(questionIndex, 'questionText', e.target.value)}
                    placeholder="Question Text"
                    className="block border border-gray-300 p-3 rounded-lg w-full mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {question.options.map((option, optionIndex) => (
                      <input
                        key={optionIndex}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                        placeholder={`Option ${optionIndex + 1}`}
                        className="block border border-gray-300 p-2 rounded-lg w-full mb-2"
                      />
                    ))}
                  </div>
                  <input
                    type="text"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(questionIndex, 'correctAnswer', e.target.value)}
                    placeholder="Correct Answer"
                    className="block border border-gray-300 p-3 rounded-lg w-full"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <button type="button" onClick={addQuestion} className="w-full bg-green-500 text-white p-3 rounded-lg my-4">
          Add New Question
        </button>
        {questions.length > 0 && (
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">
            Submit Exam
          </button>
        )}
      </form>

      <div className="bg-white p-8 shadow-lg rounded-lg w-full md:w-4/12 max-h-screen overflow-y-auto sticky top-1">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Preview Questions</h2>
        {questions.length === 0 ? (
          <p className="text-gray-600">No questions added yet.</p>
        ) : (
          questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-6 p-4 border border-gray-300 rounded-lg">
              <h2 className="text-lg font-medium text-gray-700 ">Question {questionIndex + 1}</h2>
              {previews[questionIndex] && (
                <img
                  src={previews[questionIndex]}
                  alt={`Question ${questionIndex + 1} Image`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-sm text-gray-700 mb-2 w-full max-w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-sm px-2 py-3  my-3">{question.questionText ? question.questionText : 'Question text ..........'}</h3>
              <ul className="text-sm text-gray-600 mb-2 w-full max-w-full  pl-4" style={{ listStyleType: 'lower-alpha' }}>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option ? option : '......'}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 w-full max-w-full">
                <strong>Correct Answer:</strong> {question.correctAnswer ? question.correctAnswer : '......'}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreateExam;
