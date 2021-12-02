import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import { PartnersCard } from "../PartnerCards/index.js";
import { TeamCards } from "../components/TeamCard";
import InfoSection from "../components/Sections";
import { homeObjOne } from "../components/Sections/Data";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/> 
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <PartnersCard/>
            <TeamCards/>
        </>
    )
}

export default Home;
