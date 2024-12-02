import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable"; // For swipe functionality
import "../Styles/Slider.css"; // Ensure styles are correctly linked

const Slider = ({ images }) => {
    // Array of image paths

    const totalSlides = images.length; // Dynamically get the total slides
    const [selectedSlide, setSelectedSlide] = useState(1); // Default to the first image

    // Automatically cycle through slides
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedSlide((prevSlide) => (prevSlide % totalSlides) + 1); // Loop back to the first slide
        }, 3000); // Slide every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [totalSlides]);

    // Handle swipe gestures
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setSelectedSlide((prevSlide) => (prevSlide % totalSlides) + 1),
        onSwipedRight: () => setSelectedSlide((prevSlide) => (prevSlide - 2 + totalSlides) % totalSlides + 1),
    });

    const handleSlideChange = (e) => {
        setSelectedSlide(Number(e.target.value));
    };

    return (
        <section id="slider" {...swipeHandlers}>
            {/* Radio buttons for each slide */}
            {images.map((_, index) => (
                <input
                    key={`radio-${index + 1}`}
                    type="radio"
                    name="slider"
                    id={`s${index + 1}`}
                    value={index + 1}
                    checked={selectedSlide === index + 1}
                    onChange={handleSlideChange}
                />
            ))}

            {/* Render labels for slides */}
            {images.map((img, index) => (
                <label htmlFor={`s${index + 1}`} id={`slide${index + 1}`} key={`slide-${index + 1}`}>
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`slider-image ${selectedSlide === index + 1 ? "active" : ""}`}
                    />
                </label>
            ))}
        </section>
    );
};

export default Slider;
