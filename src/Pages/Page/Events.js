import React, { useState, useEffect } from 'react';
import '../Styles/EventPage.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout';

const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the events from the JSON file (located in the public folder)
        fetch('/Ubuntufest/EventsDetails.json')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error loading events:', error));
    }, []);

    const handleInHouseRegister = () => {
        if (selectedEvent) {
            window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLSf2UwLfpKh5b2l5SRALUTkaYUYR7sBxI0ntcgYii9Y_iwUfpA/viewform?usp=sf_link',
                '_blank'
            );
        }
    };

    const handleOutHouseRegister = () => {
        if (selectedEvent) {
            window.open(
                'https://docs.google.com/forms/d/e/1FAIpQLScIsjQFAPNL-Y8nfZ8I_MKjbsDN_gtO8tcKDW1gwxP7ugC8LQ/viewform?usp=sf_link',
                '_blank'
            );
        }
    };

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === "event-modal") {
            setSelectedEvent(null);
        }
    };

    return (
        <Layout>
            <div className="event-page" onClick={handleOutsideClick}>
                {/* General Rules & How to Fill the Form */}
                <div className="general-rules-section">
                    <h2>General Rules & Regulations</h2>
                    <div className="registration-guidelines">
                        <h2 className="section-title">Event Registration Guidelines</h2>

                        <div className="registration-info">
                            <h3 className="subheading">Important Dates</h3>
                            <ul>
                                <li><strong>Registration Deadline:</strong> All participants must complete registration before 18th December. The form will close after this date with no exceptions.</li>
                            </ul>
                        </div>

                        <div className="payment-info">
                            <h3 className="subheading">Payment Information</h3>
                            <ul>
                                <li><strong>Online Payment Only:</strong> Payment will be accepted online only. No cash payments will be accepted.</li>
                                <li><strong>Upload Payment Screenshot:</strong> After completing the payment, upload the screenshot and mention the participant's name and event name while paying.</li>
                            </ul>
                        </div>

                        <div className="multiple-events-info">
                            <h3 className="subheading">Multiple Event Participation</h3>
                            <ul>
                                <li><strong>Solo Events:</strong> For solo category events, select only solo events at a time (e.g., Naadbrahma (Instrumental)(Solo)).</li>
                                <li><strong>Group Events:</strong> If you're participating in group events (e.g., Suron ki Mehfil (Singing)(Group)), please submit a separate form for each event.</li>
                            </ul>
                        </div>

                        <div className="group-registration-info">
                            <h3 className="subheading">Group Registration</h3>
                            <ul>
                                <li><strong>Single Form Submission:</strong> Only one member of the group needs to fill out the registration form and mention the names of other group members in the appropriate fields provided in the Google form.</li>
                            </ul>
                        </div>

                        <div className="google-form-info">
                            <h3 className="subheading">Google Form Instructions</h3>
                            <ul>
                                <li><strong>Multiple Submissions:</strong> The registration form can be submitted multiple times if you're participating in different categories (Solo, Duo, Group).</li>
                                <li><strong>Mandatory Form Filling:</strong> Filling out the Google form is mandatory before the registration day. Please ensure that all fields are filled out correctly.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="how-to-fill-form">
                    <h2>How to Fill the Registration Form</h2>
                    <p>Follow these simple steps to register:</p>
                    <ol>
                        <li>Click on an event card to view event details.</li>
                        <li>Select the appropriate registration option (In-House or Out-House).</li>
                        <li>Fill in the required details in the registration form.</li>
                        <li>Click on the "Submit" button to complete your registration.</li>
                    </ol>
                </div>

                <h1 className="event-title">Upcoming Events</h1>
                <p className="event-subtitle">Click on an event to view details</p>

                <div className="event-grid">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="event-card"
                            onClick={() => setSelectedEvent(event)}
                        >
                            <h2>{event.name}</h2>
                            <p className="event-price">{event.price}</p>
                        </div>
                    ))}
                </div>

                {/* Modal for Event Details */}
                {selectedEvent && (
                    <div className="event-modal" onClick={handleOutsideClick}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedEvent.name}</h2>
                            <p><strong>Description:</strong> {selectedEvent.description}</p>

                            {/* Accordion for Rules & Regulations */}
                            <div className="accordion">
                                <div className="accordion-header" onClick={toggleAccordion}>
                                    <h3>Rules & Regulations</h3>
                                </div>
                                <div className={`accordion-body ${isAccordionOpen ? 'active' : ''}`}>
                                    <ul>
                                        {selectedEvent.rules.map((rule, index) => (
                                            <li key={index}>{rule}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <p><strong>Price:</strong> {selectedEvent.price}</p>
                            <div className="modal-buttons">
                                <button className="register-button" onClick={handleInHouseRegister}>
                                    In-House Registration  (Only for Patkar Collge students.)

                                </button>
                                <button className="register-button" onClick={handleOutHouseRegister}>
                                    Out-House Registration  (For Students From other Colleges.)

                                </button>
                            </div>
                            <button className="close-button" onClick={() => setSelectedEvent(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default EventPage;
