import React from 'react';
import { SidebarContainer, Icon,  CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Logo1 } from "./Elements";
import logoTelos from "../../images/telos_logo.png";
import logoBsc from "../../images/bsc_logo.png";
import { Link } from "react-router-dom";
import "../../index.css";


function Navbar2(props) {
    return (
        <nav className="navbar2">
            <ul className="navbar2-nav"> { props.children} </ul>
        </nav>
    ) 
}

/* const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Telos" onClick={toggle}>
                    <Logo1 src={logoTelos}/>    Telos
                    </SidebarLink>
                    <SidebarLink to="BSC" onClick={toggle}>
                    <Logo1 src={logoBsc}/>    BSC
                    </SidebarLink>
                    <SidebarLink to="News" onClick={toggle}>
                    <Icon1/>News
                    </SidebarLink>
                    <SidebarLink to="/TeamPage" onClick={toggle}>
                    <Icon2/>   Team
                    </SidebarLink>
                    <SidebarLink to="Gaming" onClick={toggle}>
                    <Icon3/>    Gaming
                    </SidebarLink>
                    <SidebarLink to="/PartnersPage" onClick={toggle}>
                    <Icon4/>   Partners
                    </SidebarLink>
                    <SidebarLink to="NFTs" onClick={toggle}>
                    <Icon5/>    NFTs
                    </SidebarLink>
                    <SidebarLink to="SocialMedia" onClick={toggle}>
                    <Icon6/>    Social Media
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
} */

export default Navbar2;
