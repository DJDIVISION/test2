import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { TeamCards } from "../components/TeamCard";
import InfoSection from "../components/Sections/InfoSection";
import Picture1 from "../images/logoAirlines.png";
import Picture2 from "../images/rees_logo.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnerSmallCards from "../components/PartnersHome/PartnerSmallCards";
// import Rocket2 from "../animations/Rocket2";
import { HomeNews, HomePartners, HomeTeam, HomeGaming, HomeNFT } from "../components/Sections/Data.js";



const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar />
            <HeroSection />
            {/* <InfoSection image={Picture1} title="DAIR" desc="Discover the token" buttonText="PRESS ME"/>  */}
            <InfoSection {...HomeNews}/>
            <InfoSection {...HomeTeam}/>
            <InfoSection {...HomeGaming}/>
            <InfoSection {...HomePartners}/>
            <InfoSection {...HomeNFT}/>
            <PartnerSmallCards />
            {/* <InfoSection image={Picture2} title="REES" desc="Discover the token" buttonText="PRESS ME"/> */}
            <TeamCards/>
        </motion.div>
    );
}

function Menu(props) {
    return (
        <nav className="menu">
            <ul className="menu-nav"> { props.children } </ul>
        </nav>
    )
}



export default Home;
