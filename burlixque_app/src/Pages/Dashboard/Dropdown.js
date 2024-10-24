import React, { useState } from 'react';
import './Dropdown.css'; // Ensure this CSS is handling the hover state
// import profile from '../../Assets/pfp.png'
import { useNavigate } from 'react-router-dom';


const Dropdown = ({openModal, openOrgModal}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePay = () => {
    navigate('/register/passenger_checkout');
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleMonitor = () => {
    navigate('/check_myrides');
  };

  return (
    <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      <div className='dropdownGroo'>
        <button className="dropdown-button" onMouseEnter={toggleDropdown} onClick={toggleDropdown}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <button className="dropdown-item" onClick={handleProfile}>Profile</button>
          <button className="dropdown-item" onClick={openModal}>Schedule a ride</button>
          <button className="dropdown-item" onClick={openOrgModal}>Organize a ride</button>
          <button className="dropdown-item" onClick={handleMonitor}>Monitor your Ride</button>
          <button className="dropdown-item">Privacy & Policy</button>
          <button className="dropdown-item">Contact Us</button>
          <button onClick={handlePay} className="dropdown-item">Pay Now</button>
          {/* <button className="dropdown-item">Patner with Us</button> */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
