import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../Styles/SplineVR.css';

const SplineComponent = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen width and update state
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set initial state
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="spline-container">
            {/* Optional Helmet to inject the script in the head */}
            <Helmet>
                <script
                    type="module"
                    src="https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js"
                ></script>
            </Helmet>

            {/* Conditionally render the Spline viewer or background image based on screen size */}
            {isMobile ? (
                <div
                    className="background-image"
                    style={{ backgroundImage: 'url(/Ubuntufest/MainImage.jpg)' }}
                ></div>

            ) : (
                <spline-viewer
                    className="spline-viewer"
                    url="https://prod.spline.design/1JICLJdcdb0wAH2i/scene.splinecode"
                ></spline-viewer>
            )}

            {/* Content overlay */}
            <div className="content-overlay">
                <h1>Ubuntu 2024</h1>
                <p>
                    Get ready to  celebrate the ultimate intercollege cultural
                    extravaganza!
                </p>
                <Link to="/events">
                    <button className="cta-button">Explore Events</button>
                </Link>
            </div>
        </div>
    );
};

export default SplineComponent;
