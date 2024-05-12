import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar/Navbar";
// import GalleryProjetCacheCache from "../componants/Projets/GalleryProjetCacheCache";
import "../styles/CommisionTheatre.css";
import GalleryCommissionTheatre from "../componants/commissions/GalleryCommissionTheatre";

function CommisionTheatre() {
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
            <div className={head}>
                <div className={cls}>
                    <Navbar />
                </div>
            </div>

            <GalleryCommissionTheatre />
        </React.Fragment>
    );
}

export default CommisionTheatre;
