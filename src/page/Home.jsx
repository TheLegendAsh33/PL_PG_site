import React from "react"
import ImageSlider from "../components/ImageSlider"
import NavBar from "../components/NavBar"
import FooterSec from "../components/FooterSec"
import MainSection from "../components/MainSection"
// import ImageCollage from "../components/ImageCollage"


export default function Home(){
    return(
        <>
            <NavBar/>
            <ImageSlider/>
            {/* <ImageCollage/> */}
            <MainSection/>
            <FooterSec/>
        </>
    )
}