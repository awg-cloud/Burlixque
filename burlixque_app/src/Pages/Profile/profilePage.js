import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import pfp from '../../Assets/pfp.png';
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../authContext";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(pfp);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
      alert("Failed to fetch the token from storage");
      navigate("/login"); // Redirect to signin if there's an error reading the token
    }
  };

  useEffect(() => {
    readData();
  });

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [bankDetails, setBankDetails] = useState({});

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const user = await Promise.all([
          fetchUserDetails(bearer),
          // fetchBankDetails(bearer),
        ]);

        setUserDetails(user);
        // setBankDetails(user);
      } catch (err) {
        console.error(err);
        setError("Error fetching data.");
        // navigate('/signin')
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  });

  const fetchUserDetails = async () => {
    const response = await axios.get("https://burlixque.onrender.com/users/profile", {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${bearer}`,
      },
    });
    return response.data;
  };

  const fetchBankDetails = async () => {
    const response = await axios.get(
      "https://burlixque.onrender.com/users/bankdetails", {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${bearer}`,
        },
      }
    );
    return response.data;
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Check if it's a valid image type (jpeg, png, jpg, gif)
      const validImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      if (validImageTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfile(reader.result); // This is for showing the image preview
        };
        reader.readAsDataURL(file);

        // Store the file itself in userDetails to send to API
        setUserDetails((prev) => ({
          ...prev,
          imageFile: file, // Store the file for future API usage
        }));
      } else {
        alert("Please upload a valid image (jpeg, png, jpg, gif)");
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRide(null);
  };

  const openModal = (ride) => {
    setSelectedRide(ride);
    setIsModalOpen(true);
  };

  const ridesData = [
    {
      from: 'Lagos',
      to: 'Illorin',
      date: '11-08-2024',
      time: '11:00 AM',
      organizerName: 'John Doe',
      organizerPhone: '08012345678',
      vehicleType: 'SUV',
      price: '₦5000',
      pickUpTime: '10:30 AM',
      totalTime: '4 hours',
    },
    {
      from: 'Ibadan',
      to: 'Osogbo',
      date: '24-08-2024',
      time: '01:00 PM',
      organizerName: 'Jane Smith',
      organizerPhone: '08087654321',
      vehicleType: 'Sedan',
      price: '₦4000',
      pickUpTime: '01:30 PM',
      totalTime: '3.5 hours',
    },
  ];


  return (
    <div className={styles.profileContainer}>
      {loading ? (
        <p style={{ color: 'white' }}>Loading user details...</p>
      ) : error ? (
        <p style={{ color: 'white' }}>{error}</p>
      ) : (
        <>
          <div className={styles.profileCard}>
            <div className={styles.header}>
              <div className={styles.flexImg}>
                <img
                  src={userDetails.imageFile ? URL.createObjectURL(userDetails.imageFile) : profile}
                  alt="Profile"
                  className={styles.profileImage}
                />
                <div className={styles.uploadImg}>
                  <p>Change Photo</p>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/jpeg, image/png, image/jpg, image/gif"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  /> <button type="button" onClick={() => document.getElementById("fileInput").click()}>
                    Upload Image
                  </button>
                </div>
              </div>

            </div>

            <div className={styles.buttons}>
              <button onClick={handleEditClick} className={styles.shareButton}>
                {isEditing ? "Save" : "Edit"}
              </button>
              <button className={styles.shareButton}>Share Profile</button>
            </div>

            <div className={styles.associatedPeople}>
              <div className={styles.profileDetails}>
                {isEditing ? (
                  <>
                    <label htmlFor="fullName" >Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={userDetails?.full_name}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    {/* <label htmlFor="user" >User Type</label>
                <select
                  id="user"
                  name="user"
                  value={userDetails.user}
                  onChange={handleChange}
                  className={styles.editInput}
                >
                  <option value="Transport Organizer">Transport Organizer</option>
                  <option value="Student Passenger">Student Passenger</option>
                </select> */}
                    <label htmlFor="fullName" >Matric Number</label>
                    <input
                      type="text"
                      name="matricNumber"
                      value={userDetails?.matric_number}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    <label htmlFor="fullName" >Email</label>
                    <input
                      type="text"
                      name="email"
                      value={userDetails?.email}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    <label htmlFor="fullName" >Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={userDetails?.phone_number}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    <label htmlFor="fullName" >Username</label>
                    <input
                      type="text"
                      name="username"
                      value={userDetails?.username}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    <label htmlFor="fullName" >School</label>
                    <input
                      type="text"
                      name="school"
                      value={userDetails?.school}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    <label htmlFor="fullName" >Home Address</label>
                    <input
                      type="text"
                      name="address"
                      value={userDetails?.home_address}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                    <label htmlFor="fullName" >Date of Birth</label>
                    <input
                      type="text"
                      name="address"
                      value={userDetails?.date_of_birth}
                      onChange={handleChange}
                      className={styles.editInput}
                    />
                  </>
                ) : (
                  <>

                    <h2>{userDetails?.fullName}</h2>
                    {/* <p>User type: <span> {userDetails.user}</span></p> */}
                    <p>Matric / Reg num: <span> {userDetails?.matric_number} </span></p>
                    <p>Email: <span> {userDetails?.email} </span></p>
                    <p>Phone: <span> {userDetails?.phone_number}</span></p>
                    <p>Username: <span> @{userDetails?.username}</span></p>
                    <p>School: <span> {userDetails?.school}</span></p>
                    <p>Address: <span> {userDetails?.home_address}</span></p>
                    <p>Date of Birth: <span> {userDetails?.date_of_birth}</span></p>

                  </>
                )}

              </div>
            </div>

            <div className={styles.recentRidesGroup}>
              <div className={styles.recentRides}>
                <h5>Recent Rides</h5>
                <button>View All</button>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.ridesTableers}>
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {ridesData.map((ride, index) => (
                      <tr key={index}>
                        <td>{ride.from}</td>
                        <td>{ride.to}</td>
                        <td>{ride.date}</td>
                        <td>{ride.time}</td>
                        <td
                          title="View details"
                          style={{ cursor: 'pointer' }}
                          onClick={() => openModal(ride)}
                        >
                          ...
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedRide && (
              <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                overlayClassName={styles.modalOverlay}
                className={styles.modalContent}
              >
                <h2 className={styles.modalContenth2}>Ride Details</h2>
                <p onClick={handleCloseModal} className={styles.absolutePP11}>X</p>
                <p><strong>From:</strong> {selectedRide.from}</p>
                <p><strong>To:</strong> {selectedRide.to}</p>
                <p><strong>Date:</strong> {selectedRide.date}</p>
                <p><strong>Time:</strong> {selectedRide.time}</p>
                <p><strong>Organizer Name:</strong> {selectedRide.organizerName}</p>
                <p><strong>Organizer Phone:</strong> {selectedRide.organizerPhone}</p>
                <p><strong>Vehicle Type:</strong> {selectedRide.vehicleType}</p>
                <p><strong>Price:</strong> {selectedRide.price}</p>
                <p><strong>Pick Up Time:</strong> {selectedRide.pickUpTime}</p>
                <p><strong>Total Journey Time:</strong> {selectedRide.totalTime}</p>

              </Modal>
            )}
          </div>
        </>)}
    </div>
  );
};

export default ProfilePage;
