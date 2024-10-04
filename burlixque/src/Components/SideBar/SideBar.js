import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './SideBar.module.css';
import { BiLeftArrowAlt } from "react-icons/bi";
import HRM from './X_image.svg';
import user from './user.png';
import orgInactive from './orgInactive.svg';  
import orgActive from './orgActive.svg';      
import orgaddInactive from './orgaddInactive.svg'; 
import orgaddActive from './orgaddActive.svg';     
import personalInactive from './personalInactive.svg'; 
import personalActive from './personalActive.svg';     

const SidebarOrg = ({ show, handleClose }) => {
  const [activeSection, setActiveSection] = useState('personal');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set active section based on current path
    const path = location.pathname.split('/')[1];
    setActiveSection(path);
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
          onClick={() => handleSectionClick('personal', '/personal')}
          style={{ cursor: 'pointer' }}
        >
          <div className={classes.iconContainer}>
            <img 
              src={activeSection === 'Address' ? personalInactive : user} 
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
          onClick={() => handleSectionClick('organization', '/organization')}
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
            <h5 className={activeSection === 'organization' ? classes.activeText : ''}>Vehicle and Destination Details</h5>
            <div className={classes.personal}>Enter your Vehicle/vehicles details</div>
          </div>
        </div>
        <div
          className={`${classes.personal1} ${activeSection === 'Address' ? classes.active : ''}`}
          onClick={() => handleSectionClick('Address', '/Address')}
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
            <div className={classes.personal}>Monthly/ Weekly subscrition</div>
          </div>
        </div>
        
      </p>

      <div className={classes.signIn}>
        <BiLeftArrowAlt className={classes.arrowIcon} />
        <span><a href='/'>Home</a></span>
      </div>

      <div className={classes.footer}>
        <img src={HRM} alt="HRM" className={classes.hrmImage}/>
      </div>
    </div>
  );
};

export default SidebarOrg;
