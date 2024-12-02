import React, { useState } from "react";
import "../Styles/GalleryPage.css"; // Ensure styles are correctly linked

const Slider = () => {
    const [selectedSlide, setSelectedSlide] = useState(3);

    const handleSlideChange = (e) => {
        setSelectedSlide(Number(e.target.value));
    };

    return (
        <section id="slider">
            <input
                type="radio"
                name="slider"
                id="s1"
                value={1}
                checked={selectedSlide === 1}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="s2"
                value={2}
                checked={selectedSlide === 2}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="s3"
                value={3}
                checked={selectedSlide === 3}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="s4"
                value={4}
                checked={selectedSlide === 4}
                onChange={handleSlideChange}
            />
            <input
                type="radio"
                name="slider"
                id="s5"
                value={5}
                checked={selectedSlide === 5}
                onChange={handleSlideChange}
            />
            <label htmlFor="s1" id="slide1">
                <img
                    src="https://via.placeholder.com/1200x800?text=Nature+1"
                    alt="Nature 1"
                    className="slider-image"
                />
            </label>
            <label htmlFor="s2" id="slide2">
                <img
                    src="https://via.placeholder.com/1200x800?text=Nature+2"
                    alt="Nature 2"
                    className="slider-image"
                />
            </label>
            <label htmlFor="s3" id="slide3">
                <img
                    src="https://via.placeholder.com/1200x800?text=Nature+3"
                    alt="Nature 3"
                    className="slider-image"
                />
            </label>
            <label htmlFor="s4" id="slide4">
                <img
                    src="https://via.placeholder.com/1200x800?text=Nature+4"
                    alt="Nature 4"
                    className="slider-image"
                />
            </label>
            <label htmlFor="s5" id="slide5">
                <img
                    src="https://via.placeholder.com/1200x800?text=Nature+5"
                    alt="Nature 5"
                    className="slider-image"
                />
            </label>
        </section>
    );
};

export default Slider;
