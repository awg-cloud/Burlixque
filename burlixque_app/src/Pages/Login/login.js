import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import './login.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import logo from './newlogo.svg';
import { Link } from 'react-router-dom';
// import photoImg from './darkSunset3.jpg';
import { RiUser3Line } from "react-icons/ri";
// import Car3D from './Car3d';
import Earth3D from './RealEarth';
import { AuthContext } from '../authContext';
// import EarthCanvas from './Earth';

// Starfield Component
const Starfield = () => {
    useEffect(() => {
        const initializeStars = () => {
            const svg = document.getElementById("starfield");
            if (!svg) return;

            const width = window.innerWidth;
            const height = window.innerHeight;
            const numStars = Math.floor((width * height) / 4000);

            svg.innerHTML = '';

            function random(min, max) {
                return Math.random() * (max - min) + min;
            }

            function createStar() {
                const cx = random(0, width);
                const cy = random(0, height);
                const r = random(0.6, 1.5); // Increase size for glow effect

                const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                star.setAttribute("cx", cx);
                star.setAttribute("cy", cy);
                star.setAttribute("r", r);
                star.setAttribute("fill", "white"); // Set the star color
                star.setAttribute("opacity", random(0.6, 1)); // Vary brightness
                star.setAttribute("filter", "url(#glowFilter)"); // Apply glow effect
                svg.appendChild(star);

                return star;
            }

            function animateStar(star) {
                let xPos = parseFloat(star.getAttribute("cx"));
                let yPos = parseFloat(star.getAttribute("cy"));
                const speedX = random(-0.3, 0.6);
                const speedY = random(-0.4, 0.2);

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
        };

        initializeStars();

        const handleResize = () => {
            initializeStars();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            const svg = document.getElementById("starfield");
            if (svg) svg.innerHTML = '';
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <svg id="starfield" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} preserveAspectRatio="none">
            <defs>
                <filter id="glowFilter">
                    <feGaussianBlur stdDeviation="6" result="blurred"/>
                    <feColorMatrix 
                        type="matrix"
                        values="1 0 0 0  0
                                0 1 0 0  0
                                0 0 1 0  0
                                0 0 0 3  0" />
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
        </svg>
    );
};

function LoginPage() {
    const { setEmail, email, password, setPassword, LoginAction, loading, errEmail, setErrEmail, errPassword, setErrPassword } = useContext(AuthContext);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const success = await LoginAction();
        if (success) {
            // Check if it's the user's first login
            const isFirstLogin = localStorage.getItem("firstLogin") === null;
    
            if (isFirstLogin) {
                localStorage.setItem("firstLogin", "false"); // Mark that the user has logged in before
                navigate('/register/passenger'); // Redirect to passenger registration
            } else {
                navigate('/new_dashboard'); // Redirect to the dashboard for returning users
            }
        }
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const success = await LoginAction();
            if (success) {
                navigate('/new_dashboard');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const leftSlideIn = {
        hidden: { opacity: 0, x: +400 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2 }
        }
    };

    const rightSlideIn = {
        hidden: { opacity: 0, x: -400 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2 }
        }
    };

    return (
        <motion.div
            className="login-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            style={{
                position: 'relative',
                height: '100vh',
                overflow: 'hidden',
                backgroundImage: `url(${require('../../Assets/bg.png')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
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
                                Don't have an account? <Link to='/sign_up'><span style={{ color: '#ffffff' }}>Sign up</span> </Link>
                            </motion.p>
                        </motion.div>

                        <form onSubmit={handleSignIn} action=''>
                            <motion.div className="inputGroupDiv" variants={leftSlideIn}>
                                <motion.label htmlFor="email" variants={leftSlideIn}>Email</motion.label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    variants={leftSlideIn}
                                    onChange={handleEmail} // Updates state with user input
                                    value={email} // Reflects state in the input field
                                    onKeyDown={handleKeyDown}
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
                                    onChange={handlePassword}
                                    value={password}
                                    onKeyDown={handleKeyDown}
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
                                variants={leftSlideIn}
                                disabled={loading}
                            >
                                {loading ? 'Pls wait...' : 'Sign In'}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* <motion.div className="signup-illustration" variants={rightSlideIn}>
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
                    </motion.div> */}
                    <motion.div className="car-3d-section" variants={rightSlideIn}>
                        {/* <Car3D variants={rightSlideIn}/> */}
                        <Earth3D variants={rightSlideIn} />
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default LoginPage;
