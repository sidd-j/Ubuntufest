import React, { useState } from 'react';
import '../Styles/EventPage.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout';


const events = [
    {
        id: 1, name: 'Suron ki Mehfil (Singing)', price: '₹50', description: 'A mesmerizing singing competition for music lovers. The event will showcase incredible vocal talents from around the region. Participants must adhere to the time limits and themes provided. No offensive language or explicit content allowed. Time limit: 5 minutes.', rules: [
            "1.Eligibility: - Open to college students and external participants. - Solo (₹50) or group(₹150, group should consist of 2 - 6 people).",
            "2. warning bell at 4 minutes.",
            "3. Song Selection: - Vintage theme('60s, '70s, '80s), any genre.",
            "4.Respectful Behaviour: No disruptive behaviour or inappropriate content.",
            "5. Background Music: - Submit tracks on USB or mobile a day before; no personal instruments allowed.",
            "6.A panel of judges will evaluate performance based on vocal quality,stage presence, and theme."
        ]
    },
    {
        id: 2, name: 'Aparichit (Mono Act)', price: '₹50', description: 'A mono-act drama competition showcasing incredible acting skills. Participants should prepare a performance under 10 minutes. No offensive content will be tolerated. Props are allowed but must be pre-approved by the organizers.', rules: [
            "No offensive content will be tolerated.",
            "Props are allowed but must be pre-approved by the organizers.",
            "Performance time limit: 10 minutes."
        ]
    },
    {
        id: 3, name: 'Naadbrahma (Instrumental)', price: '₹50', description: 'An instrumental music competition celebrating the beauty of sound. Performers should bring their own instruments and follow specific theme-based guidelines. Participants must perform within 8 minutes.', rules: [
            "Performers must bring their own instruments.",
            "Follow theme-based guidelines.",
            "Performance time limit: 8 minutes."
        ]
    },
    {
        id: 4, name: 'Online Gaming: Clash Royale', price: '₹50', description: 'Show your strategy skills in this epic Clash Royale tournament. Players will compete in knockout rounds. Participants must follow fair play rules. No external assistance allowed.', rules: [
            "No external assistance allowed.",
            "Follow fair play rules.",
            "Competition will follow knockout rounds."
        ]
    },
    {
        id: 5, name: 'Online Gaming: eFootball', price: '₹50', description: 'Compete against the best in this exciting eFootball event. Players will be matched based on rankings. Matches will follow official FIFA rules and regulations.', rules: [
            "Matches will follow official FIFA rules and regulations.",
            "Players will be matched based on rankings."
        ]
    },
    {
        id: 6, name: 'Online Gaming: BGMI', price: '₹50', description: 'Join the battle in this electrifying BGMI gaming competition. The tournament will feature a battle royale format. Players must not engage in cheating or use third-party apps.', rules: [
            "No cheating or use of third-party apps.",
            "Follow battle royale format."
        ]
    },
    {
        id: 7, name: 'Chess', price: '₹50', description: 'Outsmart your opponents in this classic game of strategy. Matches will follow standard chess rules. Time controls: 15 minutes per player.', rules: [
            "Follow standard chess rules.",
            "Time controls: 15 minutes per player."
        ]
    },
    {
        id: 8, name: 'KBC (Dangal Prashno ka Baazi Gyaan ki)', price: '₹50', description: 'Test your knowledge in this thrilling KBC-inspired quiz show. Answer questions in various categories. Participants must not use any external devices to assist in answering.', rules: [
            "No external devices allowed.",
            "Answer questions based on knowledge in various categories."
        ]
    },
    {
        id: 9, name: 'Atrangi Prachar (Mad Advertisement)', price: '₹50', description: 'Showcase your creativity with a crazy ad campaign. Participants must create a 30-second ad for any product. The ad must be original and adhere to the event’s theme.', rules: [
            "Create an original 30-second ad.",
            "Ad must follow the event’s theme."
        ]
    },
    {
        id: 10, name: 'Bhool Bhulaiya (Escape Room)', price: '₹50', description: 'Solve the puzzles and escape the room before time runs out. Teamwork and sharp thinking will be key. No external help is allowed during the game.', rules: [
            "No external help allowed.",
            "Teamwork and sharp thinking will be key."
        ]
    },
    {
        id: 11, name: 'Photography', price: '₹50', description: 'Capture the moments with your photography skills. Participants must submit their photos under a chosen theme. All photos must be original and not edited beyond basic adjustments.', rules: [
            "All photos must be original.",
            "No heavy editing; basic adjustments allowed.",
            "Submit photos under the chosen theme."
        ]
    },
    {
        id: 12, name: 'Rangon ki Dastan (Rangoli)', price: '₹50', description: 'Create beautiful Rangoli designs and showcase your artistry. Designs should be on a 4x4 feet surface. Participants can use colored powders, flowers, or other materials.', rules: [
            "Entry Fees - 50rs.",
            "Per college 2 entries",
            "1. All Rangoli designs must reflect the vintage theme.",
            "2. Participants can depict vintage elements like old cultural symbols, classic motifs, traditional patterns, or retro art from previous eras.",
            "3. Participants can compete individually.",
            "4. A maximum of 1hr 30mins will be given to each team to complete their Rangoli.",
            "5. Participants should bring their own Rangoli materials (like coloured powders, flowers, rice, or sand).Some basic materials might be provided by the college if needed.",
            "6. Only natural colours and materials(e.g., flowers, organic powders) are encouraged for eco - friendliness.",
            "7. No use of toxic materials, paints, or adhesives that might damage surfaces.",
            "8. no references are allowed eg.mobile phones."
        ]
    },
    {
        id: 13, name: 'Timeless Beauty (Face Beauty)', price: '₹50', description: 'Display your beauty and makeup skills in this competition. Models and makeup artists can team up. Participants must follow the event’s theme, and models should be prepared for the session.', rules: [
            " 1. Participants must strictly adhere to the vintage theme.Makeup looks should be inspired by iconic eras like the 1920s, 1950s, 1970s, 1980s, etc",
            "2. Participants may choose a specific era or blend elements from multiple decades.",
            "3. Participants must arrive 30 minutes before the start of the competition for check -in and setup.",
            "4. Participants are encouraged to bring their own materials,   all makeup products used must be non - toxic and safe for skin",
            "5. Use of references(mobiles, photographs, stencils etc) Is prohibited"
        ]
    },
    {
        id: 14, name: 'Reel it Feel it (Reel Making)', price: '₹50', description: 'Make a short and creative reel video for the competition. Videos should not exceed 30 seconds. The content should be original, and participants must follow the event theme.', rules: [
            "Videos must not exceed 30 seconds.",
            "Content should be original and follow the event theme."
        ]
    },
    {
        id: 15, name: 'Mr. and Ms. UBUNTU', price: '₹50', description: 'Compete for the title of Mr. and Ms. UBUNTU in this pageant. Participants will be judged on personality, talent, and appearance. Participants must prepare a performance, talent, or skill presentation.', rules: [
            "Participants must prepare a performance, talent, or skill presentation.",
            "Judging based on personality, talent, and appearance."
        ]
    },
    {
        id: 16, name: 'Fashion Show (Retro Runway)', price: '₹50', description: 'Show off your fashion style in the retro-themed runway show. Participants should showcase their best vintage outfits. Models must be ready for multiple costume changes during the event.', rules: [
            "Models must be ready for multiple costume changes.",
            "Participants should showcase vintage outfits."
        ]
    },
    {
        id: 17, name: 'Dance (Aaja Nachle)', price: '₹50', description: 'Join the dance competition and groove to the music. Choreography can be performed solo or in groups. Performances should be within 4 minutes, and teams should not exceed 6 members.', rules: [
            "Performance time limit: 4 minutes.",
            "Teams should not exceed 6 members."
        ]
    },
    {
        id: 18, name: 'Online Gaming: Stumble Guys', price: '₹50', description: 'Compete in the Stumble Guys gaming event. Players must navigate obstacles in a race to the finish. Fair play and no external tools are allowed.', rules: [
            "Fair play must be followed.",
            "No external tools allowed."
        ]
    },
    {
        id: 19, name: 'Gully Badminton', price: '₹50', description: 'Play badminton in a unique gully style competition. The rules are modified for a fun, challenging experience. Players must follow the modified gully rules provided at the start of the match.', rules: [
            "Follow the modified gully rules provided at the start."
        ]
    },
    {
        id: 20, name: 'Nakh Shikant (Nail Art)', price: '₹50', description: 'Show off your nail art creativity in this competition. Participants must provide their own supplies and models. Designs should be original and not copied.', rules: [
            "Participants must provide their own supplies and models.",
            "Designs should be original and not copied."
        ]
    },
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
                                    <p>{selectedEvent.rules}</p>
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
