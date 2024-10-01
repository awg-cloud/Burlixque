// LoginPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './signUp.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from './Logo Img copy.png';
import name from './user.png';
import photoImg from './darkSunset3.jpg';

function SignUpPage() {

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
                <motion.div className="signup-container22">
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
                            <motion.h2 variants={itemVariants}>GET STARTED</motion.h2>
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
                                <motion.img src={name} alt='' variants={itemVariants} />
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
                                <motion.img src={name} alt='' variants={itemVariants} />
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={itemVariants}>
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
                            
                            <motion.div className="inputGroupDivSign" variants={itemVariants}>
                                <motion.label htmlFor="password" variants={itemVariants}>Confirm Password</motion.label>
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
                                Sign Up
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div className="signup-illustration" variants={itemVariants}>
                        <motion.img src={photoImg} alt="Illustration" variants={itemVariants} />
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default SignUpPage;
