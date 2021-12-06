import React from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavbarLink, Logo } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/undraw_to_the_moon_v-1-mv.svg"
import { Link } from "react-router-dom";


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Destiny Airlines</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon />
                    </MobileIcon>
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

export default Navbar;
