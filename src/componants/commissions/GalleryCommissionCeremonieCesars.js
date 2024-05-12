import React from "react";
import "../../styles/GalleryCommissionRevelation.css"; // Assurez-vous d'avoir le fichier CSS pour styliser la galerie

const GalleryCommissionCeremonieCesars = () => {
    return (
        <div className='gallery'>
            <div className='row'>
                {/* Première ligne avec une seule photo centrée */}
                <div className='col-3 center'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_017.jpg")}
                        alt=' 1'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Deuxième ligne avec trois photos de même taille */}
                <div className='col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_116.jpg")}
                        alt=' 2'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_048.jpg")}
                        alt=' 3'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_237.jpg")}
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
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_005.jpg")}
                        alt=' 5'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_208.jpg")}
                        alt=' 6'
                    />
                </div>
                <div className='col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_185.jpg")}
                        alt=' 7'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-4-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_135.jpg")}
                        alt=' 8'
                    />
                </div>
                <div className='row-4-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_097.jpg")}
                        alt=' 9'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-5-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_157.jpg")}
                        alt=' 8'
                    />
                </div>
                <div className='row-5-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_169.jpg")}
                        alt=' 9'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-6-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_026.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-6-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_012.jpg")}
                        alt='11'
                    />
                </div>
                <div className='row-6-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_106.jpg")}
                        alt=' 7'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-7-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_146.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_023.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_028.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-9-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_020.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-9-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_179.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-9-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_031.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-10-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_082.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_033.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_059.jpg")}
                        alt='10'
                    />
                </div>
            </div>
            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-11-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_029.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_039.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-8-col-4'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_166.jpg")}
                        alt='10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-12-col-2'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_131.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-13-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_062.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-13-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_123.jpg")}
                        alt='10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-14-col-1'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_243.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-15-col-2'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_071.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-15-col-2'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_114.jpg")}
                        alt='10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-16-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_079.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-16-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_076.jpg")}
                        alt='10'
                    />
                </div>
                <div className='row-16-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_168.jpg")}
                        alt='10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-17-col-1'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_010.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-18-col-1'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_195.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-19-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_189.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-19-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_066.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-19-col-3'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_211.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-20-col-1'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_089.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>

            <div className='row'>
                {/* Troisième ligne avec trois photos, la première occupant une partie de deux colonnes */}
                <div className='row-21-col-2'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_246.jpg")}
                        alt=' 10'
                    />
                </div>
                <div className='row-21-col-2'>
                    <img
                        src={require("../../assets/Ceremonie_Cesars_2022/CESAR22_CEREM_LL_aLEPAIH_BD_249.jpg")}
                        alt=' 10'
                    />
                </div>
            </div>
        </div>
    );
};

export default GalleryCommissionCeremonieCesars;
