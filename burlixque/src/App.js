import React from "react";
// import {Brows}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/Login/login";
import SignUpPage from "./Pages/SignUp/signUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;