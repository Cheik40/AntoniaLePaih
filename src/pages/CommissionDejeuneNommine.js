import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar/Navbar";
import GalleryCommissioDejeuneNommines from "../componants/commissions/GalleryCommissioDejeuneNommines";
import "../styles/CommissioDejeuneNommines.css";

function CommissionDejeuneNommine() {
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
            <GalleryCommissioDejeuneNommines />
        </React.Fragment>
    );
}

export default CommissionDejeuneNommine;
