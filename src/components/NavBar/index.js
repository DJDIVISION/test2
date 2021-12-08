import React, { useState } from 'react';
import styled from "styled-components";
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavbarLink, Logo } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from "react-router-dom";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import CasinoIcon from '@mui/icons-material/Casino';
import BrushIcon from '@mui/icons-material/Brush';
import TwitterIcon from '@mui/icons-material/Twitter';

const SmartIcon = styled(MenuIcon)`
     
`;


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Destiny Airlines</NavLogo>
                    {/* <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon> */}
                    <NavItemMenu icon={<SmartIcon />}>
                        <DropDownMenu />
                    </NavItemMenu>
                    <NavMenu>
                        <NavItem>
                            <NavbarLink to="Telos">Telos</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="BSC">BSC</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="News">News</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="/TeamPage">Team</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="Gaming">Gaming</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="/PartnersPage">Partners</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="NFTs">NFTs</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="SocialMedia">Social Media</NavbarLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};


function DropDownMenu() {

    function DropDownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
       <div className="dropdown">
           <DropDownItem leftIcon={<NewspaperIcon />} rightIcon={<NavigateNextIcon />}>News</DropDownItem>
           <DropDownItem leftIcon={<PeopleIcon />} rightIcon={<NavigateNextIcon />}>Team</DropDownItem>
           <DropDownItem leftIcon={<CasinoIcon />} rightIcon={<NavigateNextIcon />}>Gaming</DropDownItem>
           <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />}>Partners</DropDownItem>
           <DropDownItem leftIcon={<BrushIcon />} rightIcon={<NavigateNextIcon />}>NFTs</DropDownItem>
           <DropDownItem leftIcon={<TwitterIcon />} rightIcon={<NavigateNextIcon />}>Social Media</DropDownItem>
           <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />}>TELOS</DropDownItem>
           <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />}>BSC</DropDownItem>
       </div>
    );
}



function NavItemMenu(props){

    const [open, setOpen] = useState(false);

    return(
       <li className="nav-item">
           <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {props.icon}
           </a>

           {open && props.children}
       </li> 
    )
}

export default Navbar;
