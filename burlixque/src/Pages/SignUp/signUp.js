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
    const itemVariants = {
        hidden: { opacity: 0, scale: 0, rotate: 360, x: 0, y: 0 },  // Start small and rotated
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
            transition: { duration: 1.4 }
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
                variants={itemVariants}
                transition={{ staggerChildren: 0.2 }}  // Stagger the appearance of the form fields
            >
                <motion.div className="signup-container22">
                    <motion.div
                        className="signup-forms"
                        variants={itemVariants}  // Apply the animation to this block
                    >
                        <motion.div className="headertop" variants={itemVariants}>
                            <motion.div className='imgaeflex' variants={itemVariants}>
                                <motion.img
                                    src={logo}
                                    alt="Pela Design"
                                    className="logo"
                                    variants={itemVariants}
                                />
                                <motion.p variants={itemVariants}>Burlixque</motion.p>
                            </motion.div>
                            <motion.h2 className='h222' variants={itemVariants}>GET STARTED</motion.h2>
                            <motion.p variants={itemVariants}>
                                Already have an account? <a href="/">Log In</a>
                            </motion.p>
                        </motion.div>


                        <form action=''>
                            <motion.div className="inputGroupDivSign" variants={itemVariants}>
                                <motion.label htmlFor="email" variants={itemVariants}>Full Name</motion.label>
                                <motion.input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    required
                                    variants={itemVariants}
                                />
                                {/* <motion.img src={name} alt='' variants={itemVariants} /> */}
                                <p className='imgRep22'><RiUser3Line /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={itemVariants}>
                                <motion.label htmlFor="email" variants={itemVariants}>Email</motion.label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    variants={itemVariants}
                                />
                                {/* <motion.img src={name} alt='' variants={itemVariants} /> */}
                                <p className='imgRep22'><CiMail /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={itemVariants}>
                                <motion.label htmlFor="password" variants={itemVariants}>Password</motion.label>
                                <motion.input
                                    type={showPassword1 ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    variants={itemVariants}
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePasswordVisibility}
                                    variants={itemVariants}
                                >
                                    {showPassword1 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={itemVariants}>
                                <motion.label htmlFor="password" variants={itemVariants}>Confirm Password</motion.label>
                                <motion.input
                                    type={showPassword2 ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    variants={itemVariants}
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePassword2Visibility}
                                    variants={itemVariants}
                                >
                                    {showPassword2 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.div className="role-toggle-container">
                                <label className={`role-toggle ${selectedRole === 'passenger' ? 'selected' : ''}`} onClick={() => handleRoleChange('passenger')}>
                                    Student Passenger
                                </label>
                                <label className={`role-toggle ${selectedRole === 'organizer' ? 'selected' : ''}`} onClick={() => handleRoleChange('organizer')}>
                                    Transport Organizer
                                </label>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="signup-btn"
                                onClick={handleNext}
                                variants={itemVariants}
                            >
                                Sign Up
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div className="signup-illustration" variants={itemVariants}>
                        <motion.img src={photoImg} alt="Illustration" variants={itemVariants} />
                        <motion.div className='disvting'>
                            <div className='replaceSpan'>
                                <motion.p className='fonstSiveGroup'>Smartest </motion.p>
                                <motion.p>way</motion.p>
                            </div>

                            <div className='replaceSpan' style={{ marginLeft: '50px' }}>
                                <motion.p> to
                                </motion.p><motion.p className='fonstSiveGroup'>Move</motion.p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '10%', fontWeight: 700 }}>Burli<span style={{ color: '#4A00E0', fontSize: 70, marginTop: 30, }}>x</span>que</p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div >
    );
}

export default SignUpPage;
