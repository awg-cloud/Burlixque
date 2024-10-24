import React from 'react';
import styles from './available.module.css';
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CheckAvailableRides = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.containerers}>
      <header className={styles.headerers}>
        <h1>Check Available Rides</h1>
        <button className={styles.downloadButton} onClick={() => navigate(-1)}>Home</button>
      </header>
      <div className={styles.bottomHeaders}>
      <p>Available Rides: 42</p>
      <button>View All</button>
      <input type='search' placeholder='Search' />
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.ridesTables}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Destination</th>
              <th>From</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Sedan</td>
              <td>₦3000</td>
              <td>3</td>
              <td>Abeokuta</td>
              <td>Ibadan</td>
              <td>3rd, Nov</td>
              <td>10:00 AM</td>
              <td><button className={styles.bookNow}>Book Now</button></td>
            </tr>
            <tr>
              <td>James Murray</td>
              <td>Corrolla</td>
              <td>₦5000</td>
              <td>7</td>
              <td>Sango Ota</td>
              <td>Ibadan</td>
              <td>4th, Nov</td>
              <td>11:00 AM</td>
              <td><button className={styles.bookNow}>Book Now</button></td>
            </tr>
            <tr>
              <td>Ali Tyson</td>
              <td>Coaster Bus</td>
              <td>₦2500</td>
              <td>9</td>
              <td>Lagos</td>
              <td>Illorin</td>
              <td>4th, Nov</td>
              <td>2:00 PM</td>
              <td><button className={styles.bookNow}>Book Now</button></td>
            </tr>
            <tr>
              <td>Daniel Jane</td>
              <td>Sienna</td>
              <td>₦5000</td>
              <td>2</td>
              <td>Lagos</td>
              <td>Osogbo</td>
              <td>4th, Nov</td>
              <td>11:00 AM</td>
              <td><button className={styles.bookNow}>Book Now</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckAvailableRides;
