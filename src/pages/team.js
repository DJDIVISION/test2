import React from "react";
import { HeroContainer, HeroBack, VideoBack, HeroContent, HeroH1, HeroP } from "./Elements";

//import video3 from "../../videos/video.mp4";



const HeroSectionTeam = () => {
    return (
        <HeroContainer>
            <HeroBack>
                //<VideoBack autoPlay loop muted src={video3} type="video.mp4" />
            </HeroBack>
            <HeroContent>
                <HeroH1>The team </HeroH1>
                <HeroP>
                    This is the people that made Destiny World and all it's ecosystem possible. Get to know and get in touch with them
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSectionTeam;
