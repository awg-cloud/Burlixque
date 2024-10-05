import React from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
import SidebarOrg from '../SideBar/SideBar';
import classes from './regisPage.module.css'

function RegisPage() {
  return (
    <div className={classes.container}>
      <SidebarOrg />
      <div className={classes.contentSpace}>
        {/* <section className={classes.skip}>
          <Link to="/education">
            <a href="">
              Skip
              <BiRightArrowAlt className={classes.arrowIcon} />
            </a>
          </Link>
        </section> */}
        <div className={classes.heading}>
          <h3>Personal details</h3>
          <p>Enter your personal details</p>
        </div>


        <div >
          <h6 style={{ textAlign: 'left', paddingLeft: '50px' }}></h6>
          <div className={classes.formContainer}>
            <br />
            <form className={classes.form}>
              <div className={classes.formGroup}>
                <label htmlFor="Name">First Name</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='John'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="lastName">Date of Birth</label>
                <input
                  type="date"
                  name="degree"
                  placeholder='Doe'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">School Registration Number</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='105898HI'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Matriculation Number</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='SCI/22/23/999'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Preferred Username</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='John_Doe'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Home Address</label>
                <textarea rows={1}
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='Lekki, Phase 1, 2 Onikolo street'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Course</label>
                <input 
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='Computer Science'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Department</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='Computer Science'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Phone Number</label>
                <input 
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='Computer Science'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Socials</label>
                <textarea rows={2} 
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='Paste link to any of your social media account'
                  className={classes.inputs}
                />
              </div>
            </form>
          </div>
          <br />
        </div>

        <div className={classes.newDiv}>
          <button
            className={`btn btn-success ${classes.btn}`}
            style={{ textAlign: "center", border: 0  }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegisPage;
