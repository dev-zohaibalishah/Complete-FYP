import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './pages/home/Home';
import Introduction from './pages/introduction/Introduction';
import Messages from './pages/messages/Messages';
import Administration from './pages/administration/Administration';
import VirtualTour from './pages/virtualTour/VirtualTour';
import Admission from './pages/admission/Admission';
import Contact from './pages/contact/Contact';
import SocialLinks from './components/footer/socialLinks/SocialLinks';
import Footer from './components/footer/footer/Footer';
import Event1 from './pages/events/event1/Event1';
import Event2 from './pages/events/event2/Event2';
import Event3 from './pages/events/event3/Event3';
import Event4 from './pages/events/event4/Event4';
import Event5 from './pages/events/event5/Event5';
import Event6 from './pages/events/event6/Event6';
import News2 from './pages/events/news2/News2';


import PrivateRoute from './pages/admission/adminLogin/PrivateRoute';
import Login from './pages/admission/login/Login';
import Register from './pages/admission/register/Register';
import StudentDashboard from './pages/admission/studentDashboard/StudentDashboard';
import AdminLogin from './pages/admission/adminLogin/AdminLogin';
import AdminDashboard from './pages/admission/adminDashboard/AdminDashboard';
import SignupForm from './pages/admission/signupForm/SignupForm';


import CS from './pages/depts/cs/CS';
import Botony from './pages/depts/cs/Botony';
import Chemistry from './pages/depts/cs/Chemistry';
import Economics from './pages/depts/cs/Economics';
import English from './pages/depts/cs/English';
import Geology from './pages/depts/cs/Geology';
import Maths from './pages/depts/cs/Maths';
import Physics from './pages/depts/cs/Physics';
import Statistics from './pages/depts/cs/Statistics';
import Zoology from './pages/depts/cs/Zoology';



import './App.css';

const App = () => {
  

  return (
    <Router>
      
      <div id="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event1" element={<Event1 />} />
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/event4" element={<Event4 />} />
          <Route path="/event5" element={<Event5 />} />
          <Route path="/event6" element={<Event6 />} />
          <Route path="/news2" element={<News2 />} />


          {/* Departments */}

          <Route path='/cs' element={<CS />} />
          <Route path='/botony' element={<Botony />} />
          <Route path='/chemistry' element={<Chemistry />} />
          <Route path='/economics' element={<Economics />} />
          <Route path='/english' element={<English />} />
          <Route path='/geology' element={<Geology />} />
          <Route path='/maths' element={<Maths />} />
          <Route path='/physics' element={<Physics />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/zoology' element={<Zoology />} />


          {/* Backend routes */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/adminDashboard/AdminDashboard" element={
            <PrivateRoute isAdmin={true}>
               <AdminDashboard />
               </PrivateRoute>
          } />

        </Routes>
        <SocialLinks />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
