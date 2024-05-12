import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar/Navbar";
import "../styles/About.css";

function CommissionSoireRevelation() {
    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.scrollY;

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const cls = visible ? "visible" : "hidden";
    const head = visible ? "Header fix" : "Header";
    return (
        <React.Fragment>
            <div className='about'>
                {/* <div className='navbar-about'>
                    <Navbar />
                </div> */}

                <div className={head}>
                    <div className={cls}>
                        <Navbar />
                    </div>
                </div>

                <div className='main-about'>
                    <div className='row'>
                        <div className='row-col-2'>
                            <img
                                src={require("../assets/About/Silver_Night_083.jpg")}
                                alt='Antonia Le Paih'
                            />
                        </div>
                        <div className='row-col-2'>
                            <p>
                                Diplômée en master photographie à l’Ecole
                                Nationale Supérieure Louis-Lumière, ma pratique
                                photographique s’oriente vers le documentaire
                                mais aussi la mise-en-scène. Je m’inspire de ce
                                qui m’entoure pour la nourrir. J’aime capter
                                l’humain dans son environnement. Prenant la
                                forme de portraits comme de vues d’architectures
                                ou de paysages, l’essence du sujet constitue
                                d’abord le point de départ de{" "}
                                <span> mes projets</span>.
                                <br />
                                Singularité, individualité, groupe, communauté
                                sont des thèmes qui m’inspirent.
                            </p>
                            <br />

                            <p>
                                En parallèle, je mène une activité d’assistante
                                auprès de divers photographes (presse,
                                publicité, mode). Curieuse en tout points de
                                vue, ces rencontres me permettent d’apprendre
                                continuellement sur le vaste domaine de la
                                photographie.{" "}
                            </p>
                            <br />

                            <p>
                                <span>
                                    Enfin, je complète la prise de vue avec les
                                    domaines de la
                                </span>{" "}
                                scénographie et du commissariat. Endroits qu’il
                                m'intéresse davantage d’explorer et pour
                                lesquels j’ai déjà pu explorer les contours.
                                Notamment au sein du collectif 48+, pour lequel
                                nous avons, avec trois autres collègues, imaginé
                                et réalisé deux expositions collaboratives en
                                2023.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-2-col-1'>
                            <h2>Expositions en tant qu’exposante </h2>
                            <br />
                            <em>
                                2023 _ Circus”_ Exposition “Zone(s) à défendre”
                                du collectif 48+,
                            </em>
                            <br />
                            Galerie Agent M (Paris)
                            <br />
                            <em>
                                2023 _ “Roche Latente”, Exposition collective
                                des projets de diplôme,
                                <br /> ENS Louis-Lumière (Saint-Denis)
                            </em>
                            <br />
                            <br />
                            <em>
                                2022 _ “Circus”_ Exposition à la 9ème biennale
                                photo de Conches-en-Ouche, Maison des Arts
                                (Normandie)
                            </em>
                            <br />
                            <br />
                            <h2>Expositions en tant que productrice </h2>
                            <em>
                                2023 _ Exposition collective “Ca creuse” du
                                collectif 48+,
                                <br /> Galerie Mariton, Saint-Ouen
                                (Ile-de-France)
                            </em>
                            <br />
                            <br />
                            <em>
                                2023 _ Exposition collective “C’est pas la mer à
                                voir” du collectif 48+, Galerie Larvoratoire
                                Photographique, Douarnenez (Bretagne)
                            </em>
                            <br />
                            <br />
                            <h2>Publications </h2>
                            <em>
                                2023 _ “Circus”_ Magazine “Zone(s) à défendre”
                                réalisé par le collectif 48+
                            </em>
                            <br />
                            <br />
                            <em>
                                “Publication des projets de 17 photographes
                                autour du thème “Zone(s) à défendre”, sortie à
                                l’occasion des Rencontres Image et
                                Environnement, en septembre 2023 à Zone I
                                (Loir-et-Cher)”
                            </em>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CommissionSoireRevelation;
