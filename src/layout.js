import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/layout.css';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="layout">
            {/* Navigation Bar */}
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img
                            src="/Ubuntufest/UbuntuLogo.png"
                            alt="Ubuntu Fest Logo"
                            className="logo-img"
                        />
                    </Link>
                </div>

                {/* Hamburger Menu */}
                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation Menu"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <div className="logo">
                        <Link to="/">
                            <img
                                src="/Ubuntufest/UbuntuLogo.png"
                                alt="Ubuntu Fest Logo"
                                className="logo-img"
                            />
                        </Link>
                    </div>
                    <li>
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="nav-link">GALLERY</Link>
                    </li>
                    <li>
                        <Link to="/our-team" className="nav-link">Our Team</Link>
                    </li>
                    <li>
                        <Link to="/events" className="nav-link">EVENTS</Link>
                    </li>
                    <li>
                        <Link to="/schedule" className="nav-link">SCHEDULE</Link>
                    </li>

                </ul>
            </nav>

            {/* Main Content */}
            <main>{children}</main>

            <footer className="footer">
                <div className="footer-content">
                    {/* Footer Sections */}
                    <div className="footer-section">
                        <h3>
                            <a
                                href="https://www.patkarvardecollege.edu.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Our College
                            </a>
                        </h3>
                        <div className="map-small-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6208864665914!2d72.84327526199108!3d19.16806534899864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b78f43408a6b%3A0xa387a49687e89612!2sChikitsak%20Samuha&#39;s%20Sir%20Sitaram%20%26%20Lady%20Shantabai!5e0!3m2!1sen!2sin!4v1733231195476!5m2!1sen!2sin"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>
                            <a
                                href="/events"
                                rel="noopener noreferrer"
                            >
                                Our Team
                            </a>
                        </h3>
                    </div>
                    <div className="footer-section social-media">
                        <h3>Follow Us</h3>
                        <a
                            href="https://www.instagram.com/ubuntu.pvc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/Ubuntufest/Instagram.png" alt="Instagram" />
                        </a>
                        {/* <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/Ubuntufest/facebook.png" alt="Facebook" />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/Ubuntufest/linkedin.png" alt="LinkedIn" />
                        </a>
                        */}
                    </div>
                </div>
                <div className="footer-text">
                    <p>&copy; 2024 Ubuntu Fest. Created by
                        <a href="https://www.linkedin.com/in/siddhesh-jadhav-238b5a177" target="_blank" class="hidden-link"> Siddhesh Jadhav </a>
                        and
                        <a href="https://www.linkedin.com/in/tanamykadam88/" target="_blank" class="hidden-link"> Tanmay Kadam </a>.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Layout;
