import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomePage.css';
import Layout from '../../layout';

const HomePage = () => {
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
                    <div className="overlay"></div>
                    <div className="content fade-in">
                        <h1>Ubuntu 2024</h1>

                        <p>Get ready to groove, sing, dance, and celebrate the ultimate intercollege cultural extravaganza!</p>
                        <Link to="/events">
                            <button className="cta-button">Explore Events</button>
                        </Link>
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
                            <h3>Naadbrahma (Instrumental)</h3>
                            <p>Solo and Group instrumental performances. A treat for music enthusiasts!</p>
                        </div>
                        <div className="highlight-card zoom-in">
                            <h3>BGMI (Battlegrounds Mobile India)</h3>
                            <p>Join the online gaming battle for glory!</p>
                        </div>
                        <div className="highlight-card zoom-in">
                            <h3>Photography</h3>
                            <p>Capture the essence of the event with your camera skills!</p>
                        </div>
                        <div className="highlight-card zoom-in">
                            <h3>Timeless Beauty (Face Beauty)</h3>
                            <p>A beauty pageant that celebrates charm and grace!</p>
                        </div>
                        <div className="highlight-card zoom-in">
                            <h3>Fashion Show (Retro Runway)</h3>
                            <p>Glamour and retro style take the stage!</p>
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

                        </div>
                        <div className="faq-item">
                            <h3>Where is the fest happening?</h3>
                            <p>Ubuntu Fest will be hosted on our college campus at the main grounds.</p>
                        </div>
                        <div className="faq-item">
                            <h3>What will be happening at the event?</h3>
                            <p>Please check out the Event Page for detailed information on all the exciting events and activities happening at Ubuntu Fest!</p>
                        </div>
                    </div>
                </section>

            </div >
        </Layout >
    );
};

export default HomePage;
