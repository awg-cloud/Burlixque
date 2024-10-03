import React from "react";
// import {Brows}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/Login/login";
import SignUpPage from "./Pages/SignUp/signUp";
import RegisPage from "./Components/Registeration Transport/regisPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
        <Route path='/register/transport_organizer' element={<RegisPage />} />
        {/* <Route path='/register/passenger' element={<RegisPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;