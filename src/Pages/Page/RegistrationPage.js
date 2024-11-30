import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/RegistrationPage.css'; // Import your CSS for styling
import Layout from "../../layout"
const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        collegeName: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const history = useNavigate(); // Used for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if password and confirmPassword are the same
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setSuccessMessage('');

        // Prepare the request payload
        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            contactNumber: formData.contactNumber,
            email: formData.email,
            collegeName: formData.collegeName,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
        };

        const BASE_URL = process.env.REACT_APP_BASE_URL || "https://localhost:5000";
        console.log(`${BASE_URL}/user/register`);

        try {
            // Send POST request to the API
            const response = await fetch(`${BASE_URL}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (response.ok) {
                // Handle successful registration
                setSuccessMessage(result.message);
                setTimeout(() => {
                    history.push('/login'); // Redirect to login page after 2 seconds
                }, 2000);
            } else {
                // Handle errors
                setError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('An error occurred during registration.');
        }
    };

    const colleges = [
        'Patkar College',
        'XYZ University',
        'ABC Institute',
        'Global University',
    ];

    return (
        <Layout>

            <div className="registration-page">
                <div className="form-container">
                    {/* Left side image */}
                    <div className="image-container">
                        <img src="/MainImage.jpg" alt="Registration" />
                    </div>

                    {/* Right side form */}
                    <div className="form-box">
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit} className="registration-form">
                            {/* First Name */}
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Contact Number */}
                            <div className="form-group">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                    placeholder="Enter 10-digit number"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* College Name */}
                            <div className="form-group">
                                <label htmlFor="collegeName">College Name</label>
                                <select
                                    id="collegeName"
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select College</option>
                                    {colleges.map((college, index) => (
                                        <option key={index} value={college}>
                                            {college}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {error && <div className="error-message">{error}</div>}
                            {successMessage && <div className="success-message">{successMessage}</div>}

                            <button type="submit" className="submit-button">Register</button>
                        </form>

                        <div className="login-link">
                            <p>Already have an account? <Link to="/login">Login here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RegistrationPage;
