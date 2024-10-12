import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './login.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from './newlogo.svg';
import photoImg from './darkSunset3.jpg';
import { RiUser3Line } from "react-icons/ri";

// Starfield Component
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

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => { navigate('/dashboard'); };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const leftSlideIn = {
        hidden: { opacity: 0, x: 200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.4 }
        }
    };

    const rightSlideIn = {
        hidden: { opacity: 0, x: -200 },
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
            style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
        >
            {/* Starfield background */}
            <Starfield />

            <motion.div
                className="login-container"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div className="signup-container2">
                    <motion.div
                        className="signup-form"
                        variants={leftSlideIn}
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

                    <motion.div className="signup-illustration" variants={rightSlideIn}>
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
