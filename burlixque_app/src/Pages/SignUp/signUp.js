import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './signUp.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './newlogo.svg';
import { CiMail } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
// import Car3D from './Car3d';
import Earth3D from '../SignUp/RealEarth';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Starfield Effect (Unchanged)
const Starfield = () => {
    useEffect(() => {
        const initializeStars = () => {
            const svg = document.getElementById("starfield");

            // If svg is not available, exit the function early
            if (!svg) return;

            const width = window.innerWidth;
            const height = window.innerHeight;
            const numStars = Math.floor((width * height) / 4000); // Adjust density as desired

            svg.innerHTML = ''; // Clear existing stars

            function random(min, max) {
                return Math.random() * (max - min) + min;
            }

            function createStar() {
                const cx = random(0, width);
                const cy = random(0, height);
                const r = random(0.3, 0.9);

                const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                star.setAttribute("cx", cx);
                star.setAttribute("cy", cy);
                star.setAttribute("r", r);
                star.setAttribute("fill", "#ffffff");
                svg.appendChild(star);
                return star;
            }

            function animateStar(star) {
                let xPos = parseFloat(star.getAttribute("cx"));
                let yPos = parseFloat(star.getAttribute("cy"));
                const speedX = random(-0.94, 0.78);
                const speedY = random(-0.06, 0.58);

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

        // Initialize stars when component mounts
        initializeStars();

        // Re-initialize stars on resize
        const handleResize = () => {
            initializeStars();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            const svg = document.getElementById("starfield");
            if (svg) svg.innerHTML = ''; // Clean up on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <svg id="starfield" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} preserveAspectRatio="none"></svg>
    );
};

function SignUpPage() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);  // Control the modal state
    const [selectedRole, setSelectedRole] = useState(null);  // Role selection
    const [clickable, setClickable] = useState(false);
    const navigate = useNavigate();
    const [password1, setPassword1] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [errPass, setErPass] = useState('')

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

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        validatePasswords(e.target.value, password1);
    };
    
    const handlePassword1 = (e) => {
        setPassword1(e.target.value);
        validatePasswords(password, e.target.value);
    };

    const validatePasswords = (pass, confirmPass) => {
        if (pass !== confirmPass) {
            setErPass('Passwords do not match.');
        } else {
            setErPass('');
        }
    };

    const EmailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };

    const togglePasswordVisibility = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePassword2Visibility = () => {
        setShowPassword2(!showPassword2);
    };

    // Handle opening the modal when "Sign Up" is clicked
    const handleSignUp = async (e) => {
        e.preventDefault();
        const confirm_password = password1
        if (
            email &&
            EmailValidation(email) &&
            password1 &&
            password &&
            password.length >= 6
        ) {
            try {
                setLoading(true);
                const response = await fetch("https://burlixque.onrender.com/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        confirm_password
                    }),
                });

                const data = await response.json();
                console.log(data);

                if (response.status === 201) {
                    console.log(response)
                    toast.success("Sign up Successfull")
                    navigate('/login');
                    
                    setEmail("");
                    setPassword("");
                    setLoading(false);
                } else {
                    console.error(data.error);
                    toast.error(data.error)
                    toast.error(data)
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("Network Error. Please Check your internet connection")
                setLoading(false);
            }
        }
    };


    // Handle role selection and navigation
    const handleRoleSelection = (role) => {
        setSelectedRole(role);  // Store the selected role
        setClickable(true);
    };

    // Handle confirmation and navigate based on role
    // const handleConfirmRole = (e) => {
    //     if (selectedRole === 'organizer') {
    //         navigate('/register/transport_organizer');
    //     } else if (selectedRole === 'passenger') {
    //         navigate('/register/passenger');
    //     }
    //     setIsModalOpen(false);  // Close the modal
    // };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Close the modal
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
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div className="signup-container22">
                    <ToastContainer />
                    <motion.div
                        className="signup-forms"
                        variants={rightSlideIn}
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
                                Already have an account? <Link to='/login'><span style={{ color: '#ffffff' }}>Log In</span> </Link>
                            </motion.p>
                        </motion.div>

                        <form>
                            
                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="email">Email</motion.label>
                                <motion.input
                                    onChange={handleEmail}
                                    value={email}
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                                <p className='imgRep22'><CiMail /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="password">Password</motion.label>
                                <motion.input
                                    onChange={handlePassword}
                                    value={password}
                                    type={showPassword1 ? 'text' : 'password'}
                                    id="password"
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
                                <motion.label htmlFor="password1">Confirm Password</motion.label>
                                <motion.input
                                    onChange={handlePassword1}
                                    value={password1}
                                    type={showPassword2 ? 'text' : 'password'}
                                    id="password1"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePassword2Visibility}
                                >
                                    {showPassword2 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>
                            <p style={{color: 'red', fontSize: 13, fontFamily: 'Lobster', marginLeft: 20}}>{errPass}</p>

                            {/* Sign Up Button */}
                            <motion.button
                                type="button"
                                disabled={loading}
                                className="signup-btn"
                                onClick={handleSignUp} // Open the modal
                                variants={rightSlideIn}
                            >
                                {loading? 'Creating Account...' : 'Sign Up'}
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div className="car-3d-section" variants={leftSlideIn}>
                        {/* <Car3D variants={leftSlideIn} /> */}
                        <Earth3D variants={leftSlideIn} />
                    </motion.div>

                </motion.div>
            </motion.div>

            {/* Modal for Role Selection
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="modalContent"
                overlayClassName="modalOverlay"
            >
                <div>
                    <h2>Select Your Role</h2>
                    <div className="role-toggle-container">
                    <label
                        className={`role-toggle ${selectedRole === 'passenger' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('passenger')}
                    >
                        Student Passenger
                    </label>
                    <label
                        className={`role-toggle ${selectedRole === 'organizer' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('organizer')}
                    >
                        Transport Organizer
                    </label>

                    </div>
                    <div className="modal-actions">
                        <button onClick={handleConfirmRole} disabled={!clickable} className="modal-confirm-btn">
                            Confirm
                        </button>
                        <button onClick={handleCloseModal} className="modal-cancel-btn">
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal> */}

        </motion.div>
    );
}

export default SignUpPage;
