import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import Switch from "react-switch";
import styles from './dashApp.module.css';
import headerStyles from './Header.module.css';
import mapStyles from './Map.module.css';
import buttonStyles from './Buttons.module.css';
import toggleStyles from './Toggle.module.css';
import modalStyles from './Modal.module.css';
import Dropdown from './Dropdown';
import profile from '../../Assets/pfp.png'
import logo from '../../Assets/newlogo.svg'
import Modal from 'react-modal'
import { Select } from "@react-three/drei";

const Marker = ({ text }) => (
  <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
    📍 {text}
  </div>
);

// Basic theme logic
const lightTheme = {
  "--background": "var(--background-light)",
  "--text-color": "var(--text-color-light)",
};

const darkTheme = {
  "--background": "var(--background-dark)",
  "--text-color": "var(--text-color-dark)",
};

const defaultCenter = {
  lat: 6.5244,  // Latitude for Lagos, Nigeria
  lng: 3.3792,  // Longitude for Lagos, Nigeria
};

const defaultZoom = 11;

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isForSelf, setIsForSelf] = useState(true);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    destination: '',
    location: ''
  });

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBookingTypeChange = (e) => {
    setIsForSelf(e.target.value === "self");
  };

  const handleSearchSubmit  = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Submit the form data to the server or handle the logic here.
    setIsModalOpen(false); // Close the modal after submission
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className={styles.appContainer} style={isDarkMode ? darkTheme : lightTheme}>
      <header className={headerStyles.header}>
        <div className={styles.logoGroup}>
          <img src={logo} alt="" />
          <h1>Burlixque</h1>

        </div>
        <div className={styles.toggloedropdown}>
          <div className={toggleStyles.toggleContainer}>
            <label htmlFor="theme">{isDarkMode ? 'Light Theme' : 'Dark Theme'}</label>
            <Switch
              id="theme"
              onChange={handleThemeToggle}
              checked={isDarkMode}
              onColor="#ccc"
              offColor="#ccc"
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </div>
          <Dropdown />
        </div>


      </header>

      {/* Google Map */}
      <div className={mapStyles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyASUh5H7MeQ1j_lYTeAQm-sAFZ7-ukvQSE" }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
          center={userLocation || defaultCenter} // Center the map on user's location if available
        >
          {/* Display Marker if user's location is available */}
          {userLocation && (
            <Marker lat={userLocation.lat} lng={userLocation.lng} />
          )}
        </GoogleMapReact>
      </div>

      {/* Action buttons */}
      <div className={buttonStyles.buttonContainer}>

        <button style={isDarkMode ? { backgroundColor: '#ffffff', color: '#000000' } : { backgroundColor: '#000000', color: '#ffffff' }} className={buttonStyles.button} onClick={handleModalToggle}>Schedule a Ride</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        overlayClassName={modalStyles.modalOverlay}
        className={modalStyles.modalContent}
      >
        <div className={modalStyles.modalHeader}>Schedule a Ride</div>
        <p className={modalStyles.absolutePP} onClick={handleCloseModal}>X</p>
        <form onSubmit={handleSearchSubmit}>
          <div className={modalStyles.formGroup}>
            {/* Booking Type Selection */}
            <div className={modalStyles.radioGroup}>
              <label className={modalStyles.radioLabel}>
                <input
                  type="radio"
                  value="self"
                  checked={isForSelf}
                  onChange={handleBookingTypeChange}
                />{" "}
                For Self
              </label>
              <label className={modalStyles.radioLabel}>
                <input
                  type="radio"
                  value="someoneElse"
                  checked={!isForSelf}
                  onChange={handleBookingTypeChange}
                />{" "}
                For Someone Else
              </label>
            </div>

            {/* Conditional Form Fields */}
            {isForSelf ? (
              <>
                <div>
                  <label className={modalStyles.label} htmlFor="date">Date</label>
                  <input className={modalStyles.input} type="date" id="date" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="time">Time</label>
                  <input className={modalStyles.input} type="time" id="time" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="destination">Destination</label>
                  <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required />
                </div>
                {/* <div>
                  <label className={modalStyles.label} htmlFor="destination">Destination</label>
                  <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required />
                </div> */}
              </>
            ) : (
              <>
                <div>
                  <label className={modalStyles.label} htmlFor="location">Location</label>
                  <input className={modalStyles.input} type="text" id="location" placeholder="Enter location" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="date">Date</label>
                  <input className={modalStyles.input} type="date" id="date" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="time">Time</label>
                  <input className={modalStyles.input} type="time" id="time" required />
                </div>
                <div>
                  <label className={modalStyles.label} htmlFor="destination">Destination</label>
                  <input className={modalStyles.input} type="text" id="destination" placeholder="Enter destination" required />
                </div>
              </>
            )}
          </div>

          <div className={modalStyles.modalFooter}>
            <button type="submit" className={modalStyles.submitButton}>Search</button>
          </div>
        </form>
      </Modal>


            <div style={{height: '50px'}} id="about-us" />
      <h4 className={styles.aboutmeh4} >About Us</h4>
      <div className={styles.aboutGroupthings} id="About">
        <img src={profile} alt="" />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
      </div>


      <div style={{height: '50px'}} id="contact-us" />
      <h4 className={styles.aboutmeh4}>Contact Us</h4>
      <div className={styles.tivcontainer} id="Contact">
        <div className={styles.formSectionings}>
          <h3 className={styles.bigh3}>Get in Touch</h3>
          <h1>Let's Chat, Reach Out to Us</h1>
          <p>
            Have questions or feedback? We're here to help. Send us a message, and we'll respond
            within 24 hours.
          </p>
          <form className={styles.formers}>
            <div className={styles.inputGroupers}>
              <div className={styles.inputFielders}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="First name" />
              </div>
              <div className={styles.inputFielders}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Last name" />
              </div>
            </div>
            <div className={styles.inputFielders}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email address" />
            </div>
            <div className={styles.inputFielders}>
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Leave us a message" />
            </div>
            <div className={styles.checkboxers}>
              <input type="checkbox" id="privacyPolicy" />
              <label htmlFor="privacyPolicy">
                I agree to our friendly <a href="#">privacy policy</a>
              </label>
            </div>
            <button type="submit" className={styles.submitButtoners}>Send Message</button>
          </form>
        </div>

        <div className={styles.imageSection}>
          <img src="https://media.istockphoto.com/id/1995370992/photo/discover-seamless-customer-support-through-a-businessman-touching-virtual-screen-icons-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=knQlbQamISORsNNZcAU_4VoFhFOd3WZL7_Rtb_h4sVo=" alt="Contact Us" />
          <div className={styles.contactDetails}>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>📧</span>
              <p>Email: <a href="mailto:techteam@kawruh.com">techteam@kawruh.com</a></p>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.icon}>📞</span>
              <a href="tel: 08147645851">Phone: 08147645851 </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
