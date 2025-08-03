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
                    <div>
                        <p>Click on mail or phone number to contact us:</p>
                        <br />
                        <p><a href="mailto:prideliving2@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services." id="mail">prideliving2@gmail.com</a></p>
                        <br />
                        <p>
                            Call us at:{" "}
                            <a href="tel:+918055425858" style={{ color: "white", textDecoration: "none" }}>
                            +918055425858
                            </a>
                        </p>
                    </div>
                    <p id="cpSecPara">Visuals are for reference only. The presence of shown<br />amenities is not assured for every property.</p>
                </div>
            </footer>
        </>
    )
}