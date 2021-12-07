import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { TeamCards } from "../components/TeamCard";
import InfoSection from "../components/Sections";
import Picture1 from "../images/logoAirlines.png";
import Picture2 from "../images/rees_logo.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";
import PartnerSmallCards from "../components/PartnersHome/PartnerSmallCards";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            <HeroSection />
            <InfoSection image={Picture1} title="DAIR" desc="Discover the token" buttonText="PRESS ME"/>
            <PartnerSmallCards />
            <InfoSection image={Picture2} title="REES" desc="Discover the token" buttonText="PRESS ME"/>
            <TeamCards/>
        </motion.div>
    )
}

export default Home;
