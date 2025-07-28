import React from "react"
import ImageSlider from "../components/ImageSlider"
import NavBar from "../components/NavBar"
import FooterSec from "../components/FooterSec"
import MainSection from "../components/MainSection"


export default function Home(){
    return(
        <>
            <NavBar/>
            <ImageSlider/>
            <MainSection/>
            <FooterSec/>
        </>
    )
}