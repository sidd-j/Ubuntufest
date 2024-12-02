import React from "react";
import "../Styles/GalleryPage.css"; // Ensure the styles are correctly linked.
import Layout from "../../layout";
import Slider from "./Slider";

const Gallery = () => {

    return (
        <Layout>
            <div className="gallery-page">
                <div className="gallery-container">

                    <Slider />


                </div>

            </div>

        </Layout>
    );
};

export default Gallery;
