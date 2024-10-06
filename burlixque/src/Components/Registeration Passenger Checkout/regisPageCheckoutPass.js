import React from 'react';
import styles from './regisPageCheckoutPass.module.css';
// import SidebarOrg from '../SideBar/SideBar';
import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import card from '../../Assets/card.jpg'
import { useNavigate } from 'react-router-dom';

const RegisPageCheckoutPass = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/welcome_transport');
  } 
  return (
    <div  className={styles.container}>
      <SidebarPass />
    <div className={styles.paymentContainer}>
      <div className={styles.paymentDetails}>
        <h2 className={styles.title}>Payment details</h2>
        <form>
          <div className={styles.inputGroupings}>
            <label>Email address</label>
            <input type="email" placeholder="vlockn@gmail.com" />
          </div>
          
          <div className={styles.inputGroupings}>
            <label>Credit Card Number</label>
            <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
          </div>

          <div className={styles.cardDetails}>
            <div className={styles.inputGroupings}>
              <label>Expiry Date</label>
              <input type="text" placeholder="mm / yy" />
            </div>
            <div className={styles.inputGroupings}>
              <label>CVV</label>
              <input type="text" placeholder="xxx" />
            </div>
          </div>

          {/* <div className={styles.promoCode}>
            <input type="checkbox" id="promo" />
            <label htmlFor="promo">I’ve a promo code</label>
          </div> */}

          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>₦4000</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Additional Fee</span>
              <span>₦0.00</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total Amount</span>
              <span>₦4000</span>
            </div>
          </div>

          <button onClick={handleNext} className={styles.paymentButton}>Make payment</button>
        </form>
      </div>

      <div className={styles.subscriptionDetails}>
        <div className={styles.planInfo}>
          <p className={styles.planText}>Subscribe and start saving your money today!</p>
          <div className={styles.planDetails}>
            <div className={styles.planIcon}>
              {/* Placeholder for plan icon */}
              <img src={card} alt="Plan Icon" />
            </div>
            <div className={styles.planCost}>
              <h3>Monthly Plan</h3>
              <p>₦4000 / month</p>
            </div>
          </div>
          {/* <ul className={styles.features}>
            <li>All features in basic included</li>
            <li>Easy and flexible business with invoice management</li>
            <li>Full time support</li>
            <li>20 TB cloud storage</li>
          </ul> */}
          <a href="/register/transport_vehicle" className={styles.modifyPlan}>Modify plan</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegisPageCheckoutPass;
