// LoginPage.js
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

    const handleNext = () => { navigate('/'); };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                <motion.div className="signup-container2">
                    <motion.div
                        className="signup-form"
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
                            <motion.h2 variants={itemVariants}>WELCOME BACK</motion.h2>
                            <motion.p variants={itemVariants}>
                                Don't have an account? <a href="/sign_up">Sign up</a>
                            </motion.p>
                        </motion.div>

                        <form action=''>
                            <motion.div className="inputGroupDiv" variants={itemVariants}>
                                <motion.label htmlFor="email" variants={itemVariants}>Email</motion.label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    variants={itemVariants}
                                />
                                 <p className='imgRep22'><RiUser3Line /></p>
                            </motion.div>

                            <motion.div className="inputGroupDiv" variants={itemVariants}>
                                <motion.label htmlFor="password" variants={itemVariants}>Password</motion.label>
                                <motion.input
                                    type={showPassword ? 'text' : 'password'}
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
                                    {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className="signup-btn"
                                onClick={handleNext}
                                variants={itemVariants}
                            >
                                Log In
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

                            <div className='replaceSpan' style={{marginLeft: '50px' }}>
                                <motion.p> to
                                </motion.p><motion.p className='fonstSiveGroup'>Move</motion.p>
                            </div>
                            <p style={{textAlign: 'center', marginTop: '10%', fontWeight: 700}}>Burli<span style={{color: '#4A00E0', fontSize: 70, marginTop: 30, }}>x</span>que</p>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default LoginPage;
