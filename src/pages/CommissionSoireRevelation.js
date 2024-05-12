import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar/Navbar";
import GalleryCommissionRevelation from "../componants/commissions/GalleryCommissionRevelation";

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
    return (
        <React.Fragment>
            <div className='bodyHome'>
                <div className='Header'>
                    <div className={cls}>
                        <Navbar />
                    </div>
                </div>
                <div className='ImageAleatoire'>
                    <GalleryCommissionRevelation />
                </div>
            </div>
        </React.Fragment>
    );
}

export default CommissionSoireRevelation;
