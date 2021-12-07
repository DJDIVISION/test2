import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSectionPartners from "../components/HeroSection/partners.js";
import PartCards from "../components/PartnersCards/PartnerCards";
import { motion } from "framer-motion";
import { animationThree } from "../animations";
import About from "../components/Sections/About";


const PartnersPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div initial="out" animate="end" exit="out" variants={animationThree}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            <HeroSectionPartners />
            <About />
            <PartCards />
        </motion.div>
    );
};

export default PartnersPage;

