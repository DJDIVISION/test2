import React, { useState } from 'react';
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Nav, NavBarContainer, NavLogo, NavMenu, NavItem, NavbarLink, MenuList } from "./Elements";
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import CasinoIcon from '@mui/icons-material/Casino';
import BrushIcon from '@mui/icons-material/Brush';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RocketIcon from '@mui/icons-material/Rocket';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArticleIcon from '@mui/icons-material/Article';
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SmartIcon = styled(MenuIcon)`
     color: gold;
`;

const ArrowIcon = styled(KeyboardArrowDownIcon)`
    color: gold;
    margin-right: 20px;
`;


const Navbar = () => {

    

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
                            <NavbarLink to="telos" smooth={true} duration={500}>Telos</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="bsc" smooth={true} duration={500}>BSC</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="news" smooth={true} duration={500}>News</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="team" smooth={true} duration={500}>Team</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="gaming" smooth={true} duration={500}>Gaming</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="partners" smooth={true} duration={500}>Partners</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="nft" smooth={true} duration={500}>NFTs</NavbarLink>
                        </NavItem>
                        <NavItem>
                            <NavbarLink to="socialmedia">Social Media</NavbarLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    );
};


function DropDownMenu() {

    const [activeMenu, setActiveMenu] = useState("main");

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    

    function DropDownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
       <div className="dropdown">
           <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames="menu-primary">
               <div className="menu">
                   <MenuList>
                        <LinkS to="news"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<NewspaperIcon />} rightIcon={<NavigateNextIcon />} goToMenu="news">News</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="team"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<PeopleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="team">Team</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="gaming"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<CasinoIcon />} rightIcon={<NavigateNextIcon />} goToMenu="gaming">Gaming</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="partners"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon /> }goToMenu="partners">Partners</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="nft"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<BrushIcon />} rightIcon={<NavigateNextIcon />} goToMenu="nft">NFTs</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="social"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<TwitterIcon />} rightIcon={<NavigateNextIcon />} goToMenu="social">Social Media</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="telos"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="telos">TELOS</DropDownItem>
                    </MenuList>
                    <MenuList>
                        <LinkS to="bsc"><ArrowIcon /></LinkS>
                        <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="bsc">BSC</DropDownItem>
                    </MenuList>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "news"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<FiberNewIcon />}>Destiny World News</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />}>Partners News</DropDownItem>
                    <DropDownItem leftIcon={<CandlestickChartIcon />}>Crypto News</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "team"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <LinkR to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>CEO</DropDownItem></LinkR>
                    <LinkR to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>CIO</DropDownItem></LinkR>
                    <LinkR to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>DEVs</DropDownItem></LinkR>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "gaming"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<TelegramIcon />}>TELEGRAM BOT</DropDownItem>
                    <DropDownItem leftIcon={<LanguageIcon />}>WEBSITE</DropDownItem>
                    <DropDownItem leftIcon={<ViewInArIcon />}>METAVERSE</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "partners"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<MonetizationOnIcon />}>FORTIS</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<ViewModuleIcon />}>TELOS</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<BrushIcon />}>NFTFY</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<AccountBalanceWalletIcon />}>WOMBAT</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<AccountBalanceWalletIcon />}>ANCHOR</DropDownItem></LinkR>
                    <LinkR to="/PartnersPage"><DropDownItem leftIcon={<RocketIcon />}>T-STARTER</DropDownItem></LinkR>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "nft"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<BrushIcon />}>NFTFY</DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />}>AREAX NFT</DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />}>MARKETPLACE</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "social"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                    <DropDownItem leftIcon={<TelegramIcon />}>TELEGRAM</DropDownItem>
                    <DropDownItem leftIcon={<TwitterIcon />}>TWITTER</DropDownItem>
                    <DropDownItem leftIcon={<FacebookIcon />}>FACEBOOK</DropDownItem>
                    <DropDownItem leftIcon={<ArticleIcon />}>MEDIUM</DropDownItem>
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "telos"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "bsc"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="menu">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                </div>
           </CSSTransition>


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
