import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './SideBarPassenger.module.css';
import { BiLeftArrowAlt } from "react-icons/bi";
import HRM from './X_image.svg';
import user from './user.png';
import orgInactive from './orgInactive.svg';  
import orgActive from './orgActive.svg';      
import orgaddInactive from './orgaddInactive.svg'; 
import orgaddActive from './orgaddActive.svg';     
import personalInactive from './personalInactive.svg'; 
import personalActive from './personalActive.svg';     

const SidebarPass = ({ show, handleClose }) => {
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Updated useEffect to properly capture and set the active section based on the path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/passenger_checkout')) {
      setActiveSection('Address');
    } else if (path.includes('/preference')) {
      setActiveSection('organization');
    } else if (path.includes('/passenger')) {
      setActiveSection('personal');
    }
  }, [location]);

  const handleSectionClick = (section, path) => {
    if (section !== activeSection) {
      setActiveSection(section);
      navigate(path);
    }
  };

  return (
    <div className={classes.imgSpace}>
      <p className='container'>
        Complete your <br /> <span className={classes.reg}>Registration</span> <br /><br />

        <div
          className={`${classes.personal1} ${activeSection === 'personal' ? classes.active : ''}`}
          onClick={() => handleSectionClick('personal', '/register/passenger')}
          style={{ cursor: 'pointer' }}
        >
          <div className={classes.iconContainer}>
            <img 
              src={activeSection === 'personal' ? personalActive : personalInactive} 
              className={classes.iconImage} 
              alt="Personal Icon" 
            />
          </div>
          <div className={classes.personalText}>
            <h5 className={activeSection === 'personal' ? classes.activeText : ''}>Personal Details</h5>
            <div className={classes.personal}>Enter Personal Details</div>
          </div>
        </div>

        <div
          className={`${classes.personal1} ${activeSection === 'organization' ? classes.active : ''}`}
          onClick={() => handleSectionClick('organization', '/register/preference')}
          style={{ cursor: 'pointer' }}
        >
          <div className={classes.iconContainer}>
            <img 
              src={activeSection === 'organization' ? orgActive : orgInactive} 
              className={classes.iconImage} 
              alt="Organization Icon" 
            />
          </div>
          <div className={classes.personalText}>
            <h5 className={activeSection === 'organization' ? classes.activeText : ''}>Travel Preferences</h5>
            <div className={classes.personal}>Enter your travel preferences</div>
          </div>
        </div>
        <div
          className={`${classes.personal1} ${activeSection === 'Address' ? classes.active : ''}`}
          onClick={() => handleSectionClick('Address', '/register/passenger_checkout')}
          style={{ cursor: 'pointer' }}
        >
          <div className={classes.iconContainer}>
            <img 
              src={activeSection === 'Address' ? orgaddActive : orgaddInactive} 
              className={classes.iconImage} 
              alt="Organization Address Icon" 
            />
          </div>
          <div className={classes.personalText}>
            <h5 className={activeSection === 'Address' ? classes.activeText : ''}>Checkout</h5>
            <div className={classes.personal}>Monthly/ Weekly subscription</div>
          </div>
        </div>
        
      </p>

      <div className={classes.signIn}>
        <BiLeftArrowAlt className={classes.arrowIcon} />
        <span><a href='/'>Home</a></span>
      </div>

    </div>
  );
};

export default SidebarPass;
