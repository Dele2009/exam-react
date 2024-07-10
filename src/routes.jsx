import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navroot from './components/navigation/rootlayouts/navroot'
import Dashboard from './components/navigation/adminDashNav';
import NavBar from './components/navigation/studentDashNav';

import Heropage from './components/pages/introViews/hero'
import Login from './components/pages/introViews/login';


import Overview from './components/pages/dashboardViews/overview';
import Profile from './components/pages/dashboardViews/profile';
import { AdminForm, StudentForm, TeacherForm } from './components/pages/dashboardViews/UserRegister';

import StudentExam from './components/pages/StudentViews/exam';

import CreateExam from './components/pages/dashboardViews/createExam';

import { useEffect, useState, useContext, createContext } from 'react';
import Errorpage from './components/pages/ErrorViews/route_error';
import { useAuthContent } from './hooks';
import TakeExam from './components/pages/StudentViews/takeExam';
import UserTable from './components/pages/dashboardViews/userTable';
import ExamTable from './components/pages/dashboardViews/examTable';



const AppRoutes = () => {
    const { user } = useAuthContent()
    useEffect(() => {
        console.log('from the app.jsx', user, typeof user)
    }, [user])
    return (
        <Routes>

            <Route path='/' element={<Navroot />}>
                <Route index element={<Heropage />} />
                {/* <Route path='*' element={<Errorpage />} /> */}
            </Route>
            <Route path="/login"
                element={
                    !user ? <Login /> 
                          : 
                           (user.role === 'Admin' || user.role === 'Teacher') 
                             ? 
                            <Navigate to='/Dashboard'/> 
                            :
                            <Navigate to='/Students'/>
                }
            />

            {user && (user.role === 'Teacher' || user.role === 'Admin') &&
                (<Route path='/Dashboard' element={<Dashboard />}>
                    <Route index element={<Overview />} />
                    {user.role === 'Admin' && (
                        <>
                            <Route path='users' element={<UserTable />} />
                            <Route path='newuser/admin' element={<AdminForm />} />
                            <Route path='newuser/teacher' element={<TeacherForm />} />
                            <Route path='newuser/student' element={<StudentForm />} />
                        </>
                    )}

                    <Route path='allExams' element={<ExamTable />} />
                    <Route path='createExam' element={<CreateExam />} />
                    <Route path='profile' element={<Profile/>}/>
                    {/* <Route path='*' element={<Errorpage />} /> */}

                </Route>)
            }

            {user && user.role === 'Student' && (
                <Route path='/Students' element={<NavBar />}>
                    <Route index element={<StudentExam />} />
                    <Route path='exams/:id' element={<TakeExam />} />
                </Route>
            )}



        </Routes>
    )
}
export default AppRoutes;
