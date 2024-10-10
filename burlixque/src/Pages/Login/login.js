import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './login.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from './newlogo.svg';
import photoImg from './darkSunset3.jpg';
import { RiUser3Line } from "react-icons/ri";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => { navigate('/dashboard'); };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Define the animations for the left and right side sliding
    const leftSlideIn = {
        hidden: { opacity: 0, x: 200 }, // Start off-screen (right)
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.4 }
        }
    };

    const rightSlideIn = {
        hidden: { opacity: 0, x: -500 }, // Start off-screen (left)
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.8 }
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
                <motion.div className="signup-container2">
                    <motion.div
                        className="signup-form"
                        variants={leftSlideIn}  // Left side slides in from the right
                    >
                        <motion.div className="headertop" variants={leftSlideIn}>
                            <motion.div className='imgaeflex' variants={leftSlideIn}>
                                <motion.img
                                    src={logo}
                                    alt="Pela Design"
                                    className="logo"
                                    variants={leftSlideIn}
                                />
                                <motion.p className='burlixtype' variants={leftSlideIn}>Burlixque</motion.p>
                            </motion.div>
                            <motion.h2 className='welcomeBack' variants={leftSlideIn}>WELCOME BACK</motion.h2>
                            <motion.p className='atypeshii' variants={leftSlideIn}>
                                Don't have an account? <a style={{color:'#ffffff'}} href="/sign_up">Sign up</a>
                            </motion.p>
                        </motion.div>

                        <form action=''>
                            <motion.div className="inputGroupDiv" variants={leftSlideIn}>
                                <motion.label htmlFor="email" variants={leftSlideIn}>Email</motion.label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    variants={leftSlideIn}
                                />
                                <p className='imgRep22'><RiUser3Line /></p>
                            </motion.div>

                            <motion.div className="inputGroupDiv" variants={leftSlideIn}>
                                <motion.label htmlFor="password" variants={leftSlideIn}>Password</motion.label>
                                <motion.input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    variants={leftSlideIn}
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePasswordVisibility}
                                    variants={leftSlideIn}
                                >
                                    {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="signup-btn"
                                onClick={handleNext}
                                variants={leftSlideIn}
                            >
                                Log In
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div className="signup-illustration" variants={rightSlideIn}> {/* Right side slides in from the left */}
                        <motion.img src={photoImg} alt="Illustration" variants={rightSlideIn} />
                        <motion.div className='disvting'>
                            <div className='replaceSpan'>
                                <motion.p className='fonstSiveGroup' variants={rightSlideIn}>SMARTEST </motion.p>
                                <motion.p variants={rightSlideIn}>WAY</motion.p>
                            </div>

                            <div className='replaceSpan' style={{ marginLeft: '50px' }}>
                                <motion.p variants={rightSlideIn}> TO </motion.p>
                                <motion.p className='fonstSiveGroup' variants={rightSlideIn}>MOVE</motion.p>
                            </div>
                            <p style={{ textAlign: 'center', marginTop: '13%', fontWeight: 990 }}>
                                BURLI<span style={{ color: '#4A00E0', fontSize: 80, marginTop: 30 }}>X</span>QUE
                            </p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default LoginPage;
