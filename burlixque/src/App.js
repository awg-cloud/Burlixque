import React from "react";
// import {Brows}
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/Login/login";
import SignUpPage from "./Pages/SignUp/signUp";
import RegisPage from "./Components/Registeration Transport/regisPage";
import RegisPageVehicle from "./Components/Registeration Transport Vehicle/regisPageVehicle";
import RegisPageCheckout from "./Components/Registeration Transport Checkout/regisPageCheckout";
import RegisPagePass from "./Components/Registeration Passenger/regisPagePass";
import RegisPagePreference from "./Components/Registeration Travel Preference/regisPagePreference";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
        <Route path='/register/transport_organizer' element={<RegisPage />} />
        <Route path='/register/transport_vehicle' element={<RegisPageVehicle />} />
        <Route path='/register/transport_checkout' element={<RegisPageCheckout />} />
        <Route path='/register/passenger' element={<RegisPagePass />} />
        <Route path='/register/preference' element={<RegisPagePreference />} />
        {/* <Route path='/register/passenger' element={<RegisPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;