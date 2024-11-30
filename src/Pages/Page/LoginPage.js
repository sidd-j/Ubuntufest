import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import '../Styles/LoginPage.css'; // Import the dark theme CSS
import Layout from '../../layout';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!email || !password) {
            setErrorMessage('Both fields are required!');
            return;
        }
        const BASE_URL = process.env.REACT_APP_BASE_URL || "https://localhost:5000";
        try {
            const response = await fetch(`${BASE_URL}/user/login`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save JWT token in localStorage for maintaining the session
                localStorage.setItem('jwtToken', data.jwtToken);

                // Redirect to the dashboard page after successful login
                navigate('/'); // Using navigate() instead of history.push()
            } else {
                // Show error message if login failed
                setErrorMessage(data.message || 'Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('An error occurred. Please try again later. ' + error);
        }
    };

    return (
        <Layout>
            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}

                        <button type="submit" className="login-button">Login</button>
                    </form>

                    <div className="signup-link">
                        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;
