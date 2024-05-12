import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState({});

    const navRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveMenu(null);
                setActiveSubMenu({});
            }
        };

        const handleScroll = () => {
            setActiveMenu(null);
            setActiveSubMenu({});
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = (menuId) => {
        setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
    };

    const toggleSubMenu = (menuId, subMenuId) => {
        setActiveSubMenu((prevSubMenu) => ({
            ...prevSubMenu,
            [menuId]: prevSubMenu[menuId] === subMenuId ? null : subMenuId,
        }));
    };

    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenuActive = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header'>
            <div className='brand'>Antonia Le Paih</div>
            <nav ref={navRef}>
                <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                    <li className='nav-item'>
                        <li className='nav-link'>
                            <Link className='nav-link' to='/accueil'>
                                Accueil
                            </Link>
                        </li>
                    </li>

                    <li className='nav-item'>
                        <li
                            className='nav-link'
                            onClick={() => toggleMenu("projet")}
                        >
                            Projet
                        </li>
                        {activeMenu === "projet" && (
                            <ul
                                className={`submenu ${
                                    menuOpen ? "active" : ""
                                }`}
                            >
                                <li className='submenu-item'>
                                    <Link
                                        className='subsubmenu-item-link'
                                        to='/circus'
                                    >
                                        Circus
                                    </Link>
                                </li>
                                <li className='submenu-item'>
                                    <Link
                                        className='subsubmenu-item-link'
                                        to='/echappe'
                                    >
                                        Les échappées
                                    </Link>
                                </li>
                                <li className='submenu-item'>
                                    <Link
                                        className='subsubmenu-item-link'
                                        to='/cache'
                                    >
                                        Cache-Cache
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='nav-item'>
                        <li
                            className='nav-link'
                            onClick={() => toggleMenu("commission")}
                        >
                            Commission
                        </li>
                        {activeMenu === "commission" && (
                            <ul
                                className={`submenu ${
                                    menuOpen ? "active" : ""
                                }`}
                            >
                                <li
                                    className='submenu-item'
                                    onClick={() =>
                                        toggleSubMenu(
                                            "commission",
                                            "subcommission1"
                                        )
                                    }
                                >
                                    Académie des Césars
                                    {activeSubMenu["commission"] ===
                                        "subcommission1" && (
                                        <ul
                                            className={`subsubmenu ${
                                                menuOpen ? "active" : ""
                                            }`}
                                        >
                                            <li className='subsubmenu-item'>
                                                <Link
                                                    className='subsubmenu-item-link'
                                                    to='/commissionRevelation'
                                                >
                                                    Soirée des révélations 2022
                                                </Link>
                                            </li>
                                            <li className='subsubmenu-item'>
                                                <Link
                                                    className='subsubmenu-item-link'
                                                    to='/commissionDejeuneNommine'
                                                >
                                                    Déjeuner des nommés 2022
                                                </Link>
                                            </li>
                                            <li className='subsubmenu-item'>
                                                <Link
                                                    className='subsubmenu-item-link'
                                                    to='/commissionCeremonieDesCesars'
                                                >
                                                    Cérémonie des Césars 2022
                                                </Link>
                                            </li>
                                            <li className='subsubmenu-item-link'>
                                                <Link
                                                    className='subsubmenu-item-link'
                                                    to='/commissionCesarLyceen'
                                                >
                                                    Césars des lycéens 2022
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li
                                    className='submenu-item'
                                    // onClick={() =>
                                    //     toggleSubMenu(
                                    //         "commission",
                                    //         "subcommission2"
                                    //     )
                                    // }
                                >
                                    {/* {activeSubMenu["commission"] ===
                                        "subcommission2" && (
                                        <ul
                                            className={`subsubmenu ${
                                                menuOpen ? "active" : ""
                                            }`}
                                        >
                                            <li className='subsubmenu-item'>
                                                Sous-sous-commission 1
                                            </li>
                                            <li className='subsubmenu-item'>
                                                Sous-sous-commission 2
                                            </li>
                                            <li className='subsubmenu-item'>
                                                Sous-sous-commission 3
                                            </li>
                                        </ul>
                                    )} */}
                                    <Link
                                        className='subsubmenu-item-link'
                                        to='/theatre'
                                    >
                                        Théatre
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='nav-item'>
                        <li
                            to='/commission'
                            className='nav-link'
                            onClick={() => toggleMenu("journal")}
                        >
                            Journal
                        </li>
                        {activeMenu === "journal" && (
                            <ul
                                className={`submenu ${
                                    menuOpen ? "active" : ""
                                }`}
                            >
                                <li className='submenu-item'>journal 1</li>
                                <li className='submenu-item'>journal 2</li>
                                <li className='submenu-item'>journal 3</li>
                                <li className='submenu-item'>journal 4</li>
                            </ul>
                        )}
                    </li>

                    <li className='nav-item'>
                        <li
                            className='nav-link'
                            onClick={() => toggleMenu("scenographie")}
                        >
                            Scenographie
                        </li>
                        {activeMenu === "scenographie" && (
                            <ul
                                className={`submenu ${
                                    menuOpen ? "active" : ""
                                }`}
                            >
                                <li className='submenu-item'>scenographie 1</li>
                                <li className='submenu-item'>scenographie 2</li>
                                <li className='submenu-item'>scenographie 3</li>
                                <li className='submenu-item'>scenographie 4</li>
                            </ul>
                        )}
                    </li>

                    <li className='nav-item'>
                        <li
                            to='/'
                            className='nav-link'
                            onClick={() => toggleMenu("about")}
                        >
                            <Link className='nav-link' to='/about'>
                                À propos
                            </Link>
                        </li>
                    </li>

                    <li className='nav-item'>
                        <li
                            className='nav-link'
                            onClick={() => toggleMenu("contact")}
                        >
                            <Link className='nav-link' to='/'>
                                Contact
                            </Link>
                        </li>
                    </li>
                </ul>
                <Outlet />
            </nav>
            <div className='menu-toggle' onClick={toggleMenuActive}>
                <div className='menu-icon'> </div>
            </div>
        </header>
    );
};

export default Navbar;
