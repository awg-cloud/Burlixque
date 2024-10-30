import React, { useState, useEffect } from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
// import SidebarOrg from '../SideBar/SideBar';
import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import classes from './regisPagePreference.module.css'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

function RegisPagePreference() {

  const [bank, setBank] = useState(null); // Updated to handle selected bank option
  const [banksList, setBanksList] = useState([]); // List of banks

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/register/passenger_checkout');
  }


    const fetchBanks = async () => {
      const banks = [
        { label: 'Access Bank', value: 'access_bank' },
        { label: 'Zenith Bank', value: 'zenith_bank' },
        { label: 'GTBank', value: 'gtbank' },
        // { label: 'First Bank', value: 'first_bank' },
        { label: 'Citibank Nigeria Limited ', value: 'citibank_nigeria_limited' },
        { label: 'Ecobank Nigeria Plc', value: 'ecobank_nigeria_plc' },
        { label: 'Fidelity Bank Plc', value: 'fidelity_bank_plc' },
        { label: 'First Bank Nigeria Limited', value: 'first_bank' },
        { label: 'First City Monument Bank Plc', value: 'first_city_monument_bank_plc' },
        { label: 'Globus Bank Limited', value: 'globus_bank_limited' },
        { label: 'Guaranty Trust Bank Plc', value: 'guaranty_trust_bank_plc' },
        { label: 'Heritage Banking Company Ltd', value: 'heritage_banking' },
        { label: 'Keystone Bank Limited', value: 'keystone_bank_limited' },
        { label: 'Nova Commercial Bank Limited', value: 'nova_commercial_bank' },
        { label: 'Optimus Bank', value: 'optimus_bank' },
        { label: 'Parallex Bank Ltd', value: 'parallex_bank_ltd' },
        { label: 'Polaris Bank Plc', value: 'polaris_bank_plc' },
        { label: 'Premium Trust Bank', value: 'premium_trust_bank' },
        { label: 'Providus Bank', value: 'providus_bank' },
        { label: 'Signature Bank Limited', value: 'signature_bank_limited' },
        { label: 'Stanbic IBTC Bank Plc', value: 'stanbic_ibtc_bank_plc' },
        { label: 'Standard Chartered Bank Nigeria Ltd', value: 'standard_chartered_bank' },
        { label: 'Sterling Bank Plc', value: 'sterling_bank_plc' },
        { label: 'SunTrust Bank Nigeria Limited', value: 'suntrust_bank' },
        { label: 'Titan Trust Bank Ltd', value: 'titan_trust_bank' },
        { label: 'Union Bank of Nigeria Plc', value: 'union_bank' },
        { label: 'United Bank For Africa Plc', value: 'uba' },
        { label: 'Unity Bank Plc', value: 'unity_bank' },
        { label: 'Wema Bank Plc', value: 'wema_bank' },
        { label: 'Zenith Bank Plc', value: 'zenith_bank' }
        // Add more banks or fetch them from an external API
      ];
      setBanksList(banks);
    };

    useEffect(() => {
      fetchBanks(); // Fetch banks when the component loads
    }, []);

  // const data = {
  //   account_number: acctNumber,
  //   bank_name: bank?.label,
  //   account_name: acctName,
  // };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',    
      height: '43px',          
      width: '100%',
      border: '0.2px solid gray',
      borderRadius: '8px',
      padding: '0',
      boxSizing: 'border-box', 
      fontSize: '14px',
      cursor: 'pointer',
      textAlign: 'left'
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
      alignSelf: 'center',     
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 15px',      
      height: '100%',     
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: '0',            
      padding: '0',         
    }),
    placeholder: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
      lineHeight: 'normal',
    }),
  };


  return (
    <div className={classes.container}>
      <SidebarPass />
      <div className={classes.contentSpace}>
        <div className={classes.newDivCntS}>
          <div className={classes.heading}>
            <h3>Bank Details</h3>
            <p>Enter your bank details</p>
          </div>


          <div >
            <div className={classes.formContainer}>
              <br />
              <form className={classes.form}>

                <div className={classes.formGroup}>
                  <label htmlFor="bank">Select Bank</label>
                  <Select
                    id="bank"
                    options={banksList}
                    value={bank}
                    onChange={(selectedOption) => setBank(selectedOption)}
                    placeholder="Select a bank"
                    styles={customStyles}
                  // className={classes.inputs}
                  />
                </div>
                <div className={classes.formGroup}>
                  <label htmlFor="acct">Account Number</label>
                  <input className={classes.inputs} type='text' id='acct' placeholder='8147645851'/>
                </div>

                <div className={classes.formGroup}>
                  <label htmlFor="Name">Account Name</label>
                  <input className={classes.inputs} type='text' id='name' placeholder='John Doe'/>
                </div>

              </form>
            </div>
            <br />
          </div>

          <div className={classes.newDiv}>
            <button
              className={`btn btn-success ${classes.btn}`}
              style={{ textAlign: "center", border: 0 }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisPagePreference;
