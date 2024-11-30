

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import '../Styles/ProfilePage.css';
import Layout from '../../layout';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const BASE_URL = process.env.REACT_APP_BASE_URL || "https://localhost:5000";

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');

        if (token) {
            try {
                const decodedToken = jwtDecode(token);

                // Check token expiration
                const currentTime = Date.now() / 1000; // Current time in seconds
                if (decodedToken.exp < currentTime) {
                    // Token has expired
                    handleLogout(); // Call the logout function
                    return;
                }

                const userEmail = decodedToken.email;

                // Fetch user info from the API
                axios
                    .post(
                        `${BASE_URL}/user/getUserInfo`,
                        { email: userEmail },
                        {
                            headers: { Authorization: `${token}` },
                        }
                    )
                    .then((response) => {
                        setUserInfo(response.data.data); // Set user data in state
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error fetching user info:', error);
                        setError('Failed to load user information: ' + error.message);
                        setLoading(false);
                    });
            } catch (error) {
                console.error('Invalid token:', error);
                handleLogout(); // Log out if the token is invalid
            }
        } else {
            navigate('/login'); // Redirect to login page if no token is found
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('jwtToken'); // Remove token
        setUserInfo(null);
        navigate('/login'); // Redirect to login page
    };

    if (loading) {
        return <p className="loading-message">Loading...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    return (
        <Layout>
            <div className="profile-container">
                {userInfo ? (
                    <div className="profile-details">
                        <h2>Profile</h2>
                        <div className="user-info">
                            <div className="info-item">
                                <p>
                                    <strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}
                                </p>
                            </div>
                            <div className="info-item">
                                <p>
                                    <strong>Email:</strong> {userInfo.email}
                                </p>
                            </div>
                            <div className="info-item">
                                <p>
                                    <strong>Contact Number:</strong> {userInfo.contactNumber}
                                </p>
                            </div>
                            <div className="info-item">
                                <p>
                                    <strong>College Name:</strong> {userInfo.collegeName}
                                </p>
                            </div>
                        </div>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <p className="loading-message">Loading...</p>
                )}
            </div>
        </Layout>
    );
};

export default ProfilePage;
