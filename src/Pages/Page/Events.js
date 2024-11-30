import React, { useState } from 'react';
import '../Styles/EventPage.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout';

const events = [
    { id: 1, name: 'Suron ki Mehfil (Singing)', price: '₹50', description: 'A mesmerizing singing competition for music lovers.' },
    { id: 2, name: 'Aparichit (Mono Act)', price: '₹50', description: 'A mono-act drama competition showcasing incredible acting skills.' },
    { id: 3, name: 'Naadbrahma (Instrumental)', price: '₹50', description: 'An instrumental music competition celebrating the beauty of sound.' },
    { id: 4, name: 'Online Gaming: Clash Royale', price: '₹50', description: 'Show your strategy skills in this epic Clash Royale tournament.' },
    { id: 5, name: 'Online Gaming: eFootball', price: '₹50', description: 'Compete against the best in this exciting eFootball event.' },
    { id: 6, name: 'Online Gaming: BGMI', price: '₹50', description: 'Join the battle in this electrifying BGMI gaming competition.' },
    { id: 7, name: 'Chess', price: '₹50', description: 'Outsmart your opponents in this classic game of strategy.' },
    { id: 8, name: 'KBC (Dangal Prashno ka Baazi Gyaan ki)', price: '₹50', description: 'Test your knowledge in this thrilling KBC-inspired quiz show.' },
];

const EventPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const navigate = useNavigate();

    const handleRegister = () => {
        if (selectedEvent) {
            navigate(`/EventRegistrationPage`, { state: selectedEvent });
        }
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
                            <p><strong>Price:</strong> {selectedEvent.price}</p>
                            <button className="register-button" onClick={handleRegister}>
                                Register
                            </button>
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
