import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../Styles/SplineVR.css';

const SplineComponent = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js';

        script.onload = () => {
            console.log('Spline viewer script loaded');
        };

        document.head.appendChild(script);

        // Cleanup on component unmount
        return () => {
            document.head.removeChild(script);
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

            {/* Spline viewer tag */}
            <spline-viewer
                className="spline-viewer"
                url="https://prod.spline.design/1JICLJdcdb0wAH2i/scene.splinecode"
            ></spline-viewer>

            {/* Content overlay */}
            <div className="content-overlay">
                <h1>Ubuntu 2024</h1>
                <p>
                    Get ready to groove, sing, dance, and celebrate the ultimate intercollege cultural
                    extravaganza!
                </p>
                <Link to="/Ubuntufest/events">
                    <button className="cta-button">Explore Events</button>
                </Link>
            </div>
        </div>
    );
};

export default SplineComponent;
