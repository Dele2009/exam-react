import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignupAdmin from './components/Auth/SignupAdmin';
// import StudentDashboard from './components/Dashboard/StudentDashboard';
// import TeacherDashboard from './components/Dashboard/TeacherDashboard';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import TakeExam from './components/Exam/TakeExam';
// import QuestionList from './components/Question/QuestionList';
// import Navbar from './components/navigation/nav';
import Navroot from './components/navigation/rootlayouts/navroot'
import Dashboard from './components/navigation/adminDashNav';

import Heropage from './components/pages/introViews/hero'
import Login from './components/pages/introViews/login';


import Overview from './components/pages/dashboardViews/overview';
import { AdminForm, StudentForm, TeacherForm } from './components/pages/dashboardViews/UserRegister';


import './index.css';
import CreateExam from './components/pages/dashboardViews/createExam';

function App() {
  return (
    <div className=" mx-auto pb-4">

      <Router>
        <Routes>

          <Route path='/' element={<Navroot />}>
            <Route path="/" element={<Heropage />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/exams/create" element={<CreateExam />} /> */}
          </Route>

          <Route path='/Dashboard' element={<Dashboard />}>
            <Route path='' element={<Overview />} />
            <Route path='newuser/admin' element={<AdminForm/>} />
            <Route path='newuser/teacher' element={<TeacherForm />} />
            <Route path='newuser/student' element={<StudentForm />} />
            <Route path='exams/create' element={<CreateExam/>} />
          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
