import React, { useState } from 'react';
import '../Styles/EventPage.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout';

const events = [
    { id: 1, name: 'Suron ki Mehfil (Singing)', price: '₹50', description: 'A mesmerizing singing competition for music lovers. The event will showcase incredible vocal talents from around the region. Participants must adhere to the time limits and themes provided.' },
    { id: 2, name: 'Aparichit (Mono Act)', price: '₹50', description: 'A mono-act drama competition showcasing incredible acting skills. Participants should prepare a performance under 10 minutes. No offensive content will be tolerated.' },
    { id: 3, name: 'Naadbrahma (Instrumental)', price: '₹50', description: 'An instrumental music competition celebrating the beauty of sound. Performers should bring their own instruments and follow specific theme-based guidelines.' },
    { id: 4, name: 'Online Gaming: Clash Royale', price: '₹50', description: 'Show your strategy skills in this epic Clash Royale tournament. Players will compete in knockout rounds.' },
    { id: 5, name: 'Online Gaming: eFootball', price: '₹50', description: 'Compete against the best in this exciting eFootball event. Players will be matched based on rankings.' },
    { id: 6, name: 'Online Gaming: BGMI', price: '₹50', description: 'Join the battle in this electrifying BGMI gaming competition. The tournament will feature a battle royale format.' },
    { id: 7, name: 'Chess', price: '₹50', description: 'Outsmart your opponents in this classic game of strategy. Matches will follow standard chess rules.' },
    { id: 8, name: 'KBC (Dangal Prashno ka Baazi Gyaan ki)', price: '₹50', description: 'Test your knowledge in this thrilling KBC-inspired quiz show. Answer questions in various categories.' },
    { id: 9, name: 'Atrangi Prachar (Mad Advertisement)', price: '₹50', description: 'Showcase your creativity with a crazy ad campaign. Participants must create a 30-second ad for any product.' },
    { id: 10, name: 'Bhool Bhulaiya (Escape Room)', price: '₹50', description: 'Solve the puzzles and escape the room before time runs out. Teamwork and sharp thinking will be key.' },
    { id: 11, name: 'Photography', price: '₹50', description: 'Capture the moments with your photography skills. Participants must submit their photos under a chosen theme.' },
    { id: 12, name: 'Rangon ki Dastan (Rangoli)', price: '₹50', description: 'Create beautiful Rangoli designs and showcase your artistry. Designs should be on a 4x4 feet surface.' },
    { id: 13, name: 'Chitra Kala (Painting)', price: '₹50', description: 'Express yourself through colors in this painting competition. Participants can use any medium of their choice.' },
    { id: 14, name: 'Timeless Beauty (Face Beauty)', price: '₹50', description: 'Display your beauty and makeup skills in this competition. Models and makeup artists can team up.' },
    { id: 15, name: 'Reel it Feel it (Reel Making)', price: '₹50', description: 'Make a short and creative reel video for the competition. Videos should not exceed 30 seconds.' },
    { id: 16, name: 'Mr. and Ms. UBUNTU', price: '₹50', description: 'Compete for the title of Mr. and Ms. UBUNTU in this pageant. Participants will be judged on personality and talent.' },
    { id: 17, name: 'Fashion Show (Retro Runway)', price: '₹50', description: 'Show off your fashion style in the retro-themed runway show. Participants should showcase their best vintage outfits.' },
    { id: 18, name: 'Dance (Aaja Nachle)', price: '₹50', description: 'Join the dance competition and groove to the music. Choreography can be performed solo or in groups.' },
    { id: 19, name: 'Online Gaming: Stumble Guys', price: '₹50', description: 'Compete in the Stumble Guys gaming event. Players must navigate obstacles in a race to the finish.' },
    { id: 20, name: 'Gully Badminton', price: '₹50', description: 'Play badminton in a unique gully style competition. The rules are modified for a fun, challenging experience.' },
    { id: 21, name: 'Nakh Shikant (Nail Art)', price: '₹50', description: 'Show off your nail art creativity in this competition. Participants must provide their own supplies and models.' },
];

const EventPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const navigate = useNavigate();

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
                                        <li>No plagiarism allowed.</li>
                                        <li>Performance time limits must be adhered to.</li>
                                        <li>Offensive content will lead to disqualification.</li>
                                        <li>Participants must follow the theme provided.</li>
                                        <li>Latecomers may not be allowed to participate.</li>
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
