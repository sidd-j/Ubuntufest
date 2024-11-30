import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../src/layout.css';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            setIsAuthenticated(true);
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            setUserInfo(decodedToken);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

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
                            <img src="/UbuntuLogo.png" alt="Ubuntu Fest Logo" className="logo-img" />
                        </Link>
                    </div>
                    <li><Link to="/" className="nav-link">HOME</Link></li>
                    <li><Link to="/gallery" className="nav-link">GALLERY</Link></li>
                    <li><Link to="/events" className="nav-link">EVENTS</Link></li>
                    <li><Link to="/schedule" className="nav-link">SCHEDULE</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/EventRegistrationPage" className="nav-link">Event Register Page</Link></li>
                            <li><Link to="/profile" className="nav-link">PROFILE</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/registration" className="nav-link">REGISTER</Link></li>
                            <li><Link to="/login" className="nav-link">LOGIN</Link></li>
                        </>
                    )}
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
                            <img src="/Instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook.png" alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" />
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
