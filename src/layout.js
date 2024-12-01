import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

                <div
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation Menu"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>


                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>


                    <div className="logo">
                        <Link to="/">
                            <img src="/Ubuntufest/UbuntuLogo.png" alt="Ubuntu Fest Logo" className="logo-img" />
                        </Link>
                    </div>
                    <li><Link to="/Ubuntufest" className="nav-link">HOME</Link></li>
                    <li><Link to="/Ubuntufest/gallery" className="nav-link">GALLERY</Link></li>
                    <li><Link to="/Ubuntufest/events" className="nav-link">EVENTS</Link></li>
                    <li><Link to="/Ubuntufest/schedule" className="nav-link">SCHEDULE</Link></li>
                    <li><Link to="/Ubuntufest/EventRegistrationPage" className="nav-link">Event Register Page</Link></li>


                </ul>
            </nav>

            {/* Main Content */}
            <main>{children}</main>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3><a href="https://www.patkarvardecollege.edu.in/" target="_blank" rel="noopener noreferrer">Our College</a></h3>
                        <ul>
                            <li><a href="#">Location </a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3><a href="https://www.ourteamwebsite.com" target="_blank" rel="noopener noreferrer">Our Team</a></h3>
                        <ul>
                            <li><a href="#">Meet the Team</a></li>
                        </ul>
                    </div>
                    <div class="footer-section social-media">
                        <h3>Follow Us</h3>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/Ubuntufest/Instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/Ubuntufest/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/Ubuntufest/linkedin.png" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div class="footer-text">
                    <p>&copy; 2024 Ubuntu Fest. Created by Siddhesh.</p>
                </div>
            </footer>


        </div>
    );
};

export default Layout;
