import React, { useState } from "react";
import Slider from "react-slick";
// import "../styles/slick.css";
// import "../styles/slick-theme.css";
// import "../styles/GalleryCommissionCesarLyceen.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie

const Home = () => {
    const [carouselImages, setCarouselImages] = useState([]);
    const [showCarousel, setShowCarousel] = useState(false);

    const handleImageClick = (imageSrc) => {
        setCarouselImages(imageSrc);
        setShowCarousel(true);
    };

    const handleCloseCarousel = () => {
        setShowCarousel(false);
    };

    return (
        <div className='galleryCesar'>
            {showCarousel && (
                <div className='modal-overlay' onClick={handleCloseCarousel}>
                    <div className='modal'>
                        <span className='close' onClick={handleCloseCarousel}>
                            &times;
                        </span>
                        <Slider>
                            {carouselImages.map((imageSrc, index) => (
                                <div key={index}>
                                    <img src={imageSrc} alt={` ${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
            <div className='rowD'>
                {/* Première ligne avec une seule photo centrée */}
                <div className='rowD-1-col-1'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_010-853x1280.jpg")}
                        alt=' 1'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_010-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_026-1280x853.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_006-853x1280.jpg"),
                            ])
                        }
                    />
                </div>
            </div>
            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-2-col-1'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_026-1280x853.jpg")}
                        alt=' 2'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_026-1280x853.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_006-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_043-853x1280.jpg"),
                            ])
                        }
                    />
                </div>
            </div>
            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-3-col-2'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_006-853x1280.jpg")}
                        alt=' 3'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_006-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_043-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_050-1280x853.jpg"),
                            ])
                        }
                    />
                </div>
                <div className='rowD-3-col-2'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_043-853x1280.jpg")}
                        alt=' 4'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_043-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_050-1280x853.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_012-853x1280.jpg"),
                            ])
                        }
                    />
                </div>
            </div>
            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-4-col-1'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_050-1280x853.jpg")}
                        alt=' 5'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_050-1280x853.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_012-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_011-853x1280.jpg"),
                            ])
                        }
                    />
                </div>
            </div>
            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-5-col-3'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_012-853x1280.jpg")}
                        alt=' 6'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_012-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_011-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_008-853x1280.jpg"),
                            ])
                        }
                    />
                </div>
                <div className='rowD-5-col-3'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_011-853x1280.jpg")}
                        alt=' 7'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_011-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_008-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_010-853x1280.jpg"),
                            ])
                        }
                    />
                </div>
                <div className='rowD-5-col-3'>
                    <img
                        src={require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_008-853x1280.jpg")}
                        alt=' 8'
                        onClick={() =>
                            handleImageClick([
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_008-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_010-853x1280.jpg"),
                                require("../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_026-1280x853.jpg"),
                            ])
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
