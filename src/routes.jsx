import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext, createContext } from "react";

// Navigation components
import Navbar from "./components/navigation/mainnav";
import Dashboard from "./components/navigation/adminDashNav";
import NavBar from "./components/navigation/studentDashNav";

// Intro/Landing page views/components
import Heropage from "./components/pages/introViews/hero";
import AboutPage from "./components/pages/introViews/about";
import ResultsPage from "./components/pages/introViews/resultview";
import Login from "./components/pages/introViews/login";

// Dashboard views
import Overview from "./components/pages/dashboardViews/overview";
import Profile from "./components/pages/dashboardViews/profile";
import {
  AdminForm,
  StudentForm,
  TeacherForm,
} from "./components/pages/dashboardViews/UserRegister";
import CreateExam from "./components/pages/dashboardViews/createExam";
import UserTable from "./components/pages/dashboardViews/userTable";
import ExamTable from "./components/pages/dashboardViews/examTable";

// Student components/Views
import StudentExam from "./components/pages/StudentViews/exam";
import TakeExam from "./components/pages/StudentViews/takeExam";

import Errorpage from "./components/pages/ErrorViews/route_error";

import { useAuthContent } from "./hooks";

import { LogoPreloader } from "./components/Elememts";

const AppRoutes = () => {
  const { user } = useAuthContent();
  useEffect(() => {
    console.log("from the app.jsx", user, typeof user);
  }, [user]);
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const handleLoad = () => setLoading(false);
    const wait = setTimeout(handleLoad, 4000);

    // window.addEventListener('load', handleLoad);window.removeEventListener('load', handleLoad);
    return () => clearTimeout(wait);
  }, [location]);

  if (loading) {
    return (
      <>
        <LogoPreloader />
      </>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Heropage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path='*' element={<Errorpage />} /> */}
      </Route>

      <Route path="/results/:resultId" element={<ResultsPage />} />

      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/Dashboard" />}
      />

      {user && (
        <Route
          path="/Dashboard"
          element={
            !user ? (
              <Navigate to="/login" />
            ) : user.role === "Student" ? (
              <NavBar />
            ) : (
              <Dashboard />
            )
          }
        >
          {(user.role === "Teacher" || user.role === "Admin") && (
            <>
              <Route index element={<Overview />} />
              {user.role === "Admin" && (
                <>
                  <Route path="users" element={<UserTable />} />
                  <Route path="newuser/admin" element={<AdminForm />} />
                  <Route path="newuser/teacher" element={<TeacherForm />} />
                  <Route path="newuser/student" element={<StudentForm />} />
                </>
              )}

              <Route path="allExams" element={<ExamTable />} />
              <Route path="createExam" element={<CreateExam />} />
              <Route path="profile" element={<Profile />} />
            </>
          )}

          {user.role === "Student" && (
            <>
              <Route index element={<StudentExam />} />
              <Route path="exams/:id" element={<TakeExam />} />
            </>
          )}
          {/* <Route path='*' element={<Errorpage />} /> */}
        </Route>
      )}

      {/* {user && user.role === 'Student' && (
                <Route path='/Students' element={<NavBar />}>
                    <Route index element={<StudentExam />} />
                    <Route path='exams/:id' element={<TakeExam />} />
                </Route>
            )} */}
    </Routes>
  );
};
export default AppRoutes;
