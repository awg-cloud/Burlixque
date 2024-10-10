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
import RegisPageCheckoutPass from "./Components/Registeration Passenger Checkout/regisPageCheckoutPass";
import WelcomePage from "./Components/Welcome Page/welcome";
import WelcomePageTransport from "./Components/Welcome Page Transport/welcomeTransport";
import RideArrivedPage from "./Pages/HomePage/homePage";
import Dashboard from "./Pages/Dashboard Pass/dashboardPass";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign_up' element={<SignUpPage />} />
        <Route path='/register/transport_organizer' element={<RegisPage />} />
        <Route path='/register/transport_vehicle' element={<RegisPageVehicle />} />
        <Route path='/register/transport_checkout' element={<RegisPageCheckout />} />
        <Route path='/register/passenger_checkout' element={<RegisPageCheckoutPass />} />
        <Route path='/register/passenger' element={<RegisPagePass />} />
        <Route path='/register/preference' element={<RegisPagePreference />} />
        <Route path='/welcome_passenger' element={<WelcomePage />} />
        <Route path='/welcome_transport' element={<WelcomePageTransport />} />
        <Route path='/home' element={<RideArrivedPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/register/passenger' element={<RegisPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;