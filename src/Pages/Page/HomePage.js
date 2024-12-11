import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomePage.css';
import Layout from '../../layout';
import SplineComponent from '../Page/SplineViewer'; // Import the Spline component
import Slider from "./Slider";

const HomePage = () => {
    const images = [
        "/Ubuntufest/Gallery/G6.webp", // Ensure these paths are correct
        "/Ubuntufest/Gallery/G7.webp",
        "/Ubuntufest/Gallery/G8.webp",
        "/Ubuntufest/Gallery/G4.webp",
        "/Ubuntufest/Gallery/G5.webp"
    ];

    useEffect(() => {

        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .zoom-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach((el) => observer.observe(el));

        // Parallax effect for hero background
        const parallaxEffect = () => {
            const scrollPosition = window.scrollY;
            const heroSection = document.querySelector('.hero-section');
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`; // Adjust the 0.5 for different speeds
        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    return (

        <Layout>

            <div className="landing-page">
                {/* Hero Section */}
                <header className="hero-section">
                    {/* Spline Component placed behind the content */}
                    <div className="spline-viewer">
                        <SplineComponent /> {/* Spline 3D Scene */}
                    </div>


                </header>

                {/* About Section */}
                <section className="about-section fade-in">
                    <h2>About Ubuntu Fest</h2>
                    <div className="aboutText">
                        The annual Fest at Patkar-Varde College - 'Ubuntu' serves as a vibrant celebration,
                        encompassing a myriad of activities and opportunities for students to showcase their unique talents and abilities.
                        More than just a fest, it stands as a cornerstone in the holistic development of students, offering a respite from the usual academic routine and evaluations.

                        This fest isn’t merely about entertainment; it's a platform for students to immerse themselves in various activities that foster personal growth.
                        It focuses on enhancing students' personalities, nurturing teamwork abilities, stimulating creativity, refining communication skills, and honing management expertise.
                    </div>
                </section>

                {/* Event Highlights Section */}
                <section className="highlights-section">
                    <h2 className="slide-in-left">Event Highlights</h2>
                    <div className="highlights-container">
                        <div className="highlight-card zoom-in">
                            <h3>Suron ki Mehfil (Singing)</h3>
                            <p>Solo and Group performances. A must-attend for music lovers!</p>
                        </div>
                        <div className="highlight-card zoom-in">
                            <h3>Dance Battle</h3>
                            <p>Watch electrifying dance battles that will leave you amazed.</p>
                        </div>
                        <div className="highlight-card zoom-in">
                            <h3>Art and Craft</h3>
                            <p>Unleash your creativity in our interactive art workshops.</p>
                        </div>
                    </div>
                </section>
                <section>

                    <div className="gallery-page">
                        <h2>Gallery</h2>

                        <div className="gallery-container">
                            {/* Pass the images array as a prop to the Slider component */}
                            <Slider images={images} />
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="faq-section slide-in-left">
                    <h2>FAQs</h2>
                    <div className="faq-container">
                        <div className="faq-item">
                            <h3>How can I register?</h3>
                            <p>For event registrations, we have separate Google Forms for in-house and out-house participants:</p>
                            <ul>
                                <li>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSf2UwLfpKh5b2l5SRALUTkaYUYR7sBxI0ntcgYii9Y_iwUfpA/viewform?usp=sf_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        In-House Registration  (Only for Patkar Collge students.)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScIsjQFAPNL-Y8nfZ8I_MKjbsDN_gtO8tcKDW1gwxP7ugC8LQ/viewform?usp=sf_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Out-House Registration  (For Students From other Colleges.)
                                    </a>
                                </li>
                            </ul>
                        </div>



                        <div className="faq-item">
                            <h3>What events are there in the fest?</h3>
                            <p>
                                Our fest features a variety of exciting events, including cultural performances, technical competitions, workshops, and much more!
                                For detailed information about each event, visit our <Link
                                    to="/events"
                                    rel="noopener noreferrer"
                                >
                                    Events Page
                                </Link>
                            </p>
                        </div>

                        <div className="faq-item">
                            <h3>Where is the event held?</h3>
                            <p>The Ubuntu fest is hosted annually at Patkar-Varde College in the heart of Mumbai, India.</p>

                        </div>

                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;
