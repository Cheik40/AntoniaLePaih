import React, { useState, useEffect } from "react";
import Navbar from "../componants/navbar/Navbar";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

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
            <div className='bodyContact'>
                <div className='HeaderContact'>
                    <div className={cls}>
                        <Navbar />
                    </div>
                </div>
                <div className='main-contact'>
                    <h1>EMAIL</h1>
                    <div>antonialepaih@gmail.com</div>
                    <h1>INSTAGRAM</h1>
                    <div>
                        <Link
                            className='Link'
                            to='https://www.instagram.com/antonia_lph/'
                        >
                            @antonialph
                        </Link>
                    </div>
                    <h1>TELEPHONE</h1>
                    <div>+33 7 81 27 86 28</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CommissionSoireRevelation;
