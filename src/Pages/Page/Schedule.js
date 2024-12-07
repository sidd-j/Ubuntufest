import React, { useState, useEffect } from "react";
import Layout from "../../layout";
import "../Styles/Schedule.css";
import { FaCalendarDay, FaStar } from "react-icons/fa";

const Schedule = () => {
    const [day1Events, setDay1Events] = useState([]);
    const [day2Events, setDay2Events] = useState([]);

    useEffect(() => {
        // Hardcoded event data
        const eventsData = [
            {
                name: "Suron ki Mehfil (Singing)",
                day: 1
            },
            {
                name: "Aparichit (Mono Act)",
                day: 1
            },
            {
                name: "Naadbrahma (Instrumental)",
                day: 1
            },
            {
                name: "Online Gaming: Clash Royale",
                day: 2
            },
            {
                name: "Online Gaming: eFootball",
                day: 1
            },
            {
                name: "Online Gaming (BGMI)",
                day: 1
            },
            {
                name: "KBC (Dangal Prashno Ka Baazi Gyaan Ki)",
                day: 1
            },
            {
                name: "Atrangi Prachar (Mad Advertisement)",
                day: 1
            },
            {
                name: "Bhool Bhulaiya (Escape Room)",
                day: 1
            },
            {
                name: "Photography",
                day: 1
            },
            {
                name: "Rangon ki Dastaan (Rangoli)",
                day: 1
            },
            {
                name: "Timeless Beauty (Face Painting)",
                day: 1
            },
            {
                name: "Reel it Feel it (Reel Making)",
                day: 1
            },
            {
                name: "Chess",
                day: 1
            },
            {
                name: "Mr. and Ms. UBUNTU",
                day: 2
            },
            {
                name: "Fashion Show (Retro Runway)",
                day: 2
            },
            {
                name: "Dance (Aaja Nachle)",
                day: 2
            },
            {
                name: "Online Gaming: Stumble Guys",
                day: 2
            },
            {
                name: "Gully Badminton",
                day: 2
            },
            {
                name: "Nail Art",
                day: 2
            }
        ];

        // Filter day 1 and day 2 events
        const day1 = eventsData.filter(event => event.day === 1);
        const day2 = eventsData.filter(event => event.day === 2);

        setDay1Events(day1);
        setDay2Events(day2);
    }, []);

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
                                    <FaStar className="event-icon" /> {event.name}
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
                                    <FaStar className="event-icon" /> {event.name}
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
