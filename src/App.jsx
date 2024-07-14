import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContextProvider from './Context/Appcontext'

import Routes from './routes';

// import SignupAdmin from './components/Auth/SignupAdmin';
// import StudentDashboard from './components/Dashboard/StudentDashboard';
// import TeacherDashboard from './components/Dashboard/TeacherDashboard';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import TakeExam from './components/Exam/TakeExam';
// import QuestionList from './components/Question/QuestionList';
// import Navbar from './components/navigation/nav';
import './index.css';


function App() {

  
  return (
    <div className=" mx-auto pb-20">

      <Router>
        <AppContextProvider>
          <Routes/>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
