// LoginPage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './signUp.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from './newlogo.svg';
import photoImg from './darkSunset3.jpg';
import { CiMail } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";


const Starfield = () => {
    useEffect(() => {
        const svg = document.getElementById("starfield");
        const numStars = 500;
        const width = window.innerWidth;
        const height = window.innerHeight;

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        function createStar() {
            const cx = random(0, width);
            const cy = random(0, height);
            const r = random(0.5, 1.7);

            const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            star.setAttribute("cx", cx);
            star.setAttribute("cy", cy);
            star.setAttribute("r", r);
            star.setAttribute("fill", "white");
            svg.appendChild(star);
            return star;
        }


        function animateStar(star) {
            let xPos = parseFloat(star.getAttribute("cx"));
            let yPos = parseFloat(star.getAttribute("cy"));
            const speedX = random(-0.08, 0.10);
            const speedY = random(-0.09, 0.10);

            function move() {
                xPos += speedX;
                yPos += speedY;

                if (xPos < 0) xPos = width;
                if (xPos > width) xPos = 0;
                if (yPos < 0) yPos = height;
                if (yPos > height) yPos = 0;

                star.setAttribute("cx", xPos);
                star.setAttribute("cy", yPos);

                requestAnimationFrame(move);
            }
            move();
        }

        for (let i = 0; i < numStars; i++) {
            const star = createStar();
            animateStar(star);
        }

        return () => {
            svg.innerHTML = ''; // Clean up when component unmounts
        };
    }, []);

    return (
        <svg id="starfield" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} preserveAspectRatio="none"></svg>
    );
};


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
            style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
        >

            <Starfield />


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
                                Already have an account? <a style={{ color: '#ffffff' }} href="/">Log In</a>
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
                                <motion.label variants={rightSlideIn} className={`role-toggle ${selectedRole === 'passenger' ? 'selected' : ''}`} onClick={() => handleRoleChange('passenger')}>
                                    Student Passenger
                                </motion.label>
                                <motion.label variants={rightSlideIn} className={`role-toggle ${selectedRole === 'organizer' ? 'selected' : ''}`} onClick={() => handleRoleChange('organizer')}>
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
