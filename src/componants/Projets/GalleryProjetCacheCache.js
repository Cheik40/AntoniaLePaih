import React from "react";
import "../../styles/GalleryProjetCacheCache.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie
// import Project1 from "./CarouselProjet";
// import { Carousel } from "react-responsive-carousel";
import "../../styles/galery.css";

const GalleryProjetCacheCache = () => {
    // const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    // const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    // const [selectedImage, setSelectedImage] = useState(0);
    // const [selectedImageList, setSelectedImageList] = useState([]);

    // const handleImageClick = (index) => {
    //     setSelectedImageIndex(index);
    // };

    // Tableau d'images avec des informations sur chaque image
    const images = [
        {
            id: 1,
            src: require("../../assets/Cache_cache/cache_cache_1.jpg"),
            alt: "Photo 1",
            description: "Description de la photo 1",
        },
        {
            id: 2,
            src: require("../../assets/Cache_cache/cache_cache_2.jpg"),
            alt: "Photo 2",
            description: "Description de la photo 2",
        },
        // Ajoutez ici d'autres objets d'images selon vos besoins
    ];

    // Gestionnaire de clic pour afficher une image dans le carousel
    // const handleClick = (image) => {
    //     setSelectedImage(image);
    //     let pos = images.indexOf(image);
    //     let removedItem = images.splice(pos, 1);
    //     setSelectedImageList([image, removedItem]);
    // };

    // // Gestionnaire de clic pour fermer le carousel
    // const handleCloseCarousel = () => {
    //     setSelectedImage(null);
    //     setSelectedImageList([]);
    // };

    // const images = [
    //     require("../../assets/Cache_cache/cache_cache_1.jpg"),
    //     require("../../assets/Cache_cache/cache_cache_2.jpg"),
    //     require("../../assets/Cache_cache/cache_cache_3.jpg"),
    //     require("../../assets/Cache_cache/cache_cache_4.jpg"),
    //     require("../../assets/Cache_cache/cache_cache_5.jpg"),
    // ];
    return (
        <div className='GalleryProjetCircus'>
            <div className='rowGPC'>
                {images.map((image) => (
                    <div className='rowGPC-1-col-1'>
                        <img
                            src={image.src}
                            alt={image.alt}
                            // onClick={() => handleImageClick(0)}
                            // key={1}
                            // onClick={() => handleClick(image)}
                        />
                    </div>
                ))}
            </div>

            <div className='rowGPC'>
                <div className='rowGPC-2-col-1'>
                    <img
                        src={require("../../assets/Cache_cache/cache_cache_2.jpg")}
                        alt=' 2'
                        // key={2}
                        // onClick={() =>
                        //     handleClick({
                        //         id: 2,
                        //         src: require("../../assets/Cache_cache/cache_cache_2.jpg"),
                        //         alt: "Photo 2",
                        //         description: "Description de la photo 2",
                        //     })
                        // }
                    />
                </div>
            </div>

            <div className='rowGPC'>
                <div className='rowGPC-3-col-1'>
                    <img
                        src={require("../../assets/Cache_cache/cache_cache_3.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowGPC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowGPC-4-col-1'>
                    <img
                        src={require("../../assets/Cache_cache/cache_cache_4.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowGPC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowGPC-5-col-1'>
                    <img
                        src={require("../../assets/Cache_cache/cache_cache_5.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>
            <div className='rowGPC'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowGPC-6-col-1'>
                    <div className='title-description'>
                        <span>cache-cache </span>
                        <br />
                        [2021]
                    </div>
                    <br />
                    Remerciements Julie Bayer, modèle.
                    <br />
                    Production ENS Louis-Lumière.
                </div>
            </div>
            {/* {selectedImageIndex !== -1 && (
                <Project1 current={selectedImageIndex} images={images} />
            )} */}
            {/* {selectedImage !== null && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseCarousel}>
                            &times;
                        </span>
                        <Carousel
                            showThumbs={false}
                            showStatus={true}
                            selectedItem={selectedImage}
                        >
                            {selectedImageList.map((image) => (
                                <div key={image.id}>
                                    <img src={image.src} alt={image.alt} />
                                    <p>{image.description}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default GalleryProjetCacheCache;
