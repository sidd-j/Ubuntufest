import React from 'react';
import '../Styles/GalleryPage.css';
import Layout from '../../layout';

const Gallery = () => {
    // Dynamically generate the list of images from the `public/Gallery` folder
    const images = [
        {
            src: "/Ubuntufest/Gallery/G1.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G2.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G3.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G4.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G5.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G6.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G7.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G8.png",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G9.jpg",
            title: "Ubuntu 2023",
        },
        {
            src: "/Ubuntufest/Gallery/G10.jpg",
            title: "Ubuntu 2023",
        },

        // Add more images as needed
    ];

    return (
        <Layout>
            <div>
                <p className="heading">Gallery</p>
                <div className="gallery-image">
                    {images.map((image, index) => (
                        <div key={index} className="img-box">
                            <img src={image.src} alt={image.title} />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>{image.title}</p>
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
