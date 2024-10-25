import React, { useState, useEffect, useRef } from 'react';
import styles from './landing.module.css'; // Using CSS modules
import { Link } from 'react-router-dom'; // Assuming you're using react-router
import heroImg from '../../Assets/OfficeWelcome.jpg';
import profile from '../../Assets/pfp.png';
import logo from '../../Assets/newlogo.svg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function LandingPage() {
    const [active, setActive] = useState('home');
    const sections = useRef({}); // To store section refs

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    // Scroll functions to scroll into view
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActive(sectionId);
    };

    // Hook for intersection observer to animate and set active section
    useEffect(() => {
        const options = {
            threshold: 0.30, // Trigger when 30% of the section is visible
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.sectionVisible);
                    setActive(sectionId); // Set active header when section is in view
                }
            });
        }, options);

        // Observe each section
        const sectionsArray = ['home', 'about', 'services', 'contact'];
        sectionsArray.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                sections.current[section] = element;
                observer.observe(element);
            }
        });

        // Cleanup observer on unmount
        return () => {
            sectionsArray.forEach(section => {
                observer.unobserve(sections.current[section]);
            });
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.landingPage}>

            <header className={styles.headerland}>
                <div className={styles.logoGroup}>
                    <img src={logo} alt="" />
                    <div className={styles.logo}>Burlixque</div>
                </div>
                <nav className={styles.navbar}>
                    <p onClick={() => scrollToSection('home')} className={`${styles.navLink} ${active === 'home' ? styles.activeP : ''}`}>Home</p>
                    <p onClick={() => scrollToSection('about')} className={`${styles.navLink} ${active === 'about' ? styles.activeP : ''}`}>About</p>
                    <p onClick={() => scrollToSection('services')} className={`${styles.navLink} ${active === 'services' ? styles.activeP : ''}`}>Services</p>
                    <p onClick={() => scrollToSection('contact')} className={`${styles.navLink} ${active === 'contact' ? styles.activeP : ''}`}>Contact</p>
                </nav>
                <div className={styles.authButtons}>
                    <Link to="/login" className={styles.loginBtn}>Login</Link>
                    <Link to="/sign_up" className={styles.signupBtn}>Sign Up</Link>
                </div>

                {/* Dropdown menu for the mobile view */}
                <div className={styles.mobile}>
                    <div className={styles.dropdown}>
                        <div className={styles.dropdownGroo}>
                            <button className={styles.dropdown_button} onClick={toggleDropdown}
                            >
                                Menu
                            </button>
                        </div>
                        {isOpen && (
                            <div className={styles.dropdown_content}>
                                <button className={`${styles.dropdown_item} ${active === 'home' ? styles.activePm : ''}`} onClick={() => scrollToSection('home')} >Home</button>
                                <button className={`${styles.dropdown_item} ${active === 'about' ? styles.activePm : ''}`} onClick={() => scrollToSection('about')} >About</button>
                                <button className={`${styles.dropdown_item} ${active === 'services' ? styles.activePm : ''}`} onClick={() => scrollToSection('services')} >Services</button>
                                <button className={`${styles.dropdown_item} ${active === 'contact' ? styles.activePm : ''}`} onClick={() => scrollToSection('contact')} >Contact</button>

                                <Link to="/login"><button className={styles.dropdown_itemLog}>Login</button></Link>
                                <Link to="/sign_up"><button className={styles.dropdown_itemLog}>Sign Up</button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>


            <section id="home" className={`${styles.heroSection} ${styles.sectionHidden}`}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Seamless Transportation</h1>
                    <p className={styles.heroSubtitle}>Book rides, share rides, and explore with ease.</p>
                    <Link to="/sign_up" className={styles.heroButton}>Get Started</Link>
                </div>
                <div className={`${styles.heroImage}`}>
                    <img src={heroImg} alt="Transport Illustration" />
                </div>
            </section>

            <section id="about" className={`${styles.aboutSection} ${styles.sectionHidden}`}>
                <div className={styles.aboutContent}>
                    <h2 className={styles.sectionTitle}>About Us</h2>
                    <div className={styles.aboutGroupthings}>
                        <img src={profile} alt="" />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                    </div>
                </div>
            </section>

            <section id="services" className={`${styles.servicesSection} ${styles.sectionHidden}`}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <div className={styles.flexServices}>
                    <div className={styles.effortless}>
                        <h6 className={styles.flexServH6}>Effortless Transport </h6>
                        <p className={styles.flexServP}>Discover a range of services designed to make your travel smooth, convenient, and reliable.</p>
                    </div>

                    <div className={` ${styles.carouselWrapper}`}>
                        <Carousel
                            showArrows={false}
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            transitionDuration={600}
                            autoPlaySpeed={8000}
                        >
                            <div className={styles.serviceCard}>
                                <h3>Carpooling</h3>
                                <p>Carpooling allows you to share a ride with other users traveling to the same or nearby destinations, reducing traffic congestion and lowering your carbon footprint. With this feature, you can either offer a ride if you have extra seats available or join a ride with others heading in the same direction. Simply input your starting point and destination in the app, and it will automatically match you with the most suitable drivers or passengers based on your preferences, route, and schedule. Carpooling is not only eco-friendly but also a great way to save on fuel costs and make your commute more sociable. You’ll receive notifications and real-time updates, helping you coordinate pick-up times and locations smoothly. Enjoy a more affordable, efficient, and social way to travel, while making a positive impact on the environment.</p>
                            </div>

                            <div className={styles.serviceCard}>
                                <h3>On-Demand Transport</h3>
                                <p>With our On-Demand Transport feature, you can book rides instantly whenever you need them. Whether you’re commuting to work, running errands, or attending an event, the app provides a quick and easy way to arrange transport. After downloading the app, all you have to do is enter your pickup location and destination. The app will automatically locate the nearest available drivers and send them your request. You can track your driver’s location in real time, view their estimated arrival time, and get notified when they are close by. This feature offers flexibility, allowing you to plan trips on the go without the need for advanced bookings. Payments are handled through the app, so there’s no need to carry cash. Just sit back, relax, and enjoy a reliable ride to your destination with minimal effort.</p>
                            </div>

                            <div className={styles.serviceCard}>
                                <h3>Ride Sharing</h3>
                                <p>Ride Sharing enables you to split the cost of transportation with other passengers who are heading in the same direction. This feature is ideal for those looking to save on commuting costs or simply reduce the environmental impact of solo car travel. To use Ride Sharing, enter your journey details in the app, and it will match you with fellow riders nearby who are traveling along a similar route. You can either request to join an existing ride or offer your vehicle if you’re driving. Once matched, you’ll receive updates on your fellow passengers, the pickup route, and estimated drop-off times. You’ll share the ride and split the cost through the app, making it an affordable and eco-friendly travel option. Plus, the app’s built-in features ensure that the entire process is secure and efficient, allowing you to connect and travel with ease.</p>
                            </div>

                            <div className={styles.serviceCard}>
                                <h3>Cashless Payments</h3>
                                <p>Our Cashless Payments feature provides a fast and secure way to pay for your rides without the hassle of handling cash. Once you’ve registered on the app, you can link your preferred payment method, such as a credit card, debit card, or mobile wallet. Each time you book a ride, the app automatically processes the payment, ensuring a seamless experience. You will receive a receipt and transaction details within the app, making it easy to track your expenses. This feature enhances your convenience by eliminating the need for physical money exchanges and reduces the potential for errors during payment. Whether you're riding solo or sharing a ride with others, your payment details remain safe and encrypted, allowing you to focus on enjoying your journey.</p>
                            </div>


                        </Carousel>
                    </div>
                </div>
            </section>

            <section id="contact" className={`${styles.contactSection} ${styles.sectionHidden}`}>
                <h2 className={styles.sectionTitle}>Contact Us</h2>
                <div className={styles.tivcontainer}>
                    <div className={styles.formSectionings}>
                        <h3 className={styles.bigh3}>Get in Touch</h3>
                        <h1>Let's Chat, Reach Out to Us</h1>
                        <p>
                            Have questions or feedback? We're here to help. Send us a message, and we'll respond
                            within 24 hours.
                        </p>
                        <form className={styles.formers}>
                            <div className={styles.inputGroupers}>
                                <div className={styles.inputFielders}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" placeholder="First name" />
                                </div>
                                <div className={styles.inputFielders}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" placeholder="Last name" />
                                </div>
                            </div>
                            <div className={styles.inputFielders}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="Email address" />
                            </div>
                            <div className={styles.inputFielders}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Leave us a message" />
                            </div>
                            <div className={styles.checkboxers}>
                                <input type="checkbox" id="privacyPolicy" />
                                <label htmlFor="privacyPolicy">
                                    I agree to our friendly <a style={{ color: 'blue' }} href="/dashboard">privacy policy</a>
                                </label>
                            </div>
                            <button type="submit" className={styles.submitButtoners}>Send Message</button>
                        </form>
                    </div>

                    <div className={styles.imageSection}>
                        <img src="https://media.istockphoto.com/id/1995370992/photo/discover-seamless-customer-support-through-a-businessman-touching-virtual-screen-icons-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=knQlbQamISORsNNZcAU_4VoFhFOd3WZL7_Rtb_h4sVo=" alt="Contact Us" />
                        <div className={styles.contactDetails}>
                            <div className={styles.contactInfo}>
                                <span className={styles.icon}>📧</span>
                                <p>Email: <a style={{ color: 'blue' }} href="mailto:techteam@kawruh.com" target='_blank' rel="noreferrer">techteam@burlixque.com</a></p>
                            </div>
                            <div className={styles.contactInfo}>
                                <span className={styles.icon}>📞</span>
                                <p>Phone:<a style={{ color: 'blue' }} href="tel: 08147645851" target='_blank' rel="noreferrer"> 08147645851 </a> </p>
                            </div>
                            <div className={styles.contactInfo}>
                                <span className={styles.icon}>🗨</span>
                                <p>Whatsapp:<a style={{ color: 'blue' }} href="https://wa.me/+2348147645851" target='_blank' rel="noreferrer"> 08133445566 </a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>© 2024 Burlixque. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
