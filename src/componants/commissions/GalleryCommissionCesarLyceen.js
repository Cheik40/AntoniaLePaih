import React from "react";
import "../../styles/GalleryCommissionCesarLyceen.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie

const GalleryCommissionCesarLyceen = () => {
    return (
        <div className='galleryCesar'>
            <div className='rowC'>
                {/* Première ligne avec une seule photo centrée */}
                <div className='row-1-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_008-1280x853.jpg")}
                        alt=' 1'
                    />
                </div>
            </div>
            <div className='rowC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='row-2-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_013-1280x853.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='row-2-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_021-1280x853.jpg")}
                        alt=' 3'
                    />
                </div>
            </div>
            <div className='rowC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='row-3-col-3'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_067-1280x853.jpg")}
                        alt=' 3'
                    />
                </div>
                <div className='row-3-col-3'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_063-1280x853.jpg")}
                        alt=' 3'
                    />
                </div>
                <div className='row-3-col-3'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_070-1280x853.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='row-3-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_080-1280x853.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='row-3-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_079-1280x853.jpg")}
                        alt=' 3'
                    />
                </div>
            </div>
            <div className='rowC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='row-2-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_055-1280x853.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='row-2-col-2'>
                    <img
                        src={require("../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_056-1280x853.jpg")}
                        alt=' 3'
                    />
                </div>
            </div>
        </div>
    );
};

export default GalleryCommissionCesarLyceen;
