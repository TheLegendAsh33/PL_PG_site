import React from "react";
import '../style/MainSection.css';
import raigadHouse from "../assets/raigadHouse.png"
import shivneriHouse from "../assets/shivneriHouse.png"

export default function MainSection(){
    return(
        <>
        <div id="mainSection">
            <div></div>
            <div id="housesSection">
                <img src={raigadHouse} alt="" id="House"/>
                <div>
                    <h1><span id="color2">Boy's</span> <span id="color1">PG</span></h1>
                    <h3>Rooms & Comfort</h3>
                    <ul>
                        <li>Spacious double sharing rooms</li>
                        <li>Sturdy beds, lockers, study tables</li>
                        <li>Daily cleaning and housekeeping</li>
                    </ul>
                    <h3>Food & Kitchen</h3>
                    <ul>
                        <li>Nutritious meals with optional non-veg on request</li>
                        <li>Tea/Coffee available in mornings and evenings</li>
                        <li>Self-cooking allowed in common kitchen</li>
                    </ul>
                    <h3>Amenities</h3>
                    <ul>
                        <li>High-speed Wi-Fi and power backup</li>
                        <li>Common TV room / Lounge space</li>
                        <li>GYM Area / Carrom / Table pool</li>
                    </ul>
                    <h3>Security & Supervision</h3>
                    <ul>
                        <li>CCTV in common areas</li>
                        <li>Security guard for night duty</li>
                    </ul>
                    <h3>Rules & Lifestyle</h3>
                    <ul>
                        <li>Flexible entry/exit timings</li>
                        <li>Visitors allowed in common area (with permission)</li>
                        <li>No alcohol/drugs/smoking inside premises</li>
                    </ul>
                </div>
            </div>
            <div id="housesSection">
                <img src={shivneriHouse} alt="" id="House"/>
                <div>
                    <h1><span id="color2">Girl's</span> <span id="color1">PG</span></h1>
                   <h3>Rooms & Comfort</h3>
                    <ul>
                        <li>Cozy and well-decorated rooms with good lighting</li>
                        <li>Personal wardrobes, mirror, study table</li>
                        <li>Daily cleaning and housekeeping</li>
                    </ul>
                    <h3>Food & Kitchen</h3>
                    <ul>
                        <li>Home-style meals with focus on hygiene</li>
                        <li>Tea/coffee/snacks in the evening</li>
                        <li>Self-cooking allowed in common kitchen </li>
                    </ul>
                    <h3>Amenities</h3>
                    <ul>
                        <li>High-speed Wi-Fi and power backup</li>
                        <li>Common TV room / Lounge space</li>
                        <li>GYM Area / Carrom / Table pool</li>
                    </ul>
                    <h3>Security & Supervision</h3>
                    <ul>
                        <li>24x7 lady warden or caretaker</li>
                        <li>Security guard for night duty</li>
                        <li>No male visitors allowed inside the PG</li>
                        <li>Mandatory visitor register and ID check</li>
                    </ul>
                    <h3>Rules & Lifestyle</h3>
                    <ul>
                        <li>Entry timing restrictions </li>
                        <li>Silent hours post 10:30 PM for peaceful environment</li>
                        <li>Emergency contact always available</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}