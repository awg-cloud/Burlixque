import React from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
// import SidebarOrg from '../SideBar/SideBar';
import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import classes from './regisPagePreference.module.css'

function RegisPagePreference() {
  return (
    <div className={classes.container}>
      <SidebarPass />
      <div className={classes.contentSpace}>
        <div className={classes.heading}>
          <h3>Travel Preferences</h3>
          <p>Enter your travel preferences</p>
        </div>


        <div >
          <h6 style={{ textAlign: 'left', paddingLeft: '50px' }}></h6>
          <div className={classes.formContainer}>
            <br />
            <form className={classes.form}>
              {/* <div className={classes.formGroup}>
                <label htmlFor="Name">Destination</label>
                <select
                  className={classes.inputs}
                >
                  <option>Toyota Hiace Bus</option>
                  <option>Coaster Bus</option>
                  <option>Luxirious Bus</option>
                  <option>Mini Bus</option>
                  <option>Jeep</option>
                </select>
              </div> */}
              <div className={classes.formGroup}>
                <label htmlFor="lastName">Destinations</label>
                <select
                  className={classes.inputs}
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Kaduna</option>
                  <option>Portharcourt</option>
                  <option>Imo</option>
                  <option>Delta</option>
                  <option>Kogi</option>
                </select>
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Stops</label>
                <select
                  className={classes.inputs}
                >
                  <option>Berger</option>
                  <option>Ojota</option>
                  <option>Maryland</option>
                  <option>Iyana Ipaja</option>
                </select>
              </div>
              {/* <div className={classes.formGroup}>
                <label htmlFor="Name">Transportation Rate</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='5000'
                  required
                  className={classes.inputs}
                />
              </div> */}
              <div className={classes.formGroup}>
                <label htmlFor="Name">Slot Subsriction</label>
                <select
                  className={classes.inputs}
                >
                  <option>Monthly: 1000 Naira</option>
                  <option>Weekly: 500 Naira</option>
                  <option>Daily: 250 Naira</option>
                  <option>Custom</option>
                </select>
              </div>
              
            </form>
          </div>
          <br />
        </div>

        <div className={classes.newDiv}>
          <button
            className={`btn btn-success ${classes.btn}`}
            style={{ textAlign: "center", border: 0 }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegisPagePreference;
