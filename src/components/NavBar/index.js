import React from 'react';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Logo } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/undraw_to_the_moon_v-1-mv.svg";


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
                            <NavLinks to="Telos">Telos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="BSC">BSC</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="News">News</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Team">Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Gaming">Gaming</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Partners">Partners</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="NFTs">NFTs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="SocialMedia">Social Media</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
