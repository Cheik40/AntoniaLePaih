import React from "react";
import "../../styles/GalleryCommissionRevelation.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='row'>
                {/* Première ligne avec une seule photo centrée */}
                <div className='col-3 center'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_361-ll_antonialepaih-1280x853.jpg")}
                        alt=' 1'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_291-ll_antonialepaih-853x1280.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_268-ll_antonialepaih-853x1280.jpg")}
                        alt=' 3'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_47-ll_antonialepaih-853x1280.jpg")}
                        alt=' 4'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div
                    className='col-4 first-column'
                    style={{
                        marginLeft: "calc(15%)",
                        flex: "0 0 calc(20%-15%)",
                    }}
                >
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_393-ll_antonialepaih-1280x853.jpg")}
                        alt=' 5'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_266-ll_antonialepaih-853x1280.jpg")}
                        alt=' 6'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_198-ll_antonialepaih-853x1280.jpg")}
                        alt=' 7'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-4-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_222-ll_antonialepaih-853x1280.jpg")}
                        alt=' 8'
                    />
                </div>
                <div className='row-4-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_367-ll_antonialepaih-853x1280.jpg")}
                        alt=' 9'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-5-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_191-ll_antonialepaih-853x1280.jpg")}
                        alt=' 8'
                    />
                </div>
                <div className='row-5-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_435-ll_antonialepaih-853x1280.jpg")}
                        alt=' 9'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-6-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_400-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-6-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_394-ll_antonialepaih-1280x853.jpg")}
                        alt='11'
                    />
                </div>
                <div className='row-6-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_433-ll_antonialepaih-853x1280.jpg")}
                        alt=' 7'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-7-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_400-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_465-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_328-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-9-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_ambiance_ll_alepaih_bd-047-640x427.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-9-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_414-ll_antonialepaih-853x1280.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-9-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_407-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-10-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_293-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_450-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_344-ll_antonialepaih-1280x853.jpg")}
                        alt='10'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-11-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_381-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_444-ll_antonialepaih-1280x853.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Soiree_revelations_2022/cesar22_rev_452-ll_antonialepaih-1280x853.jpg")}
                        alt='10'
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
