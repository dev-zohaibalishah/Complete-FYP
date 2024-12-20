import React, { useEffect, useRef } from 'react';
import './Event.css';

const Event = ({ title, text, images, scrollInterval = 3000 }) => {
    const galleryRef = useRef(null);
    const totalImages = images.length;

    // Create a duplicated array for seamless looping
    const duplicatedImages = [...images, ...images, ...images, ...images]; // Duplicate the images three times

    const scrollLeft = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollLeft -= galleryRef.current.clientWidth / 4; // Scroll left by one image width
        }
    };

    const scrollRight = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollLeft += galleryRef.current.clientWidth / 4; // Scroll right by one image width
        }
    };

    useEffect(() => {
        const scrollGallery = () => {
            if (galleryRef.current) {
                galleryRef.current.scrollLeft += galleryRef.current.clientWidth / 4; // Auto scroll by one image width
                // Loop back to the start
                if (galleryRef.current.scrollLeft >= galleryRef.current.scrollWidth / 2) {
                    galleryRef.current.scrollLeft = 0; // Reset to the start of the original images
                }
            }
        };

        const interval = setInterval(scrollGallery, scrollInterval);
        return () => clearInterval(interval);
    }, [scrollInterval]);

    return (
        <div className="event">
            <div className="event-content">
                <h2 className="event-title">{title}</h2>
                {text.map((text, i) => (
                    <p key={i} className="event-text">{text}</p>
                ))}
            </div>
            <div className="gallery-container">
                <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
                <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
                <div className="event-gallery" ref={galleryRef}>
                    {duplicatedImages.map((image, index) => (
                        <img key={index} src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Event;
