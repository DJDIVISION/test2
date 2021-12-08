import React, { useState } from 'react';
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavbarLink, Logo } from "./Elements";
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
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

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

    const [activeMenu, setActiveMenu] = useState("main");
    

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
                    <DropDownItem leftIcon={<NewspaperIcon />} rightIcon={<NavigateNextIcon />} goToMenu="news">News</DropDownItem>
                    <DropDownItem leftIcon={<PeopleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="team">Team</DropDownItem>
                    <DropDownItem leftIcon={<CasinoIcon />} rightIcon={<NavigateNextIcon />} goToMenu="gaming">Gaming</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon /> }goToMenu="partners">Partners</DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />} rightIcon={<NavigateNextIcon />} goToMenu="nft">NFTs</DropDownItem>
                    <DropDownItem leftIcon={<TwitterIcon />} rightIcon={<NavigateNextIcon />} goToMenu="social">Social Media</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="telos">TELOS</DropDownItem>
                    <DropDownItem leftIcon={<SupervisedUserCircleIcon />} rightIcon={<NavigateNextIcon />} goToMenu="bsc">BSC</DropDownItem>
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
                    <Link to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>CEO</DropDownItem></Link>
                    <Link to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>CIO</DropDownItem></Link>
                    <Link to="/TeamPage"><DropDownItem leftIcon={<PersonPinIcon />}>DEVs</DropDownItem></Link>
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
                    <DropDownItem leftIcon={<MonetizationOnIcon />}><Link to="/PartnersPage">FORTIS</Link></DropDownItem>
                    <DropDownItem leftIcon={<ViewModuleIcon />}><Link to="/PartnersPage">TELOS</Link></DropDownItem>
                    <DropDownItem leftIcon={<BrushIcon />}><Link to="/PartnersPage">NFTFY</Link></DropDownItem>
                    <DropDownItem leftIcon={<AccountBalanceWalletIcon />}><Link to="/PartnersPage">WOMBAT</Link></DropDownItem>
                    <DropDownItem leftIcon={<AccountBalanceWalletIcon />}><Link to="/PartnersPage">ANCHOR</Link></DropDownItem>
                    <DropDownItem leftIcon={<RocketIcon />}><Link to="/PartnersPage">T-STARTER</Link></DropDownItem>
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

           <CSSTransition in={activeMenu === "social"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="telos">
                    <DropDownItem leftIcon={<ChevronLeftIcon />} goToMenu="main" />
                </div>
           </CSSTransition>

           <CSSTransition in={activeMenu === "social"} unmountOnExit timeout={500} classNames="menu-secondary">
               <div className="bsc">
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
