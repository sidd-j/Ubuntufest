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
            // Handle In-House registration logic
            navigate(`/InHouseRegistrationPage`, { state: selectedEvent });
        }
    };

    const handleOutHouseRegister = () => {
        if (selectedEvent) {
            // Handle Out-House registration logic
            navigate(`/OutHouseRegistrationPage`, { state: selectedEvent });
        }
    };

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <Layout>
            <div className="event-page">
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
                {selectedEvent && (
                    <div className="event-modal" onClick={() => setSelectedEvent(null)}>
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
                                    In-House Registration
                                </button>
                                <button className="register-button" onClick={handleOutHouseRegister}>
                                    Out-House Registration
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
