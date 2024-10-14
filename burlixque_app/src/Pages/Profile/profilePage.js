import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import pfp from '../../Assets/pfp.png';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(pfp);
  const [profileInfo, setProfileInfo] = useState({
    image: {profile},
    matricNumber: "202100001",
    email: "johndoe@example.com",
    phoneNumber: "+234 123 456 7890",
    username: "John_21",
    fullName: "John Doe",
    user: "Student Passenger",
    school: "Olabisi Onabanjo University",
    address: "Lekki, Phase 1",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];  // Get the selected file
    if (file) {
      // Check if it's a valid image type (jpeg, png, jpg, gif)
      const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
      if (validImageTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfile(reader.result);  // This is for showing the image preview
        };
        reader.readAsDataURL(file);

        // Store the file itself in the 'personal' state to send it to the API
        setProfileInfo((prev) => ({
          ...prev,
          imageFile: file,  // Store the file itself (not a string or URL)
        }));
      } else {
        alert('Please upload a valid image (jpeg, png, jpg, gif)');
      }
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div className={styles.flexImg}>
            <img
              // src={pfp}
              src={profileInfo.imageFile ? URL.createObjectURL(profileInfo.imageFile) : profileInfo.image}
              alt="Profile"
              className={styles.profileImage}
            />
            <div className={styles.uploadImg}>
              <p>Change Photo</p>
              <input type="file" id="fileInput" accept="image/jpeg, image/png, image/jpg, image/gif" onChange={handleImageChange} style={{ display: 'none' }} />
              <button type="button" onClick={() => document.getElementById('fileInput').click()}>Upload Image</button>
            </div>
          </div>

        </div>

        <div className={styles.buttons}>
          <button onClick={handleEditClick} className={styles.shareButton}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button className={styles.shareButton}>Share Profile</button>
        </div>

        {/* <div className={styles.skills}>
          <h3>Skills</h3>
          <div className={styles.skillsList}>
            <span className={styles.skill}>Public Speaking</span>
            <span className={styles.skill}>Time Management</span>
            <span className={styles.skill}>Teamwork</span>
          </div>
        </div> */}

        <div className={styles.associatedPeople}>
          <div className={styles.profileDetails}>
            {isEditing ? (
              <>
                <label htmlFor="fullName" >Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={profileInfo.fullName}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="user" >User Type</label>
                <select
                  id="user"
                  name="user"
                  value={profileInfo.user}
                  onChange={handleChange}
                  className={styles.editInput}
                >
                  <option value="Transport Organizer">Transport Organizer</option>
                  <option value="Student Passenger">Student Passenger</option>
                </select>
                <label htmlFor="fullName" >Matric Number</label>
                <input
                  type="text"
                  name="matricNumber"
                  value={profileInfo.matricNumber}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Email</label>
                <input
                  type="text"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={profileInfo.phoneNumber}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Username</label>
                <input
                  type="text"
                  name="username"
                  value={profileInfo.username}
                  onChange={handleChange}
                  className={styles.editInput}
                />
              </>
            ) : (
              <>

                <h2>{profileInfo.fullName}</h2>
                <p>User type: <span> {profileInfo.user}</span></p>
                <p>Matric / Reg num: <span> {profileInfo.matricNumber} </span></p>
                <p>Email: <span> {profileInfo.email} </span></p>
                <p>Phone: <span> {profileInfo.phoneNumber}</span></p>
                <p>Username: <span> @{profileInfo.username}</span></p>

              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
