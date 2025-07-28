import React from "react";
import '../style/MainSection.css';
import raigadHouse from "../assets/raigadHouse.png"
import shivneriHouse from "../assets/shivneriHouse.png"

export default function MainSection(){
    return(
        <>
        <div id="mainSection">
            <div id="housesSection">
                <img src={raigadHouse} alt="" id="House"/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum aliquid perspiciatis hic vel molestias. Deleniti cupiditate eaque veritatis deserunt facilis qui id neque maiores eum. Nihil eaque culpa blanditiis.</p>
                </div>
            </div>
            <div id="housesSection">
                <img src={shivneriHouse} alt="" id="House"/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum aliquid perspiciatis hic vel molestias. Deleniti cupiditate eaque veritatis deserunt facilis qui id neque maiores eum. Nihil eaque culpa blanditiis.</p>
                </div>
            </div>
        </div>
        </>
    )
}