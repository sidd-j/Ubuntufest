import React from "react";
import "../Styles/GalleryPage.css";
import Layout from "../../layout";

const GalleryPage = () => {
    // Sample images for gallery
    const lastYearImages = [
        "https://via.placeholder.com/400x250?text=Last+Year+1",
        "https://via.placeholder.com/400x250?text=Last+Year+2",
        "https://via.placeholder.com/400x250?text=Last+Year+3",
        "https://via.placeholder.com/400x250?text=Last+Year+4",
    ];

    const thisYearImages = [
        "https://via.placeholder.com/400x250?text=This+Year+1",
        "https://via.placeholder.com/400x250?text=This+Year+2",
        "https://via.placeholder.com/400x250?text=This+Year+3",
        "https://via.placeholder.com/400x250?text=This+Year+4",
    ];

    return (
        <Layout>
            <div className="gallery-container">
                <h1 className="gallery-title">Gallery</h1>

                {/* Last Year Memories Section */}
                <div className="gallery-section">
                    <h2 className="section-title">Last Year's Memories</h2>
                    <div className="gallery-grid">
                        {lastYearImages.map((image, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={image} alt={`Last Year ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* This Year's Upcoming Events Section */}
                <div className="gallery-section">
                    <h2 className="section-title">This Year's Upcoming Events</h2>
                    <div className="gallery-grid">
                        {thisYearImages.map((image, index) => (
                            <div className="gallery-item" key={index}>
                                <img src={image} alt={`This Year ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default GalleryPage;
