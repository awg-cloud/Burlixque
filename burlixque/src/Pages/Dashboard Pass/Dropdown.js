import React, { useState } from 'react';
import './Dropdown.css'; // Ensure this CSS is handling the hover state
import profile from '../../Assets/pfp.png'
import { useNavigate } from 'react-router-dom';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

    const handlePay = () => { navigate('/register/passenger_checkout'); };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      <div className='dropdownGroo'>
      <button className="dropdown-button" onMouseEnter={toggleDropdown} onClick={toggleDropdown}
      >
        Menu
      </button>
      {/* <p style={{margin: 0, fontSize: 16}}>\/</p> */}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <button className="dropdown-item">Home</button>
          <button className="dropdown-item">Schedule a ride</button>
          <button className="dropdown-item">Monitor your Ride</button>
          <button className="dropdown-item">About Us</button>
          <button className="dropdown-item">Contact Us</button>
          <button onClick={handlePay} className="dropdown-item">Pay Now</button>
          {/* <button className="dropdown-item">Patner with Us</button> */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
