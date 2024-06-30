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
import NavBar from './components/navigation/studentDashNav';

import Heropage from './components/pages/introViews/hero'
import Login from './components/pages/introViews/login';


import Overview from './components/pages/dashboardViews/overview';
import { AdminForm, StudentForm, TeacherForm } from './components/pages/dashboardViews/UserRegister';

import StudentExam from './components/pages/StudentViews/exam';

import './index.css';
import CreateExam from './components/pages/dashboardViews/createExam';

import { useEffect, useState, useContext, createContext } from 'react';
import Errorpage from './components/pages/ErrorViews/route_error';
import { useAuthContent } from './hooks';
import { TakeExam } from './components/pages/StudentViews/takeExam';
function App() {

  const { user } = useAuthContent()
  useEffect(() => {
    console.log('from the app.jsx', user, typeof user)
  }, [user])
  return (
    <div className=" mx-auto pb-4">

      <Router>
        <Routes>

          <Route path='/' element={<Navroot />}>
            <Route index element={<Heropage />} />
            {/* {!user && */}
              {/* // ( */}
              <Route path="login" element={<Login />} />
            {/* // ) */}
            {/* // } */}
            

            <Route path='*' element={<Errorpage />} />
          </Route>

          {user && (user.role === 'Teacher' || user.role === 'Admin') &&
            (<Route path='/Dashboard' element={<Dashboard />}>
              <Route index element={<Overview />} />
              {user.role === 'Admin' && (
                <>
                  <Route path='newuser/admin' element={<AdminForm />} />
                  <Route path='newuser/teacher' element={<TeacherForm />} />
                  <Route path='newuser/student' element={<StudentForm />} />
                </>
               )}

              <Route path='exams/create' element={<CreateExam />} />
              <Route path='*' element={<Errorpage />} />

            </Route>)
          }

          {user && user.role === 'Student' && (
            <Route path='/Students' element={<NavBar/>}>
              <Route index element={<StudentExam/>}/>
              <Route path='exams/:id' element={<TakeExam/>}/>
            </Route>
          )}



        </Routes>

      </Router>
    </div>
  );
}

export default App;
