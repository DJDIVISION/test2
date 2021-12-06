import React from "react";
import { HeroContainer, HeroBack, VideoBack, HeroContent, HeroH1, HeroP } from "./Elements";

//import video2 from "../../videos/video4.mp4";



const HeroSectionPartners = () => {
    return (
        <HeroContainer>
            <HeroBack>
                //<VideoBack autoPlay loop muted src={video2} type="video.mp4" />
            </HeroBack>
            <HeroContent>
                <HeroH1>Our trustfull partners</HeroH1>
                <HeroP>
                    Destiny Wolrd relies on several partners from several locations across the whole world 
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSectionPartners;
