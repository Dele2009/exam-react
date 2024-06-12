import React, { useState } from 'react';
import axios from '../../../utilities/axios';
import upload from '../../../assets/upload.svg'
const CreateExam = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: '', image: null }]);
  const [error, setError] = useState('');

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
  };

  const isQuestionComplete = (question) => {
    return (
      question.questionText.trim() !== '' &&
      question.options.every((option) => option.trim() !== '') &&
      question.correctAnswer.trim() !== ''
    );
  };

  const addQuestion = () => {
    const currentQuestion = questions[questions.length - 1];
    if (!isQuestionComplete(currentQuestion)) {
      setError('Please complete the current question before adding a new one.');
      return;
    }
    setError('');
    setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '', image: null }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (questions.some((question) => !isQuestionComplete(question))) {
      setError('Please complete all questions before submitting.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('subject', subject);

      questions.forEach((question, index) => {
        formData.append(`questions[${index}][questionText]`, question.questionText);
        formData.append(`questions[${index}][correctAnswer]`, question.correctAnswer);
        // if (question.image) {
          formData.append(`questions[${index}][image]`, question.image);
        // }
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
      setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: '', image: null }]);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error creating exam. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse items-start gap-6 justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-9/12 mb-6">
        <h2 className="text-2xl mb-4">Create Exam</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex gap-4 my-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Exam Title"
            className="block border border-gray-300 p-2 w-full mb-4"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="block border border-gray-300 p-2 w-full mb-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-10">
              <h4 className='my-5'>Question {questionIndex + 1}</h4>
              <label htmlFor={`questionImage${questionIndex}`} className='w-full mb-8 h-48 border-gray-300 border rounded-lg flex justify-center items-center cursor-pointer'>
                <img 
                 src={question.image? URL.createObjectURL(question.image): upload} 
                 alt="" 
                 className={`${question.image?'w-full h-full' :'w-1/2 h-1/2'} rounded-lg`} 
                />
                
              </label>
              <input
                type="file"
                id={`questionImage${questionIndex}`}
                accept='image/*'
                onChange={(e) => handleImageChange(questionIndex, e.target.files[0])}
                className="hidden border border-gray-300 p-2 w-full mb-2"
                
              />
              <input
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(questionIndex, 'questionText', e.target.value)}
                placeholder="Question Text"
                className="block border border-gray-300 p-2 w-full mb-2"
              />
              <div className="grid grid-cols-2 gap-2">
                {question.options.map((option, optionIndex) => (
                  <input
                    key={optionIndex}
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                    placeholder={`Option ${optionIndex + 1}`}
                    className="block border border-gray-300 p-1 w-full mb-2"
                  />
                ))}
              </div>

              <input
                type="text"
                value={question.correctAnswer}
                onChange={(e) => handleQuestionChange(questionIndex, 'correctAnswer', e.target.value)}
                placeholder="Correct Answer"
                className="block border border-gray-300 p-2 w-full mb-2"
              />
            </div>
          ))}
        </div>
        <button type="button" onClick={addQuestion} className="w-full bg-green-500 text-white p-2 rounded mb-4">
          Add Question
        </button>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Create Exam
        </button>
      </form>

      <div className="bg-white p-6 shadow-md w-full rounded-lg max-w-sm max-h-screen overflow-y-scroll sticky top-3">
        <h2 className="text-2xl mb-4">Preview Questions</h2>
        {questions.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-4 border-2 border-slate-950 p-3 rounded">
              <h2><strong>Question {questionIndex + 1}</strong> </h2>
              {question.image &&
                <img
                  src={URL.createObjectURL(question.image)}
                  alt={`Question ${questionIndex + 1} Image`}
                  className="max-w-full h-auto"
                />
              }
              <h3 className="text-sm my-2 w-full">{question.questionText}</h3>
              <ul className="text-sm list-inside mb-2" style={{ listStyleType: 'upper-alpha' }}>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
              <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CreateExam;
