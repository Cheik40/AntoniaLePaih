import React from "react";
// import "../../styles/CommisionTheatre.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie
// import Project1 from "./CarouselProjet";
// import { Carousel } from "react-responsive-carousel";
import "../../styles/galery.css";

const GalleryProjetCacheCache = () => {
    return (
        <div className='GalleryTheatre'>
            <div className='rowThea'>
                <div className='rowThea-1-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-7.jpg")}
                        alt={
                            "2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-7.jpg"
                        }
                    />
                </div>
            </div>

            <div className='rowThea'>
                <div className='rowThea-2-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-5.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                <div className='rowThea-3-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-9.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-4-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-6.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-5-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-1.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-7-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-2.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-8-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-3.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-9-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-4.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-10-col-1'>
                    <img
                        src={require("../../assets/Theatre/2306_SoleilAmoureuxOscillant_PierrickGuillou_par_AntoniaLePaih-8.jpg")}
                        alt=' 2'
                    />
                </div>
            </div>

            <div className='rowThea'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='rowThea-6-col-1'>
                    Prise de vue de la pièce{" "}
                    <span>
                        L'amoureux, le soleil - Oscillant de l'un à l'autre
                    </span>
                    <br />
                    Création de Pierrick Guillou mêlant théâtre, vidéo et danse.
                    2023.
                    <br />
                    <br />
                    Lien de la captation vidéo : https://youtu.be/GV4LZgDk9lY{" "}
                    <br />
                    (Camera 1 : Milo Garcia / Camera 2 : Antonia Le Paih)
                </div>
            </div>
            {/* {selectedImageIndex !== -1 && (
                <Project1 current={selectedImageIndex} images={images} />
            )} */}
        </div>
    );
};

export default GalleryProjetCacheCache;
