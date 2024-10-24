import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import classes from './SideBarPassenger.module.css';
import { BiLeftArrowAlt } from "react-icons/bi";
// import HRM from './X_image.svg';
// import user from './user.png';
import orgInactive from './orgInactive.svg';
import orgActive from './orgActive.svg';
import orgaddInactive from './orgaddInactive.svg';
import orgaddActive from './orgaddActive.svg';
import personalInactive from './personalInactive.svg';
import personalActive from './personalActive.svg';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const SidebarPass = ({ show, handleClose }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handdleOpen = () => {
    setOpenMenu(!openMenu);
  }

  const [activeSection, setActiveSection] = useState('personal');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const path = location.pathname.split('/')[1];
    setActiveSection(path);
  }, [location]);


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

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay to give a smooth entrance when the page is loaded
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={classes.newBigOvr}>
      <div className={classes.imgSpace}>
        <p className={classes.container}>
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
              <h5 className={activeSection === 'organization' ? classes.activeText : ''}>Travel & Destination Preferences</h5>
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
              <div className={classes.personal}>Monthly subscription</div>
            </div>
          </div>

        </p>

        <Link to='/new_dashboard'><div className={classes.signIn}>
          <BiLeftArrowAlt className={classes.arrowIcon} />
          <span><p>Home</p></span>
        </div>
        </Link>

      </div>
      <div className={classes.fixedMenu} onClick={handdleOpen}>{openMenu ? <IoMdClose /> : <MdOutlineMenu /> }</div>
      <div className={` ${openMenu ? classes.mobileMenu : classes.nodisplay} ${animate ? classes.slideInLeft : ''}`}>
        <Link to='/register/passenger'><p style={{color: '#000000', textDecoration: 'none'}}>Personal Details <MdOutlineKeyboardDoubleArrowRight /></p> </Link>
        <Link to='/register/preference'><p style={{color: '#000000', textDecoration: 'none'}}>Travel Preferences <MdOutlineKeyboardDoubleArrowRight /></p></Link>
        <Link to='/register/passenger_checkout'><p style={{color: '#000000', textDecoration: 'none'}}>Checkout <MdOutlineKeyboardDoubleArrowRight /></p></Link>
      </div>
    </div>

  );
};

export default SidebarPass;
