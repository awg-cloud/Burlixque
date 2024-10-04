import React from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
import SidebarOrg from '../SideBar/SideBar';
import classes from './regisPageCheckout.module.css'

function RegisPageCheckout() {
  return (
    <div className={classes.container}>
      <SidebarOrg />
      <div className={classes.contentSpace}>
        <div className={classes.heading}>
          <h3>Checkout Stage</h3>
          {/* <p>Enter your personal details</p> */}
        </div>


        <h5>Total Cost</h5>
        <p> #3000 </p>

        <div className={classes.formGroupCenter}>
                <label htmlFor="Name">Payment Type</label>
                <select
                  className={classes.inputsCenter}
                >
                  <option>Transfer</option>
                  <option>Pay with Card</option>
                </select>
              </div>
        <div className={classes.newDivCentre}>
          <button
            className={`btn btn-success ${classes.btnCenter}`}
            style={{ textAlign: "center", border: 0  }}
          >
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegisPageCheckout;
