import React from "react";
// import "../../styles/GalleryCommissionCesarLyceen.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie

const GalleryCommissioDejeuneNommines = () => {
    return (
        <div className='galleryCesar'>
            <div className='rowD'>
                {/* Première ligne avec une seule photo centrée */}
                <div className='rowD-1-col-1'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_010-853x1280.jpg")}
                        alt=' 1'
                    />
                </div>
            </div>
            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-2-col-1'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_026-1280x853.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>
            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-3-col-2'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_006-853x1280.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='rowD-3-col-2'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_043-853x1280.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-4-col-1'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_050-1280x853.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowD'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowD-5-col-3'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_012-853x1280.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='rowD-5-col-3'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_011-853x1280.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='rowD-5-col-3'>
                    <img
                        src={require("../../assets/Dejeuner_nommes_2022/cesar22_nom_ll_alepaih_bd_008-853x1280.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>
        </div>
    );
};

export default GalleryCommissioDejeuneNommines;
