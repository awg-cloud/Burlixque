import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import Switch from "react-switch";
import styles from './dashApp.module.css';
import headerStyles from './Header.module.css';
import mapStyles from './Map.module.css';
import buttonStyles from './Buttons.module.css';
import toggleStyles from './Toggle.module.css';
import Dropdown from './Dropdown';
import profile from '../../Assets/pfp.png'
import logo from '../../Assets/newlogo.svg'

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

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.appContainer} style={isDarkMode ? darkTheme : lightTheme}>
      <header className={headerStyles.header}>
        <div className={styles.logoGroup}>
        <img src={logo} alt="" />
        <h1>Burlixque</h1>
        
        </div>
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


      </header>

      {/* Google Map */}
      <div className={mapStyles.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyASUh5H7MeQ1j_lYTeAQm-sAFZ7-ukvQSE" }}
          defaultCenter={defaultCenter}
          defaultZoom={defaultZoom}
        />
      </div>

      {/* Action buttons */}
      <div className={buttonStyles.buttonContainer}>

        <button style={isDarkMode ? { backgroundColor: '#ffffff', color: '#000000' } : { backgroundColor: '#000000', color: '#ffffff' }} className={buttonStyles.button}>Schedule a Ride</button>
      </div>




<h4 className={styles.aboutmeh4}>About Us</h4>
      <div className={styles.aboutGroupthings} id="About">
        <img src={profile} alt="" />
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
      </div>

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
