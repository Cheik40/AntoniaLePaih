// Carousel.js
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../../../styles/carousel.css";

function Carousel({ images, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='carousel-container' onClick={onClose}>
            <div
                className='carousel-wrapper'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='carousel-slide'>
                    <img
                        src={images[currentImageIndex]}
                        alt={` ${currentImageIndex + 1}`}
                    />
                </div>
                <button className='prev-btn' onClick={prevImage}>
                    <FaArrowLeft />
                </button>
                <button className='next-btn' onClick={nextImage}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Carousel;
