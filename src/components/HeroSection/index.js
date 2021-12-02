import React from "react";
import { HeroContainer, HeroBack, VideoBack, HeroContent, HeroH1, HeroP } from "./Elements";
import video from "../../videos/video3.mp4";

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBack>
                <VideoBack autoPlay loop muted src={video} type="video.mp4" />
            </HeroBack>
            <HeroContent>
                <HeroH1>Connecting Technology and People</HeroH1>
                <HeroP>
                    Destiny Wolrd is an ecosystem connecting dApps and Comumunities across blockchains to onboard new projects build awareness and synergy 
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;