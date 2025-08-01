import React from "react";
import '../style/FooterSec.css';
import pgLogo from '../assets/PL Logo PNG.png'

export default function FooterSec(){
    return(
        <>
            <footer id="footerSec">
                <div id="mainFooter">
                    <img src={pgLogo} alt="pgLogo" id="pgLogoFooter"/>
                </div>
                <div id="copyrightSec">
                    <p>Copyright © 2025 | All Rights Reserved by PridePG Living Pvt Ltd.</p>
                    <p id="cpSecPara">Visuals are for reference only. The presence of shown<br />amenities is not assured for every property.</p>
                </div>
            </footer>
        </>
    )
}