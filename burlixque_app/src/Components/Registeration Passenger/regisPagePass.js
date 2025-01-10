import React, { useState, useEffect } from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
// import SidebarOrg from '../SideBar/SideBar';
import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import classes from './regisPagePass.module.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function RegisPagePass() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [full_name, setFull_name] = useState('');
  const [school, setSchool] = useState('');
  const [socials, setSocials] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');
  const [home_address, setHome_address] = useState('');
  const [username, setUsername] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [matric_number, setMatric_number] = useState('');

  const [bearer, setBearer] = useState("");

  const readData = async () => {
    try {
      const value = await localStorage.getItem("tokens");
      if (value !== null) {
        setBearer(value);
        console.log(bearer);
      } else {
        navigate("/login");
      }
    } catch (e) {
      navigate("/login"); // Redirect to signin if there's an error reading the token
    }
  };

  useEffect(() => {
    readData();
  });

  const handleFullName = (e) => {
    setFull_name(e.target.value);
  }
  const handleSchool = (e) => {
    setSchool(e.target.value);
  }
  const handleSocials = (e) => {
    setSocials(e.target.value);
  }
  const handlePhone = (e) => {
    setPhone_number(e.target.value);
  }
  const handleDept = (e) => {
    setDepartment(e.target.value);
  }
  const handleCourse = (e) => {
    setCourse(e.target.value);
  }
  const handleHome_address = (e) => {
    setHome_address(e.target.value);
  }
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleDate = (e) => {
    setDate_of_birth(e.target.value);
  }
  const handleMatric = (e) => {
    setMatric_number(e.target.value);
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axios.post(`https://burlixque.onrender.com/users/profile`, {
        full_name: full_name,
        school: school,
        socials: socials,
        phone_number: phone_number,
        department: department,
        course: course,
        home_address: home_address,
        username: username,
        date_of_birth: date_of_birth,
        matric_number: matric_number,
      },
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${bearer}`,
          },
        }
      );

      if (response.status === 201) {
        navigate('/register/preference');
      }
      else {
        console.log(response.data)
        toast.error(response.data)
      }
    } catch (error) {
      console.log(error)
      toast.error(`Error: ${error.message}`);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <SidebarPass />
      <div className={classes.contentSpace}>
        <div className={classes.newDivCnt}>
          <div className={classes.heading}>
            <h3>Personal details</h3>
            <p>Enter your personal details</p>
          </div>


          <div >
            <div className={classes.formContainer}>
              <br />
              <form onSubmit={handleRegister} className={classes.form}>
                <div className={classes.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    onChange={handleFullName}
                    value={full_name}
                    type="name"
                    id="name"
                    name="fullName"
                    placeholder='John Doe'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    onChange={handleDate}
                    value={date_of_birth}
                    type="date"
                    name="dob"
                    id="dob"
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="school">School</label>
                  <input
                    onChange={handleSchool}
                    value={school}
                    type="text"
                    id="school"
                    name="schoolName"
                    placeholder='Olabisi Onabanjo University'
                    required
                    className={classes.inputs}
                  />
                </div>
                {/* <div className={classes.formGroup}>
                  <label htmlFor="regNum">School Registration Number</label>
                  <input
                  onChange={handleMatric}
                  value={matric_number}
                    type="text"
                    id="regNum"
                    name="RegNum"
                    placeholder='10995898HI'
                    required
                    className={classes.inputs}
                  />
                </div> */}
                <div className={classes.formGroup}>
                  <label htmlFor="matric">Matriculation Number</label>
                  <input
                    onChange={handleMatric}
                    value={matric_number}
                    type="text"
                    id="matric"
                    name="matric"
                    placeholder='SCI/22/23/999'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="username">Preferred Username</label>
                  <input
                    onChange={handleUsername}
                    value={username}
                    type="text"
                    id="username"
                    name="username"
                    placeholder='John_21'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="address">Home Address</label>
                  <textarea rows={1}
                    onChange={handleHome_address}
                    value={home_address}
                    type="address"
                    id="address"
                    name="address"
                    placeholder='Lekki, Phase 1, 2 Onikolo street'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="course">Course</label>
                  <input
                    onChange={handleCourse}
                    value={course}
                    type="text"
                    id="course"
                    name="course"
                    placeholder='Computer Science'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="dept">Department</label>
                  <input
                    onChange={handleDept}
                    value={department}
                    type="text"
                    id="dept"
                    name="dept"
                    placeholder='Computer Science'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    onChange={handlePhone}
                    value={phone_number}
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder='08147645851'
                    required
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="socials">Socials</label>
                  <textarea
                    onChange={handleSocials}
                    value={socials}
                    required
                    id="socials"
                    name="socials"
                    placeholder='Paste link to any of your social media account'
                    className={classes.inputs}
                  />
                </div>
                <div className={classes.newDiv}>
                  <button
                    disabled={loading}
                    className={`btn btn-success ${classes.btn} disabled:opacity-[0.5]`}
                    style={{ textAlign: "center", border: 0 }}
                    type='submit'
                  >
                    {loading ? "Loading..." : 'Next'}
                  </button>
                </div>
              </form>
            </div>
            <br />
          </div>


        </div>
      </div>
    </div>
  );
}
export default RegisPagePass;
