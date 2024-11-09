import React from 'react';
import styles from './available.module.css';
import { useNavigate } from 'react-router-dom';

const CheckAvailableRides = () => {
  const navigate = useNavigate();

  const handleBookNow = (ride) => {
    navigate('/payment', { state: { ride } });
  };

  const rides = [
    { name: 'John Doe', vehicle: 'Sedan', price: 4000, seats: 3, destination: 'Abeokuta', from: 'Ibadan', date: '3rd, Nov', time: '10:00 AM' },
    { name: 'James Murray', vehicle: 'Corolla', price: 5000, seats: 4, destination: 'Sango Ota', from: 'Ibadan', date: '4th, Nov', time: '11:00 AM' },
    { name: 'Daniel Jane', vehicle: 'Sienna', price: 10000, seats: 3, destination: 'Illorin', from: 'Abeokuta', date: '4th, Nov', time: '03:00 PM' },
    { name: 'James Cici', vehicle: 'Coaster', price: 7000, seats: 7, destination: 'Lagos', from: 'Port Harcort', date: '4th, Nov', time: '09:00 AM' },
    
  ];

  return (
    <div className={styles.containerers}>
      <header className={styles.headerers}>
        <h1>Check Available Rides</h1>
        <button className={styles.downloadButton} onClick={() => navigate(-1)}>Home</button>
      </header>
      <div className={styles.bottomHeaders}>
        <p>Available Rides: {rides.length}</p>
        <button>View All</button>
        <input type="search" placeholder="Search" />
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
            {rides.map((ride, index) => (
              <tr key={index}>
                <td>{ride.name}</td>
                <td>{ride.vehicle}</td>
                <td>₦{ride.price}</td>
                <td>{ride.seats}</td>
                <td>{ride.destination}</td>
                <td>{ride.from}</td>
                <td>{ride.date}</td>
                <td>{ride.time}</td>
                <td>
                  <button
                    className={styles.bookNow}
                    onClick={() => handleBookNow(ride)}
                  >
                    Book Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckAvailableRides;
