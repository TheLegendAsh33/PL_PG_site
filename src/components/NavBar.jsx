import React from "react";
import pgLogo from '../assets/PL Logo PNG.png';
import '../style/NavBar.css';

export default function NavBar() {
    return (
        <nav id="navLogo">
            <img src={pgLogo} alt="pglogo" className="pgLogo" />
        </nav>
    );
}
