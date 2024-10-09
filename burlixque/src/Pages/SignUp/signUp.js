// LoginPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './signUp.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from './newlogo.svg';
import photoImg from './darkSunset3.jpg';
import { CiMail } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";

function SignUpPage() {

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [selectedRole, setSelectedRole] = useState('passenger');
    const navigate = useNavigate();       

    const togglePasswordVisibility = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePassword2Visibility = () => {
        setShowPassword2(!showPassword2);
    };

    const handleRoleChange = (role) => {
        setSelectedRole(role);
    };

    const handleNext = (e) => {
        e.preventDefault();  // Prevent form from submitting
        if (selectedRole === 'organizer') {
            navigate('/register/transport_organizer');
        } else {
            navigate('/register/passenger');
        }
    };

    // Define a common animation for all items (images, text, inputs, etc.)
    const leftSlideIn = {
        hidden: { opacity: 0, x: 200 }, // Start off-screen (right)
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.4 }
        }
    };

    const rightSlideIn = {
        hidden: { opacity: 0, x: -200 }, // Start off-screen (left)
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.9 }
        }
    };

    return (
        <motion.div
            className="login-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
        >
            <motion.div
                className="login-container"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}  // Stagger the appearance of the form fields
            >
                <motion.div className="signup-container22">
                    <motion.div
                        className="signup-forms"
                        variants={rightSlideIn}  // Apply the animation to this block
                    >
                        <motion.div className="headertop" variants={rightSlideIn} >
                            <motion.div className='imgaeflex' variants={rightSlideIn} >
                                <motion.img
                                    src={logo}
                                    alt="Pela Design"
                                    className="logo"
                                    variants={rightSlideIn} 
                                />
                                <motion.p className='burlixtype' variants={rightSlideIn}>Burlixque</motion.p>
                            </motion.div>
                            <motion.h2 className='h222' variants={rightSlideIn}>GET STARTED</motion.h2>
                            <motion.p className='atypeshii' variants={rightSlideIn}>
                                Already have an account? <a  style={{color:'#ffffff'}} href="/">Log In</a>
                            </motion.p>
                        </motion.div>


                        <form action=''>
                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="name">Full Name</motion.label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    required
                                />
                                {/* <motion.img src={name} alt='' variants={rightSlideIn} /> */}
                                <p className='imgRep22'><RiUser3Line /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="email">Email</motion.label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                                {/* <motion.img src={name} alt='' variants={rightSlideIn} /> */}
                                <p className='imgRep22'><CiMail /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="password1">Password</motion.label>
                                <motion.input
                                    type={showPassword1 ? 'text' : 'password'}
                                    id="password1"
                                    placeholder="Enter your password"
                                    required
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword1 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="password">Confirm Password</motion.label>
                                <motion.input
                                    type={showPassword2 ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePassword2Visibility}
                                >
                                    {showPassword2 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.div className="role-toggle-container">
                                <motion.label  variants={rightSlideIn} className={`role-toggle ${selectedRole === 'passenger' ? 'selected' : ''}`} onClick={() => handleRoleChange('passenger')}>
                                    Student Passenger
                                </motion.label>
                                <motion.label  variants={rightSlideIn} className={`role-toggle ${selectedRole === 'organizer' ? 'selected' : ''}`} onClick={() => handleRoleChange('organizer')}>
                                    Transport Organizer
                                </motion.label>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="signup-btn"
                                onClick={handleNext}
                                variants={rightSlideIn}
                            >
                                Sign Up
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div className="signup-illustration" variants={leftSlideIn}>
                        <motion.img src={photoImg} alt="Illustration" variants={leftSlideIn} />
                        <motion.div className='disvting'>
                            <div className='replaceSpan'>
                                <motion.p className='fonstSiveGroup'>SMARTEST </motion.p>
                                <motion.p>WAY</motion.p>
                            </div>

                            <div className='replaceSpan' style={{ marginLeft: '50px' }}>
                                <motion.p> TO
                                </motion.p><motion.p className='fonstSiveGroup'>MOVE</motion.p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '13%', fontWeight: 900 }}>Burli<span style={{ color: '#4A00E0', fontSize: 70, marginTop: 30, }}>X</span>que</p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div >
    );
}

export default SignUpPage;
