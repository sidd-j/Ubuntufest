import React from "react";
import Layout from "../../layout";
import "../Styles/Schedule.css";
import { FaCalendarDay, FaStar } from "react-icons/fa";
const Schedule = () => {
    const day1Events = [
        "Suron ki Mehfil (Singing)",
        "Aparichit (Mono Act)",
        "Naadbrahma (Instrumental)",
        "Online Gaming: Clash Royale",
        "Online Gaming: eFootball",
        "Chess",
        "KBC (Dangal Prashno ka Baazi gyaan ki)",
        "Atrangi Prachar (Mad Advertisement)",
        "Bhool Bhulaiya (Escape Room)",
        "Photography",
        "Rangon ki Dastan (Rangoli)",
        "Chitra Kala (Painting)",
        "Timeless Beauty (Face Beauty)",
        "Reel it Feel it (Reel Making)",
    ];

    const day2Events = [
        "Mr. and Ms. UBUNTU",
        "Fashion Show (Retro Runway)",
        "Dance (Aaja Nachle)",
        "Online Gaming: Stumble Guys",
        "Gully Badminton",
        "Nakh Shikant (Nail Art)",
    ];

    return (
        <Layout>
            <div className="schedule-page">
                <h1 className="schedule-title">Event Schedule</h1>
                <div className="schedule-container">
                    <div className="schedule-day">
                        <h2 className="day-title">
                            <FaCalendarDay className="icon" /> Day 1 - 20th December 2024
                        </h2>
                        <ul className="event-list">
                            {day1Events.map((event, index) => (
                                <li key={index} className="event-item">
                                    <FaStar className="event-icon" /> {event}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="schedule-day">
                        <h2 className="day-title">
                            <FaCalendarDay className="icon" /> Day 2 - 21st December 2024
                        </h2>
                        <ul className="event-list">
                            {day2Events.map((event, index) => (
                                <li key={index} className="event-item">
                                    <FaStar className="event-icon" /> {event}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Schedule;
