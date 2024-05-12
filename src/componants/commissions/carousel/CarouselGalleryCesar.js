import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "../../../styles/GalleryCommissionCesarLyceen.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie

const GalleryCommissionCesarLyceen = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const images = [
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_008-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_013-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_021-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_067-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_063-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_070-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_080-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_079-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_055-1280x853.jpg"),
        require("../../../assets/Cesars_lyceens_2022/cesar22_lyc_ll_alepaih_bd_056-1280x853.jpg"),
    ];

    const handleClick = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className='galleryCesar'>
            <Carousel
                selectedItem={selectedImageIndex}
                showThumbs={false}
                showStatus={false}
            >
                {images.map((image, index) => (
                    <div key={index} onClick={() => handleClick(index)}>
                        <img src={image} alt={` ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default GalleryCommissionCesarLyceen;
