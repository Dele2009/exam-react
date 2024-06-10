import React, { useState } from 'react';
// import axios from '../../axios';

const CreateExam = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);

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

  const addQuestion = () => {
    setQuestions([...questions,
    {
      questionText: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    }]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/exams/create', { title, subject, questions });
      console.log('Exam created:', data);
      // Reset the form after successful submission
      setTitle('');
      setSubject('');
      setQuestions([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-row-reverse items-start gap-6 justify-center bg-gray-100 pt-9">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-9/12 mb-6">
        <h2 className="text-2xl mb-4">Create Exam</h2>
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
        <div className="grid grid-cols-2 gap-5">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-10 ">
              <h4 className='my-5'>
                Question {questionIndex + 1}
              </h4>

              <input
                type="text"
                value={question.questionText}
                onChange={(e) => handleQuestionChange(questionIndex, 'questionText', e.target.value)}
                placeholder="Question Text"
                className="block border border-gray-300 p-2 w-full mb-2"
              />
              {question.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                  placeholder={`Option ${optionIndex + 1}`}
                  className="block border border-gray-300 p-2 w-full mb-2"
                />
              ))}
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

      {/* <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl mb-4">Preview Questions</h2>
        {questions.length >= 2 ? (
          <p>No questions added yet.</p>
        ) : (
          questions.map((question, questionIndex) => (
            <div key={questionIndex} className="mb-4">
              <h3 className="text-xl mb-2">{question.questionText}</h3>
              <ul className="list-disc list-inside mb-2">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
              <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
};

export default CreateExam;


























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
