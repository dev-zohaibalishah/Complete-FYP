import React from 'react'
import "./Contact.css"
import CS from '../depts/cs/CS.jsx'
import Login from '../admission/login/Login.jsx'
import Register from '../admission/register/Register.jsx'
import AdminLogin from '../admission/adminLogin/AdminLogin.jsx'
import AdminDashboard from '../admission/adminDashboard/AdminDashboard.jsx'
import SignupForm from '../admission/signupForm/SignupForm.jsx'
import StudentDashboard from '../admission/studentDashboard/StudentDashboard.jsx'
import FAQ from '../faq/FAQ.jsx'

const Contact = () => {
  return (
    <>
      {/* <Login/>
      <Register/>
      <SignupForm/>
      <AdminLogin/>
      <StudentDashboard />
      <AdminDashboard/> */}
      <CS />
      <FAQ />
    </>
  )
}

export default Contact