// src/Gallery.js
import React from 'react';
import '../Styles/GalleryPage.css';
import Layout from '../../layout';

const Gallery = () => {
    const images = [
        {
            src: "/Ubuntufest/Gallery/G8.png",
            title: "Dance",
        },
        {
            src: "/Ubuntufest/Gallery/G9.jpg",
            title: "Dance",
        },
        {
            src: "/Ubuntufest/Gallery/G10.jpg",
            title: "Dance",
        },
        {
            src: "/Ubuntufest/Gallery/G11.jpg",
            title: "Dance",
        },
        {
            src: "https://picsum.photos/350/250?image=344",
            title: "Sea",
            subtitle: "Cityscape"
        },
        {
            src: "https://picsum.photos/350/250?image=494",
            title: "Vintage",
            subtitle: "Cinematic"
        },
    ];

    return (
        <Layout>
            <div>
                <p className="heading"> Gallery</p>
                <div className="gallery-image">
                    {images.map((image, index) => (
                        <div key={index} className="img-box">
                            <img src={image.src} alt={image.title} />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>{image.title}</p>
                                    <p className="opacity-low">{image.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Gallery;
